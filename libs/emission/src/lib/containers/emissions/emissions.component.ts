import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RequestStatus } from '@demo/core';
import { loadVessels, selectVesselData } from '@demo/vessel';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { EmissionChartComponent } from '../../components/emission-chart/emission-chart.component';
import { loadEmissions } from '../../store/emission.actions';
import { selectEmissionData } from '../../store/emission.selectors';

@Component({
  selector: 'demo-emissions',
  imports: [EmissionChartComponent, CommonModule],
  templateUrl: './emissions.component.html',
})
export class EmissionsComponent {
  #store$ = inject(Store);

  emissions$ = this.#store$.select(selectEmissionData).pipe(tap(({ status }) => this.onEmissionDataChange(status)));
  vessels$ = this.#store$.select(selectVesselData).pipe(tap(({ status }) => this.onVesselDataChange(status)));

  onEmissionDataChange(status: RequestStatus) {
    if (status !== null) return;
    this.#store$.dispatch(loadEmissions());
  }

  onVesselDataChange(status: RequestStatus) {
    if (status !== null) return;
    this.#store$.dispatch(loadVessels());
  }
}
