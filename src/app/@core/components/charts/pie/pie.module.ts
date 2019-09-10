import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from './pie.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [PieComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [PieComponent]
})
export class PieModule { }
