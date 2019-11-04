import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksWidgetListComponent } from './stocks-widget-list.component';

describe('StocksWidgetListComponent', () => {
  let component: StocksWidgetListComponent;
  let fixture: ComponentFixture<StocksWidgetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksWidgetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksWidgetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
