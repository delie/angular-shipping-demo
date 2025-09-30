import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockVesselData1, mockVesselData2, mockVesselData3 } from '@app/vessel';
import { mockEmissionData1, mockEmissionData2 } from '../../testing/mock-emission-response';
import { EmissionChartComponent } from './emission-chart.component';

describe('EmissionChartComponent', () => {
  let component: EmissionChartComponent;
  let fixture: ComponentFixture<EmissionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmissionChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmissionChartComponent);
    fixture.componentRef.setInput('emissions', [mockEmissionData1, mockEmissionData2]);
    fixture.componentRef.setInput('vessels', [mockVesselData1, mockVesselData2, mockVesselData3]);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('computed() signals', () => {
    describe('filteredVessels$', () => {
      beforeEach(() => {
        fixture.componentRef.setInput('emissions', [mockEmissionData2]);
        fixture.componentRef.setInput('vessels', [mockVesselData1, mockVesselData2, mockVesselData3]);
      });

      it('should only include vessels that have emission data', () => {
        expect(component.filteredVessels()).toEqual([mockVesselData2]);
      });
    });
  });

  describe('onVesselChange()', () => {
    describe('when id is not recognised', () => {
      beforeEach(() => {
        component.chartOptions = {};
        component.onVesselChange(12345);
      });
      it('should not update chartOptions', () => {
        expect(component.chartOptions).toEqual({});
      });
    });

    describe('when id matches a vessel', () => {
      beforeEach(() => {
        component.chartOptions = {};
        component.onVesselChange(mockVesselData2.id);
      });
      it('should update the chartOptions', () => {
        const expected = {
          chart: {
            backgroundColor: '#1f2836',
          },
          series: [
            {
              data: [
                10,
              ],
              field: 'co2_emissions',
              name: 'CO2',
              type: 'line',
            },
            {
              data: [
                50,
              ],
              field: 'ch4_emissions',
              name: 'Methane',
              type: 'line',
            },
            {
              data: [
                30,
              ],
              field: 'nox_emissions',
              name: 'NOx',
              type: 'line',
            },
            {
              data: [
                40,
              ],
              field: 'pm_emissions',
              name: 'PM',
              type: 'line',
            },
            {
              data: [
                20,
              ],
              field: 'sox_emissions',
              name: 'SOx',
              type: 'line',
            },
          ],
          title: {
            text: 'Emissions',
          },
          xAxis: {
            categories: [
              '1 Feb 25',
            ],
            labels: {
              rotation: 90,
              step: 14,
              y: 60,
            },
            title: {
              text: 'Date',
            },
            type: 'datetime',
          },
          yAxis: {
            title: {
              text: 'Values',
            },
          },
        };
        expect(component.chartOptions).toEqual(expected);
      });
    });
  });
});
