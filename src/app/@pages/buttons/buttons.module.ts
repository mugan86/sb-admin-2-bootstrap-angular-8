import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { ButtonsComponent } from './buttons.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [ButtonsComponent],
  imports: [
    SharedModule,
    ButtonsRoutingModule
  ],
  exports: [ButtonsComponent]
})
export class ButtonsModule { }
