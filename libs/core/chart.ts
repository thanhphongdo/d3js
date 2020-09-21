import * as d3 from "d3";

export default class Chart {
    d3: typeof d3;
    data: Array<any>;
    constructor() {
        this.d3 = d3;
        this.data = [];
    }

    loadData(data: Array<any>) {
        this.data = data;
    }

    loadCSV(csvUrl: string) {
        return this.d3.csv(csvUrl).then(data => {
            this.data = data;
            return data;
        }).catch(err => {
            throw new Error(err);
        })
    }

    loadTSV(csvUrl: string) {
        return this.d3.tsv(csvUrl).then(data => {
            this.data = data;
            return data;
        }).catch(err => {
            throw new Error(err);
        })
    }

    loadJSON(csvUrl: string) {
        return this.d3.json(csvUrl).then(data => {
            this.data = data as any;
            return data;
        }).catch(err => {
            throw new Error(err);
        })
    }
}