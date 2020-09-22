import * as d3 from "d3";
interface ChartConfigInterface<U, V> {
    data: U;
    config: V;
    [key: string]: any;
}
export default class Chart<U, V> {
    d3: typeof d3;
    context: ChartConfigInterface<U, V>;
    constructor();
    loadData(data: U): void;
    loadCSV<T>(csvUrl: string, mapData?: (data: Array<T>) => U): Promise<U>;
    viewConfig(): void;
    viewData(): void;
    filterData(filter: (data: U | undefined) => U): U;
}
export {};
