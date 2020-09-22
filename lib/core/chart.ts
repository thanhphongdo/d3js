import * as d3 from "d3";



export default class Chart<U> {
    d3: typeof d3;
    data: Array<U>;
    constructor() {
        this.d3 = d3;
        this.data = [];
    }

    loadData(data: Array<any>) {
        this.data = data;
    }

    loadCSV<T>(csvUrl: string, mapData?: (data: Array<T>) => Array<any>) {
        return this.d3.csv(csvUrl).then(data => {
            if (mapData) {
                this.data = mapData(data as any);
            } else {
                this.data = data as any;
            }
            return this.data;
        }).catch(err => {
            throw new Error(err);
        })
    }

    loadTSV<T>(csvUrl: string, mapData?: (data: Array<T>) => Array<any>) {
        return this.d3.tsv(csvUrl).then(data => {
            if (mapData) {
                this.data = mapData(data as any);
            } else {
                this.data = data as any;
            }
            return this.data;
        }).catch(err => {
            throw new Error(err);
        })
    }

    // loadJSON(csvUrl: string) {
    //     return this.d3.json(csvUrl).then(data => {
    //         this.data = data as any;
    //         return data;
    //     }).catch(err => {
    //         throw new Error(err);
    //     })
    // }

    viewData() {
        console.log(this.data);
    }

    filterData(filter: (data: Array<U>) => Array<U>) {
        this.data = filter(this.data);
    }
}