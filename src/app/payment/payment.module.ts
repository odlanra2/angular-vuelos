import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [CreditCardComponent, PaymentComponent],
  exports: [ PaymentComponent ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
