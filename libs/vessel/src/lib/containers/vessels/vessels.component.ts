import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { VesselGridComponent } from '../../components/vessel-grid/vessel-grid.component';
import { loadVessels } from '../../store/vessel.actions';
import { selectVesselsStatus, selectVesselsValue } from '../../store/vessel.selectors';

@Component({
  selector: 'app-vessel',
  imports: [VesselGridComponent, CommonModule],
  templateUrl: './vessels.component.html',
})
export class VesselsComponent implements OnInit {
  #store$ = inject(Store);

  vesselsValue = this.#store$.selectSignal(selectVesselsValue);
  vesselsStatus = this.#store$.selectSignal(selectVesselsStatus);

  ngOnInit() {
    this.loadVessels();
  }

  loadVessels() {
    if (this.vesselsStatus() === 'Success') return;
    this.#store$.dispatch(loadVessels());
  }
}
