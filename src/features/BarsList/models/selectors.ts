import {RootState} from "../../../app/store";

export const selectBars = (state: RootState) => state.cityBars.selectedBars;
