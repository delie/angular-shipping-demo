import { CommonModule, formatDate } from '@angular/common';
import { Component, input } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef, Theme } from 'ag-grid-community';
import { AllCommunityModule, colorSchemeDarkBlue, ModuleRegistry, themeQuartz } from 'ag-grid-community';
import { VesselData } from '../../interfaces/vessel-data.interface';

@Component({
  selector: 'app-vessel-grid',
  imports: [CommonModule, AgGridAngular],
  templateUrl: './vessel-grid.component.html',
})
export class VesselGridComponent {
  constructor() {
    ModuleRegistry.registerModules([AllCommunityModule]);
  }

  vessels = input<VesselData[] | null>([]);

  theme: Theme = themeQuartz.withPart(colorSchemeDarkBlue);
  columns: ColDef[] = [
    { field: 'id', headerName: 'ID', width: 100, filter: true },
    { field: 'mmsi', headerName: 'Mmsi', width: 120, filter: true },
    { field: 'imo', headerName: 'Imo', width: 100, filter: true },
    { field: 'name', headerName: 'Name', flex: 1, filter: true },
    { field: 'companyName', headerName: 'Company', flex: 1, filter: true },
    { field: 'vesselType', headerName: 'Vessel Type', flex: 1, filter: true },
    { field: 'active', headerName: 'Active', width: 100, filter: true },
    {
      field: 'startDate',
      headerName: 'Start Date',
      cellDataType: 'dateString',
      filter: true,
      valueFormatter: (params) => formatDate(new Date(params.value), 'dd/MM/yyyy', 'en-GB'),
      width: 130,
    },
  ];
}
