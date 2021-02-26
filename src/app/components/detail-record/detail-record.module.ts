import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailRecordComponent } from './detail-record.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    DetailRecordComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    IvyCarouselModule
  ],
  exports: [
    DetailRecordComponent
  ]
})
export class DetailRecordModule { }
