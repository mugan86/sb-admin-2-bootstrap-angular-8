import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';


const routes: Routes = [
  {
    path: ``,
    component: PagesComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
      { path: 'utilities-animation', loadChildren: () => import('./animations/animations.module').then(m => m.AnimationsModule)},
      { path: 'utilities-border', loadChildren: () => import('./borders/borders.module').then(m => m.BordersModule)},
      { path: 'buttons', loadChildren: () => import('./buttons/buttons.module').then(m => m.ButtonsModule)},
      { path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule)},
      { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule)},
      { path: 'utilities-color', loadChildren: () => import('./colors/colors.module').then(m => m.ColorsModule)},
      { path: 'utilities-other', loadChildren: () => import('./other/other.module').then(m => m.OtherModule)},
      { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)},
      { path: 'blank', loadChildren: () => import('./general/blank/blank.module').then(m => m.BlankModule)},
      { path: `**`, redirectTo: `dashboard`, pathMatch: `full` }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
