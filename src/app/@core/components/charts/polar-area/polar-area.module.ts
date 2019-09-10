import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolarAreaComponent } from './polar-area.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [PolarAreaComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [PolarAreaComponent]
})
export class PolarAreaModule { }
