import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleModule } from '../@core/components/shared/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule,
    PageTitleModule
  ],
  exports: [
    CommonModule,
    PageTitleModule
  ]
})
export class SharedModule { }
