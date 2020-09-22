import * as d3 from "d3";
export default class Chart<U> {
    d3: typeof d3;
    data: Array<U>;
    constructor();
    loadData(data: Array<any>): void;
    loadCSV<T>(csvUrl: string, mapData?: (data: Array<T>) => Array<any>): Promise<U[]>;
    loadTSV<T>(csvUrl: string, mapData?: (data: Array<T>) => Array<any>): Promise<U[]>;
    viewData(): void;
    filterData(filter: (data: Array<U>) => Array<U>): void;
}
