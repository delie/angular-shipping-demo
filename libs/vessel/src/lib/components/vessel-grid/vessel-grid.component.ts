import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { VesselData } from '../../interfaces/vessel-data.interface';

@Component({
  selector: 'app-vessel-grid',
  imports: [CommonModule],
  templateUrl: './vessel-grid.component.html',
})
export class VesselGridComponent {
  vessels = input<VesselData[] | null>([]);
}
