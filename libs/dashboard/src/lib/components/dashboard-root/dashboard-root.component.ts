import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopNavComponent } from '@demo/core';

@Component({
  selector: 'demo-dashboard-root',
  imports: [TopNavComponent, RouterModule],
  templateUrl: './dashboard-root.component.html',
})
export class DashboardRootComponent {}
