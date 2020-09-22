"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const d3 = require("d3");
class Chart {
    constructor() {
        this.d3 = d3;
        this.context = {
            config: null,
            data: null
        };
    }
    loadData(data) {
        this.context.data = data;
    }
    loadCSV(csvUrl, mapData) {
        return this.d3.csv(csvUrl).then(data => {
            if (mapData) {
                this.context.data = mapData(data);
            }
            else {
                this.context.data = data;
            }
            return this.context.data;
        }).catch(err => {
            throw new Error(err);
        });
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
    filterData(filter) {
        return filter(this.context.data);
    }
}
exports.default = Chart;
