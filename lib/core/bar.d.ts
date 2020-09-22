import Chart from './chart';
interface BarChartDataInterface {
    label: string;
    value: any;
    [key: string]: any;
}
interface BarCharConfigInterface {
}
export default class BarChart<U extends Array<BarChartDataInterface>, V extends BarCharConfigInterface> extends Chart<U, V> {
    constructor();
}
export {};
