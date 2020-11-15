import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmChartForceDirectedTreeComponent } from './am-chart-force-directed-tree.component';

describe('AmChartForceDirectedTreeComponent', () => {
  let component: AmChartForceDirectedTreeComponent;
  let fixture: ComponentFixture<AmChartForceDirectedTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmChartForceDirectedTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmChartForceDirectedTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
