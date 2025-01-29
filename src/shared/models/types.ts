export interface CityBarsState {
    modalText: string;
    selectedBars: TBars[]
    cityId: number | undefined,
    barId: number | undefined
}

export type TCityBarsResponse = {
    cities: TCities
}

export type TCities = {
    city_id: number,
    title: string,
    curr: string,
    diff: number,
    bars: TBars[]
}[]

export type TBars = {
    bar_id: number,
    title: string,
    address: string,
    version: number,
    phone: string,
    is_alco: number,
    start_hour: string,
    start_hour_hd: string,
    end_hour: string,
    end_hour_hd: string,
    hours: Hours
}

export type WorkDay = {
    wdays: string;
    hours: string;
    hd: boolean;
};

export type Cuisine = {
    title: string;
    data: WorkDay[];
    is_work: boolean;
};

export type Hours = {
    work: Cuisine;
    euro: Cuisine;
    japan: Cuisine;
    delivery: Cuisine;
}
