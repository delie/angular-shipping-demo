import { Component } from '@angular/core';
import { EmissionChartComponent } from '../../components/emission-chart/emission-chart.component';

@Component({
  selector: 'demo-emissions',
  imports: [EmissionChartComponent],
  templateUrl: './emissions.component.html',
})
export class EmissionsComponent {}
