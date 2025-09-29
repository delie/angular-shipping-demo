import { Component } from '@angular/core';
import { VesselGridComponent } from '../../components/vessel-grid/vessel-grid.component';

@Component({
  selector: 'demo-vessel',
  imports: [VesselGridComponent],
  templateUrl: './vessels.component.html',
})
export class VesselsComponent {}
