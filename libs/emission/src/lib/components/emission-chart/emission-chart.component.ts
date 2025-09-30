import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { VesselData } from '@demo/vessel';
import { EmissionData } from '../../interfaces/emission-data.interface';

@Component({
  selector: 'demo-emission-chart',
  templateUrl: './emission-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class EmissionChartComponent {
  emissions = input<EmissionData[] | null>([]);
  vessels = input<VesselData[] | null>([]);
}
