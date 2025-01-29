import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {DEV_API} from "./constants";
import {TCityBarsResponse, TMenuResponse} from "./types";

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
        getMenu: builder.query<TMenuResponse, { cityId: number, barId: number }>({
            query: (data) => `/?action=menu.structure&city_id=${data.cityId}&bar_id=${data.barId}`,
        }),
        getCurrentMenuItem: builder.query<TMenuResponse, {
            cityId: number, barId: number, parentId: number
        }>({
            query: (data) => `/?action=menu.items&city_id=${data.cityId}&bar_id=${data.barId}&parent_id=${data.parentId}`,
        }),

    }),
});

export const {
    useGetCurrentMenuItemQuery,
    useGetMenuQuery,
    useGetCityBarsQuery
} = cityBarsApi;
