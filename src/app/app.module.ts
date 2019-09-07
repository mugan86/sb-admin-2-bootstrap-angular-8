import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './@core/components/shared/header/header.component';
import { FooterComponent } from './@core/components/shared/footer/footer.component';
import { NavbarComponent } from './@core/components/shared/navbar/navbar.component';
import { BreadcrumbComponent } from './@core/components/shared/breadcrumb/breadcrumb.component';
import { ScrollTopComponent } from './@core/components/shared/scroll-top/scroll-top.component';
import { ComponentsModule } from './@core/components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    BreadcrumbComponent,
    ScrollTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
