import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockWidgetComponent } from './stock-widget.component';

describe('StocksWidgetComponent', () => {
  let component: StockWidgetComponent;
  let fixture: ComponentFixture<StockWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
