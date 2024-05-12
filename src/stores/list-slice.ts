import { AsyncStatus } from '@/constants/common';
import { PokemonList } from '@/types/common';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface InitialListStateType {
    listData: PokemonList[],
    status: string,
    error: string | undefined,
    currentPage: number
}

const initialState: InitialListStateType = {
    listData: [],
    status: AsyncStatus.Idle,
    error: undefined,
    currentPage: 1,
};

let url = process.env.NEXT_PUBLIC_REQUEST_ENDPOINT ?? "https://pokeapi.co/api/v2/pokemon"
let maxLimit = process.env.NEXT_PUBLIC_REQUEST_MAX_LIMIT ?? 10000

// Function to fetch list data of the pokemons
export const fetchListData = createAsyncThunk('data/fetchListData', async () => {
    if (!url || !maxLimit) return

    const response = await axios.get(`${url}?limit=${maxLimit}`);

    return response.data.results
});

const listSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        resetListStates: (state) => {
            state.error = initialState.error
            state.status = initialState.status
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchListData.pending, (state) => {
                state.status = AsyncStatus.Loading;
            })
            .addCase(fetchListData.fulfilled, (state, action) => {
                state.status = AsyncStatus.Success;
                state.listData = action.payload;
            })
            .addCase(fetchListData.rejected, (state, action) => {
                state.status = AsyncStatus.Error;
                state.error = action.error.message;
            });
    },
});

export const { setCurrentPage, resetListStates } = listSlice.actions;
export const { reducer: listReducer } = listSlice;

