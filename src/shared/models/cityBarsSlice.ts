import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {CityBarsState} from './types';

const initialState: CityBarsState = {
    modalText: '',
    selectedBars: [],
    barId: undefined,
    cityId: undefined,
    parentId: undefined
};

export const cityBarsSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        resetModalText: state => {
            state.modalText = ''
        },
        setSelectedBars: (state, action: PayloadAction<CityBarsState['selectedBars']>) => {
            state.selectedBars = action.payload;
        },
        setBarId: (state, action: PayloadAction<CityBarsState['barId']>) => {
            state.barId = action.payload;
        },
        setCityId: (state, action: PayloadAction<CityBarsState['cityId']>) => {
            state.cityId = action.payload;
        },
        setParentId: (state, action: PayloadAction<CityBarsState['parentId']>) => {
            state.parentId = action.payload;
        },
    },
});

export const {
    setSelectedBars,
    setBarId,
    setCityId,
    setParentId,
    resetModalText
} = cityBarsSlice.actions;

export default cityBarsSlice.reducer;
