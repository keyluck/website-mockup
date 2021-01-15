import { Component } from '@angular/core';
import { ChartType, ChartDataSets, ChartOptions, GridLineOptions} from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {
  

  lineChartData: ChartDataSets[] = [
    { data: [11, 14, 4, 13, 16, 14, 34] },
    
  ];

  lineChartLabels: Label[] = ['M', 'T', 'W', 'Th', 'F', 'S', 'S'];

  lineChartOptions:ChartOptions = {
    responsive: true,
    scales: {
      gridLines: {
        color: 'white',
      }
    }
    
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'white',
    },
  ]
  
  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType:ChartType = `line`;
  
}
