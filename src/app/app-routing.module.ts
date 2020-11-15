import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AmChartForceDirectedTreeComponent } from './am-chart-force-directed-tree/am-chart-force-directed-tree.component';
import { ChartComponent } from './chart/chart.component';
const routes: Routes = [
  { path: '',  redirectTo: 'chart-component',  pathMatch: 'full'},
  { path: 'chart-component', component: ChartComponent },
  { path: 'chart-force-directed-tree', component: AmChartForceDirectedTreeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }