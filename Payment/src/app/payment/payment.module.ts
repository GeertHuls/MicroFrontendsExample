import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from '../routes';
import { PaymentComponent } from './payment.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(APP_ROUTES),
    PaymentComponent
  ]
})
export class PaymentModule { }
