import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-polar-area',
  templateUrl: './polar-area.component.html',
  styleUrls: ['./polar-area.component.css']
})
export class PolarAreaComponent implements OnInit {
// PolarArea
public polarAreaChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
public polarAreaChartData: SingleDataSet = [300, 500, 100, 40, 120];
public polarAreaLegend = true;

public polarAreaChartType: ChartType = 'polarArea';
  constructor() { }

  ngOnInit() {
  }

}
