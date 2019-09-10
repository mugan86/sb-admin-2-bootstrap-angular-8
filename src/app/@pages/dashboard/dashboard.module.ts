import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared.module';
import { BarModule } from 'src/app/@core/components/charts/bar/bar.module';
import { PieModule } from 'src/app/@core/components/charts/pie/pie.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    BarModule,
    PieModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
