/* eslint-disable @angular-eslint/component-selector */
import { Component, input } from '@angular/core';

@Component({
  selector: 'p-menubar',
  template: '',
})
export class MockMenuBarComponent {
  model = input<unknown[]>([]);
}
