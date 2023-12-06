import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme)
@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, FusionChartsModule],
  template: `
    <fusioncharts
      [width]="chartWidth"
      [height]="chartHeight"
      [type]="chartType"
      [dataFormat]="chartDataFormat"
      [dataSource]="chartDataSource"
    ></fusioncharts>
  `,
})
export class ChartComponent {

  @Input() chartWidth!: string;
  @Input() chartHeight!: string;
  @Input() chartType!: string;
  @Input() chartDataFormat!: string;
  @Input() chartDataSource!: any;
  
}
