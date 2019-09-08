import { NgModule } from '@angular/core';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [ChartsComponent],
  imports: [
    SharedModule,
    ChartsRoutingModule
  ],
  exports: [ChartsComponent]
})
export class ChartsModule { }
