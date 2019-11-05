import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksWidgetComponent } from './stocks-widget.component';

describe('StocksWidgetComponent', () => {
  let component: StocksWidgetComponent;
  let fixture: ComponentFixture<StocksWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
