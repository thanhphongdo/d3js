import Chart from './core/chart';

const chart = new Chart();

console.log(chart.d3);

// chart.d3.csv('xyz.csv').then(d => {
//     console.log(d);
// })

chart.loadCSV('xyz.csv').then(data => {
    console.log(chart.data);
});