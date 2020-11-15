import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';


import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected"; 
@Component({
  templateUrl: './am-chart-force-directed-tree.component.html',
  styleUrls: ['./am-chart-force-directed-tree.component.css']
})
export class AmChartForceDirectedTreeComponent  {
  private chart:am4plugins_forceDirected.ForceDirectedTree;

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone) {}

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("amchartforcedirectedtreediv",  
      am4plugins_forceDirected.ForceDirectedTree);
      let series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());
      series.data =[{
        "name": "First",
        "children": [{
          "name": "A1", "value": 100
        }, {
          "name": "A2", "value": 60
        }, {
          "name": "A3", "value": 30
        }]
      }, {
        "name": "Second",
        "children": [{
          "name": "B1", "value": 135
        }, {
          "name": "B2", "value": 98
        }, {
          "name": "B3", "value": 56
        }]
      }, {
        "name": "Third",
        "children": [{
          "name": "C1", "value": 335
        }, {
          "name": "C2", "value": 148
        }, {
          "name": "C3", "value": 126
        }, {
          "name": "C4", "value": 26
        }]
      }, {
        "name": "Fourth",
        "children": [{
          "name": "D1", "value": 415
        }, {
          "name": "D2", "value": 148
        }, {
          "name": "D3", "value": 89
        }, {
          "name": "D4", "value": 64
        }, {
          "name": "D5", "value": 16
        }]
      }, {
        "name": "Fifth",
        "children": [{
          "name": "E1", "value": 687
        }, {
          "name": "E2", "value": 148
        }]
      }]
      // Set up data fields
series.dataFields.value = "value";
series.dataFields.name = "name";
series.dataFields.children = "children";

// Add labels
series.nodes.template.label.text = "{name}";
series.fontSize = 10;
series.minRadius = 15;
series.maxRadius = 40;

    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
