import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './line.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [LineComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [LineComponent]
})
export class LineModule { }
