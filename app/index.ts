import { Chart, BarChart } from '../lib';
const chart = new BarChart();
chart.loadCSV<{ year: string, value: string }>('xyz.csv', data => {
    return data.map(d => { return { label: d.year, value: d.value } });
}).then(d => {
    chart.viewConfig();
});