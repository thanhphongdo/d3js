import * as d3 from 'd3';
interface ChartConfigInterface<D, C> {
    data: D;
    config: C;
    selector: string;
    [key: string]: any;
}
export default class Chart<D, C> {
    d3: typeof d3;
    context: ChartConfigInterface<D, C>;
    constructor(selector: string);
    setSelector(selector: string): void;
    loadContext(data: D, config: C): void;
    loadData(data: D): void;
    loadConfig(config: C): void;
    loadCSV<T>(csvUrl: string, mapData?: (data: Array<T>) => D): Promise<D>;
    loadTSV<T>(csvUrl: string, mapData?: (data: Array<T>) => D): Promise<D>;
    viewConfig(): void;
    viewData(): void;
    filterData(filter: (data: D) => D): D;
}
export {};
