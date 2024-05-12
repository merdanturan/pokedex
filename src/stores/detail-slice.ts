import { AsyncStatus } from '@/constants/common';
import { PokemonDetail } from '@/types/common';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Pokemon {
    name: string;
    url: string;
}

interface InitialDetailStateType {
    detailData: PokemonDetail | null,
    status: string,
    error: string | undefined,
}

const initialState: InitialDetailStateType = {
    detailData: null,
    status: AsyncStatus.Idle,
    error: undefined,
};

// Function to fetch detail data of the pokemon
export const fetchDetailData = createAsyncThunk('data/fetchDetailData', async (url: string) => {

    const response = await axios.get(url);

    return response.data
});

const detailSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        resetDetailStates: (state) => {
            state.detailData = initialState.detailData;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDetailData.pending, (state) => {
                state.status = AsyncStatus.Loading;
            })
            .addCase(fetchDetailData.fulfilled, (state, action) => {
                state.status = AsyncStatus.Success;
                state.detailData = action.payload;
            })
            .addCase(fetchDetailData.rejected, (state, action) => {
                state.status = AsyncStatus.Error;
                state.error = action.error.message;
            });
    },
});

export const { resetDetailStates } = detailSlice.actions;
export const { reducer: detailReducer } = detailSlice;

