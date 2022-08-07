import { Component, Input, SimpleChange, ViewChild } from '@angular/core';
import {
  ChartType,
  ChartDataset,
  ChartOptions,
  GridLineOptions,
  ChartDatasetProperties,
  ChartConfiguration,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { MedChartInfo } from '../medChartInfo';
interface OnChanges {
  ngOnChanges(changes: SimpleChange): void;
}

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnChanges {
  @Input() chartInfo!: MedChartInfo;
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  lineChartData: ChartConfiguration['data'] = {
    datasets: [],
  };

  ngOnChanges(changes: SimpleChange) {
    this.lineChartData = {
      datasets: [
        {
          data: this.chartInfo.data,
          label: '',
          yAxisID: 'y-axis',
          xAxisID: 'x-axis',
          backgroundColor: '#DDD',
          borderColor: '#DDD',
          pointBackgroundColor: '#DDD',
          pointBorderColor: '#DDD',
          pointHoverBackgroundColor: '#DDD',
          pointHoverBorderColor: '#DDD',
        },
      ],
      labels: this.chartInfo.labels,
    };
  }

  lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,

    scales: {
      'x-axis': {
        grid: {
          color: '#BBB',
        },
        ticks: {
          color: '#CCC',
        },
      },
      'y-axis': {
        grid: {
          color: '#BBB',
        },
        ticks: {
          color: '#CCC',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType: ChartType = `line`;
}
