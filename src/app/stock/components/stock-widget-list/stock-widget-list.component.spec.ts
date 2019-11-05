import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockWidgetListComponent } from './stock-widget-list.component';

describe('StockWidgetListComponent', () => {
  let component: StockWidgetListComponent;
  let fixture: ComponentFixture<StockWidgetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockWidgetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockWidgetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
