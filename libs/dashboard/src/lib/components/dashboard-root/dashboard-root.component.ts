import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent, TopNavComponent } from '@app/core';
@Component({
  selector: 'app-dashboard-root',
  imports: [TopNavComponent, RouterModule, FooterComponent],
  templateUrl: './dashboard-root.component.html',
})
export class DashboardRootComponent {}
