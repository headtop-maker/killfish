import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {DEV_API} from "./constants";
import {TCityBarsResponse} from "./types";

export const cityBarsApi = createApi({
    reducerPath: 'cityBarsApi',
    tagTypes: [
        'Category',
    ],
    baseQuery: fetchBaseQuery({
        baseUrl: DEV_API,
    }),
    endpoints: builder => ({
        getCityBars: builder.query<TCityBarsResponse, void>({
            query: () => '/?action=cities.bars',
        }),

    }),
});

export const {
    useGetCityBarsQuery
} = cityBarsApi;
