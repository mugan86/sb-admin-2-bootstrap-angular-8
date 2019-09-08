import { NgModule } from '@angular/core';
import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [TablesComponent],
  imports: [
    SharedModule,
    TablesRoutingModule
  ],
  exports: [TablesComponent]
})
export class TablesModule { }
