import { Chart, BarChart } from '../lib';
const chart = new BarChart();
chart.loadCSV('xyz.csv', data => {
    return data.map(d => { return d });
}).then(d => {
    chart.viewData();
});