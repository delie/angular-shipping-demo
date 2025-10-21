import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { loadVessels, selectVesselsStatus, selectVesselsValue } from '@app/vessel';
import { Store } from '@ngrx/store';
import { EmissionChartComponent } from '../../components/emission-chart/emission-chart.component';
import { loadEmissions } from '../../store/emission.actions';
import { selectEmissionsStatus, selectEmissionsValue } from '../../store/emission.selectors';

@Component({
  selector: 'app-emissions',
  imports: [
    EmissionChartComponent,
    CommonModule,
  ],
  templateUrl: './emissions.component.html',
})
export class EmissionsComponent implements OnInit {
  #store = inject(Store);

  vesselsValue = this.#store.selectSignal(selectVesselsValue);
  vesselsStatus = this.#store.selectSignal(selectVesselsStatus);

  emissionsValue = this.#store.selectSignal(selectEmissionsValue);
  emissionsStatus = this.#store.selectSignal(selectEmissionsStatus);

  ngOnInit() {
    this.loadVessels();
    this.loadEmissions();
  }

  loadVessels() {
    if (this.vesselsStatus() === 'Success') return;
    this.#store.dispatch(loadVessels());
  }

  loadEmissions() {
    if (this.emissionsStatus() === 'Success') return;
    this.#store.dispatch(loadEmissions());
  }
}
