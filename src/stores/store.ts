import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { listReducer } from './list-slice';
import { detailReducer } from './detail-slice';

// Combine of reducers
const reducers = combineReducers({
    list: listReducer,
    detail: detailReducer
});

// Redux store
const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat([thunk])
});

export type RootState = ReturnType<typeof reducers>;

export default store;