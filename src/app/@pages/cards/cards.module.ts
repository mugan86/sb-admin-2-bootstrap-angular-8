import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [CardsComponent],
  imports: [
    SharedModule,
    CardsRoutingModule
  ],
  exports: [CardsComponent]
})
export class CardsModule { }
