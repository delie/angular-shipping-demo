import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TopNavComponent } from '@demo/core';
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
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
