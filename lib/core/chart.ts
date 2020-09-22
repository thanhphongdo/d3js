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
    constructor(selector: string) {
        this.d3 = d3;
        this.context = {
            config: null as any,
            data: null as any,
            selector: selector
        };
    }

    setSelector(selector: string) {
        this.context.selector = selector;
    }

    loadContext(data: D, config: C) {
        this.context.data = data;
        this.context.config = config;
    }

    loadData(data: D) {
        this.context.data = data;
    }

    loadConfig(config: C) {
        this.context.config = config;
    }

    loadCSV<T>(csvUrl: string, mapData?: (data: Array<T>) => D) {
        return this.d3.csv(csvUrl).then(data => {
            if (mapData) {
                this.context.data = mapData(data as any);
            } else {
                this.context.data = data as any;
            }
            return this.context.data;
        }).catch(err => {
            throw new Error(err);
        })
    }

    loadTSV<T>(csvUrl: string, mapData?: (data: Array<T>) => D) {
        return this.d3.tsv(csvUrl).then(data => {
            if (mapData) {
                this.context.data = mapData(data as any);
            } else {
                this.context.data = data as any;
            }
            return this.context.data;
        }).catch(err => {
            throw new Error(err);
        })
    }

    viewConfig() {
        console.log(this.context.config);
    }

    viewData() {
        console.log(this.context.data);
    }

    filterData(filter: (data: D) => D) {
        return filter(this.context.data);
    }
}