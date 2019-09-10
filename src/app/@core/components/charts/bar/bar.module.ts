import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [BarComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [BarComponent]
})
export class BarModule { }
