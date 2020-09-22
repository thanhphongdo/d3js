import * as d3 from "d3";

interface ChartConfigInterface<U, V> {
    data: U;
    config: V;
    [key: string]: any;
}

export default class Chart<U, V> {
    d3: typeof d3;
    context: ChartConfigInterface<U, V>;
    constructor() {
        this.d3 = d3;
        this.context = {
            config: null as any,
            data: null as any
        };
    }

    loadData(data: U) {
        this.context.data = data;
    }

    loadCSV<T>(csvUrl: string, mapData?: (data: Array<T>) => U) {
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

    // loadTSV<T>(csvUrl: string, mapData?: (data: Array<T>) => U) {
    //     return this.d3.tsv(csvUrl).then(data => {
    //         if (mapData) {
    //             this.data = mapData(data as any);
    //         } else {
    //             this.data = data as any;
    //         }
    //         return this.data;
    //     }).catch(err => {
    //         throw new Error(err);
    //     })
    // }

    // loadJSON(csvUrl: string) {
    //     return this.d3.json(csvUrl).then(data => {
    //         this.data = data as any;
    //         return data;
    //     }).catch(err => {
    //         throw new Error(err);
    //     })
    // }

    viewConfig() {
        console.log(this.context.config);
    }

    viewData() {
        console.log(this.context.data);
    }

    filterData(filter: (data: U | undefined) => U) {
        return filter(this.context.data);
    }
}