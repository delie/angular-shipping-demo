import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'demo-top-nav',
  imports: [RouterModule],
  templateUrl: './top-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavComponent {}
