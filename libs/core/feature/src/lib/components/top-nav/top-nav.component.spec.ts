import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockLogoComponent } from '../../testing/mock-logo.component';
import { MockMenuBarComponent } from '../../testing/mock-menubar.component';
import { TopNavComponent } from './top-nav.component';

describe('TopNavComponent', () => {
  let component: TopNavComponent;
  let fixture: ComponentFixture<TopNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopNavComponent],
    })
      .overrideComponent(TopNavComponent, {
        set: {
          imports: [
            MockLogoComponent,
            MockMenuBarComponent,
          ],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(TopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
