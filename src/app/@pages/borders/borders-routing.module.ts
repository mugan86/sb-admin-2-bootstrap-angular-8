import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BordersComponent } from './borders.component';


const routes: Routes = [{path: '', component: BordersComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BordersRoutingModule { }
