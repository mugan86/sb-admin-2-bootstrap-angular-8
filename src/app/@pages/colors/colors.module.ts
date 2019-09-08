import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorsRoutingModule } from './colors-routing.module';
import { ColorsComponent } from './colors.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [ColorsComponent],
  imports: [
    SharedModule,
    ColorsRoutingModule
  ],
  exports: [ColorsComponent]
})
export class ColorsModule { }
