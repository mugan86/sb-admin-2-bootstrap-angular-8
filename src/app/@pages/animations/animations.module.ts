import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationsRoutingModule } from './animations-routing.module';
import { AnimationsComponent } from './animations.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [AnimationsComponent],
  imports: [
    AnimationsRoutingModule,
    SharedModule
  ],
  exports: [AnimationsComponent]
})
export class AnimationsModule { }
