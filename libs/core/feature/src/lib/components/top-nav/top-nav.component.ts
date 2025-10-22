import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { LogoComponent } from '../logo/logo.component';
@Component({
  selector: 'app-top-nav',
  imports: [LogoComponent, Menubar],
  templateUrl: './top-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavComponent {
  items: MenuItem[] = [
    { label: 'Home', routerLink: '/', icon: 'pi pi-home' },
    { label: 'Vessels', routerLink: '/vessels', icon: 'pi pi-crown' },
    { label: 'Emissions', routerLink: '/emissions', icon: 'pi pi-chart-bar' },
  ];
}
