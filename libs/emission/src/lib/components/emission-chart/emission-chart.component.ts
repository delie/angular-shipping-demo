import { CommonModule, formatDate } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { VesselData } from '@app/vessel';
import { ChartConstructorType, HighchartsChartComponent } from 'highcharts-angular';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SelectModule } from 'primeng/select';
import { EmissionData } from '../../interfaces/emission-data.interface';
import { TimeSeriesData } from '../../interfaces/time-series-data.interface';

@Component({
  selector: 'app-emission-chart',
  templateUrl: './emission-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SelectModule,
    ReactiveFormsModule,
    FloatLabelModule,
    HighchartsChartComponent,
  ],
})
export class EmissionChartComponent {
  #formBuilder = new FormBuilder();

  emissions = input<EmissionData[] | null>([]);
  vessels = input<VesselData[] | null>([]);
  filteredVessels = computed(() => this.vessels()?.filter((v) => this.emissions()?.some((e) => e.id === v.id)) ?? []);

  formGroup = this.#formBuilder.group({
    vesselId: [null],
  });

  chartOptions: Highcharts.Options = { title: { text: 'Emissions' } };
  chartConstructor: ChartConstructorType = 'chart';
  updateFlag = false;
  oneToOneFlag = true;

  onVesselChange(id: number) {
    const data = this.emissions()?.find((e) => e.id === id);
    if (!data) return;

    const seriesConfig = [
      { name: 'CO2', type: 'line', field: 'co2_emissions' },
      { name: 'Methane', type: 'line', field: 'ch4_emissions' },
      { name: 'NOx', type: 'line', field: 'nox_emissions' },
      { name: 'PM', type: 'line', field: 'pm_emissions' },
      { name: 'SOx', type: 'line', field: 'sox_emissions' },
    ];

    this.chartOptions = {
      chart: {
        backgroundColor: '#1f2836',
      },
      title: {
        text: 'Emissions',
      },
      series: seriesConfig.map((s) => ({ ...s, data: data.timeSeries.map((t) => t[s.field as keyof TimeSeriesData] as number) })),
      xAxis: {
        categories: data.timeSeries.map((t) => formatDate(new Date(t.report_from_utc), 'd MMM yy', 'en-GB')),
        title: { text: 'Date' },
        type: 'datetime',
        labels: {
          step: 14,
          rotation: 90,
          y: 60,
        },
      },
      yAxis: { title: { text: 'Values' } },
    } as Highcharts.Options;
  }
}
