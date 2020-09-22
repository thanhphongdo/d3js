"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("../lib");
const chart = new lib_1.BarChart();
chart.loadCSV('xyz.csv', data => {
    return data.map(d => { return d; });
}).then(d => {
    chart.viewData();
});
