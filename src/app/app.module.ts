import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import {AppRoutingModule} from './app-routing.module';
import { AmChartForceDirectedTreeComponent } from './am-chart-force-directed-tree/am-chart-force-directed-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    AmChartForceDirectedTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
