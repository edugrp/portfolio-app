import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWalletDashboardComponent } from './my-wallet-dashboard.component';

describe('MyWalletDashboardComponent', () => {
  let component: MyWalletDashboardComponent;
  let fixture: ComponentFixture<MyWalletDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWalletDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWalletDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
