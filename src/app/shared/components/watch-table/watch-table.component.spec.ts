import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchTableComponent } from './watch-table.component';

describe('WatchTableComponent', () => {
  let component: WatchTableComponent;
  let fixture: ComponentFixture<WatchTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
