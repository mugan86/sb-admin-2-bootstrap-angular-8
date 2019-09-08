import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BordersRoutingModule } from './borders-routing.module';
import { BordersComponent } from './borders.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [BordersComponent],
  imports: [
    SharedModule,
    BordersRoutingModule
  ],
  exports: [BordersComponent]
})
export class BordersModule { }
