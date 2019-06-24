import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlighPaymentComponent } from './fligh-payment.component';

describe('FlighPaymentComponent', () => {
  let component: FlighPaymentComponent;
  let fixture: ComponentFixture<FlighPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlighPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlighPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
