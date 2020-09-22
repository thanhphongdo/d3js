import Chart from './chart';
interface BarChartDataInterface {
    label: string;
    value: any;
    [key: string]: any;
}
interface BarCharConfigInterface {
    [key: string]: any;
}
export default class BarChart<D extends Array<BarChartDataInterface>, C extends BarCharConfigInterface> extends Chart<D, C> {
    constructor(selector: string);
}
export {};
