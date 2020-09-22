import Chart from './chart';

interface BarChartDataInterface {
    label: string;
    value: any;
    [key: string]: any;
}

export default class BarChart<T extends BarChartDataInterface> extends Chart<T> {
    constructor() {
        super();
    }
}