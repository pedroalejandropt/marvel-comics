import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GridRecordsComponent } from './grid-records.component';

@NgModule({
  declarations: [
    GridRecordsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatTooltipModule
  ],
  exports: [
    GridRecordsComponent
  ],
})
export class GridRecordsModule { }
