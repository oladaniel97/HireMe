import {configureStore,combineReducers,applyMiddleware} from '@reduxjs/toolkit';

import userReducer from './reducers';

const RootReducer = combineReducers({userReducer:userReducer,})

export type RootState = ReturnType<typeof RootReducer>;

export const Store = configureStore({reducer:RootReducer})