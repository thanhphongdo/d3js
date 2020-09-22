"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const d3 = require("d3");
class Chart {
    constructor() {
        this.d3 = d3;
        this.data = [];
    }
    loadData(data) {
        this.data = data;
    }
    loadCSV(csvUrl, mapData) {
        return this.d3.csv(csvUrl).then(data => {
            if (mapData) {
                this.data = mapData(data);
            }
            else {
                this.data = data;
            }
            return this.data;
        }).catch(err => {
            throw new Error(err);
        });
    }
    loadTSV(csvUrl, mapData) {
        return this.d3.tsv(csvUrl).then(data => {
            if (mapData) {
                this.data = mapData(data);
            }
            else {
                this.data = data;
            }
            return this.data;
        }).catch(err => {
            throw new Error(err);
        });
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
    filterData(filter) {
        this.data = filter(this.data);
    }
}
exports.default = Chart;
