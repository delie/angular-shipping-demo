import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, RouterModule } from '@angular/router';
import { MockFooterComponent, MockTopNavComponent, TopNavComponent } from '@app/core';
import { DashboardRootComponent } from './dashboard-root.component';

describe('DashboardRootComponent', () => {
  let component: DashboardRootComponent;
  let fixture: ComponentFixture<DashboardRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DashboardRootComponent,
        TopNavComponent,
      ],
      providers: [
        provideRouter([]),
      ],
    })
      .overrideComponent(DashboardRootComponent, {
        set: {
          imports: [
            MockTopNavComponent,
            MockFooterComponent,
            RouterModule,
          ],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(DashboardRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
