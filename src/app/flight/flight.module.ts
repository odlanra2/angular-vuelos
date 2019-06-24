import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightRoutingModule } from './flight-routing.module';
import { ContentSearchComponent } from './components/content-search/content-search.component';
import { FareFamilyComponent } from './components/fare-family/fare-family.component';
import { SeatSelectionComponent } from './components/seat-selection/seat-selection.component';
import { ListFlightComponent } from './components/list-flight/list-flight.component';
import { FlighPaymentComponent } from './components/fligh-payment/fligh-payment.component';
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  declarations: [ContentSearchComponent, FareFamilyComponent,
    SeatSelectionComponent, ListFlightComponent, FlighPaymentComponent, CalendarComponent],
  imports: [
    CommonModule,
    FlightRoutingModule

  ]
})
export class FlightModule { }
