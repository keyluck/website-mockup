import { Component, Input, SimpleChange } from '@angular/core';
import {
  ChartType,
  ChartDataSets,
  ChartOptions,
  GridLineOptions,
} from 'chart.js';
import { Color, Label } from 'ng2-charts';
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
  lineChartData: ChartDataSets[] = [];
  lineChartLabels: Label[] = [];
  ngOnChanges(changes: SimpleChange) {
    this.lineChartData = [
      {
        data: this.chartInfo.data,
      },
    ];
    this.lineChartLabels = this.chartInfo.labels;
  }

  lineChartOptions: ChartOptions = {
    responsive: true,

    scales: {
      scaleLabel: {
        fontColor: 'white',
      },
      xAxes: [
        {
          gridLines: {
            color: 'white',
            zeroLineColor: 'white',
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: 'white',
            zeroLineColor: 'white',
          },
        },
      ],
    },
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'white',
      pointBackgroundColor: 'white',
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType: ChartType = `line`;
}
