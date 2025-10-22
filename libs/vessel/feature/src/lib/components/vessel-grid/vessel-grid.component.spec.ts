import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VesselGridComponent } from '../vessel-grid/vessel-grid.component';

describe('VesselGridComponent', () => {
  let component: VesselGridComponent;
  let fixture: ComponentFixture<VesselGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VesselGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VesselGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
