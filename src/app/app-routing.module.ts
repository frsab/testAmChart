import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { ChartComponent } from './chart/chart.component';
const routes: Routes = [
  {  path: '',  redirectTo: 'first-component',  pathMatch: 'full'},

  { path: 'first-component', component: ChartComponent },
  { path: 'second-component', component: ChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }