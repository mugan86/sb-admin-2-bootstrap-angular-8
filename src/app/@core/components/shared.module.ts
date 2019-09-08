import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { ScrollTopComponent } from './shared/scroll-top/scroll-top.component';
import { RouterModule } from '@angular/router';
import { SearchNavbarComponent } from './shared/search-navbar/search-navbar.component';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    ScrollTopComponent,
    SearchNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ SidebarComponent, HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    ScrollTopComponent, SearchNavbarComponent]
})
export class SharedModule { }
