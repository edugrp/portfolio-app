import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddAssetComponent } from './button-add-asset.component';

describe('ButtonAddAssetComponent', () => {
  let component: ButtonAddAssetComponent;
  let fixture: ComponentFixture<ButtonAddAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonAddAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAddAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
