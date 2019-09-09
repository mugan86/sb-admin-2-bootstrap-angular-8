import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../@core/components/shared.module';
import { OWL_DATE_TIME_LOCALE, OwlDateTimeIntl } from 'ng-pick-datetime';
import { DefaultIntl } from '../@core/constants/default-intl';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ],
  exports: [
    PagesComponent
  ],
  providers: [
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'es'},
    {provide: OwlDateTimeIntl, useClass: DefaultIntl},
  ],
})
export class PagesModule { }
