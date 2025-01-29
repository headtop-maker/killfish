import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {CityBarsState} from './types';

const initialState: CityBarsState = {
    modalText: '',
    selectedBars: [],
    barId: undefined,
    cityId: undefined

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
        setCityId: (state, action: PayloadAction<CityBarsState['barId']>) => {
            state.barId = action.payload;
        },
    },
});

export const {
    setSelectedBars,
    setBarId,
    setCityId,
    resetModalText
} = cityBarsSlice.actions;

export default cityBarsSlice.reducer;
