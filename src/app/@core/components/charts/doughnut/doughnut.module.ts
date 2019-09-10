import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoughnutComponent } from './doughnut.component';



@NgModule({
  declarations: [DoughnutComponent],
  imports: [
    CommonModule
  ],
  exports: [DoughnutComponent]
})
export class DoughnutModule { }
