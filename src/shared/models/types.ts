export interface CityBarsState {
    modalText: string;
    selectedBars: TBars[]
    cityId: number | undefined,
    barId: number | undefined,
    parentId: number | undefined
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

export interface TStructureItem {
    id: number;
    parent_id: number;
    title: string;
    small_title: string;
    type: string;
    cex_id: number;
    active: number;
    image: string;
    image_hq: string;
    menu_count: number;
    childs: number[];
}

export type TStructure = Record<number, TStructureItem>;

export type TMenuResponse = {
    ok: true,
    root: number,
    structure: TStructure
    childs: string[]

}
export type IProductResponse = {
    ok: true,
    items: IProduct[]
}

type PriceDetails = {
    card: number;
    full: number;
};

export  type IProduct = {
    item_id: number;
    parent_id: number;
    title: string;
    small_title: string;
    active: number;
    descr: string;
    cook_comm: any[];
    price: number;
    prices: PriceDetails;
    composite: number;
    mod: string;
    action_id: number;
    action_type: string;
    image: string;
    image_hq: string;
    parents: any[];
    actions: null | any;
};
