import { NgModule } from '@angular/core';

import { OtherRoutingModule } from './other-routing.module';
import { OtherComponent } from './other.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [OtherComponent],
  imports: [
    SharedModule,
    OtherRoutingModule
  ],
  exports: [OtherComponent]
})
export class OtherModule { }
