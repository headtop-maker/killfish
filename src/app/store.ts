import {combineReducers, configureStore} from "@reduxjs/toolkit";
import cityBarsReducer from '../shared/models/cityBarsSlice';
import {cityBarsApi} from "../shared/models/cityBarsApi";


const reducers = combineReducers({
    cityBars: cityBarsReducer,
    [cityBarsApi.reducerPath]: cityBarsApi.reducer,
});

export const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(cityBarsApi.middleware),
});

export type RootState = ReturnType<typeof reducers>;

export type AppDispatch = typeof store.dispatch;
