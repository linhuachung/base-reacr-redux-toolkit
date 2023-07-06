import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from './reducer/rootReducer.js';
import thunk from 'redux-thunk';


const middleware = [...getDefaultMiddleware(), thunk]
export const store = configureStore({
    reducer: rootReducer,
    middleware
})

