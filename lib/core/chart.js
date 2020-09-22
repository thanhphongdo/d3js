"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const d3 = require("d3");
class Chart {
    constructor(selector) {
        this.d3 = d3;
        this.context = {
            config: null,
            data: null,
            selector: selector
        };
    }
    setSelector(selector) {
        this.context.selector = selector;
    }
    loadContext(data, config) {
        this.context.data = data;
        this.context.config = config;
    }
    loadData(data) {
        this.context.data = data;
    }
    loadConfig(config) {
        this.context.config = config;
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
    loadTSV(csvUrl, mapData) {
        return this.d3.tsv(csvUrl).then(data => {
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
