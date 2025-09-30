import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RequestStatus } from '@app/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { VesselGridComponent } from '../../components/vessel-grid/vessel-grid.component';
import { loadVessels } from '../../store/vessel.actions';
import { selectVesselData } from '../../store/vessel.selectors';

@Component({
  selector: 'app-vessel',
  imports: [VesselGridComponent, CommonModule],
  templateUrl: './vessels.component.html',
})
export class VesselsComponent {
  #store$ = inject(Store);

  vessels$ = this.#store$.select(selectVesselData).pipe(tap(({ status }) => this.onVesselDataChange(status)));

  onVesselDataChange(status: RequestStatus) {
    if (status !== null) return;
    this.#store$.dispatch(loadVessels());
  }
}
