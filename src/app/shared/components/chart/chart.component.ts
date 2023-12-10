import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
// import {} from ''

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  template: `
    <div>
      <canvas baseChart
              [data]="lineChartData"
              [options]="lineChartOptions"
              [legend]="lineChartLegend"
              width="400"
              height="300"
              [type]="'line'">
      </canvas>
    </div>
  `,
})
export class ChartComponent {
  @Input() transactionsData: any[] = [];
  @Input() chartTitle: string = 'Chart Title';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: []
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };

  public lineChartLegend = true;

  ngOnInit(): void {
    this.initializeChartData();
  }

  private initializeChartData(): void {
    this.lineChartData.labels = this.transactionsData.map(transaction => transaction.date);
    this.lineChartData.datasets = [
      {
        data: this.transactionsData.map(transaction => transaction.amount),
        label: this.chartTitle,
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ];
  }
}
