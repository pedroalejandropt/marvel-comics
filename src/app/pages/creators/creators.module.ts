import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatorsRoutingModule } from './creators-routing.module';
import { CreatorsComponent } from './creators.component';
import { GridRecordsModule } from 'src/app/components/grid-records/grid-records.module';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { DetailRecordModule } from 'src/app/components/detail-record/detail-record.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    CreatorsComponent
  ],
  imports: [
    CommonModule,
    CreatorsRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    GridRecordsModule,
    DetailRecordModule,
    FormsModule,
    MatProgressSpinnerModule
  ]
})
export class CreatorsModule { }
