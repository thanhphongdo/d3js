const Chart = require('../lib');
const chart = new Chart.BarChart();
chart.loadCSV('xyz.csv', data => {
    return data.map(d => {return d});
}).then(d => {
    chart.viewData();
});