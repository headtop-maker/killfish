import {RootState} from "../../../app/store";

export const selectBarId = (state: RootState) => state.cityBars.barId;
export const selectCityId = (state: RootState) => state.cityBars.cityId;

export const selectParentId = (state: RootState) => state.cityBars.parentId;
