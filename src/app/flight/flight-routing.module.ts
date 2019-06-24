import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FareFamilyComponent } from './components/fare-family/fare-family.component';
import { FlighPaymentComponent } from './components/fligh-payment/fligh-payment.component';
import { ListFlightComponent } from './components/list-flight/list-flight.component';
import { ContentSearchComponent } from './components/content-search/content-search.component';
import { SeatSelectionComponent } from './components/seat-selection/seat-selection.component';
import { CalendarComponent } from './components/calendar/calendar.component';


const routes: Routes = [
    {
        path: '', component: ContentSearchComponent,
        children: [
            { path: 'list', component: ListFlightComponent },
            { path: 'calendar', component: CalendarComponent },
            { path: 'fare-family', component: FareFamilyComponent },
            { path: 'seat', component: SeatSelectionComponent },
            { path: '', pathMatch: 'full', redirectTo: 'list' }
        ]
    },
    {
        path: 'pago',
        component: FlighPaymentComponent,
        children: [
            {
                path: '',
                loadChildren: '../payment/payment.module#PaymentModule',
            }
        ]

    },
    { path: '**', pathMatch: 'full', redirectTo: '' }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FlightRoutingModule { }
