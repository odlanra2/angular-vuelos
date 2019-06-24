import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	hotelBtn = true;
    flightBtn = false;
    soloIda = false;
    idaVuelta = true;

    destinyForm: FormGroup;
    submitted = false;
    success = false;

    minDate: Date;
    minDateReturn: Date;
    minDateReturnRef: Date;
    minDateReturnRefFlight: Date;
    minDateReturnFlight: Date;
    maxDate: Date;
    Ref: Date;

    @ViewChild('fechaIdaVuelo') fechaIdaVuelo: ElementRef;
    @ViewChild('fechaIda') fechaIda: ElementRef;

    constructor(private formBuilder: FormBuilder, private localeService: BsLocaleService, private renderer: Renderer2) {

        this.minDate = new Date();
        this.maxDate = new Date();

        this.minDate.setDate(this.minDate.getDate());
        this.maxDate.setDate(this.maxDate.getDate() + 365);

        esLocale.weekdaysShort = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'];
        esLocale.week.dow = 1;
        esLocale.months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        defineLocale('es', esLocale);

        if (!this.minDateReturn) {
            this.minDateReturnRef = this.minDate;
        }
    }

    ngOnInit() {
      this.destinyForm = this.formBuilder.group({
        destiny: ['', Validators.required],
        origin: ['', Validators.required]
      });
      this.localeService.use('es');
    }

    /* Validación fechas del Datepicker */
    onValueChange(value: Date, flight: string): void {

        this.Ref = new Date();
        this.Ref.setDate(value.getDate() + 1);
        this.Ref.setMonth(value.getMonth());
        this.Ref.setFullYear(value.getFullYear());

        if (value.getDate() === 30) {
            if (value.getMonth() + 1 === 4 || value.getMonth() + 1 === 6 || value.getMonth() + 1 === 9 || value.getMonth() + 1 === 11) {
                this.Ref.setMonth(value.getMonth() + 1);
            }
            if ((value.getMonth() + 1 === 12) || (value.getMonth() + 1 === 1 || value.getMonth() + 1 === 3 ||
            value.getMonth() + 1 === 5 || value.getMonth() + 1 === 7 || value.getMonth() + 1 === 8 || value.getMonth() + 1 === 10 ||
            value.getMonth() + 1 === 12)) {
                this.Ref.setDate(31);
                this.Ref.setMonth(value.getMonth());
            }
        } else if (value.getDate() === 31) {
            if (value.getMonth() + 1 === 12) {
                this.Ref.setDate(1);
                this.Ref.setMonth(this.Ref.getMonth() + 1);
                this.Ref.setFullYear(value.getFullYear());
            }
            if (value.getMonth() + 1 === 1 || value.getMonth() + 1 === 3 ||
            value.getMonth() + 1 === 5 || value.getMonth() + 1 === 7 || value.getMonth() + 1 === 8 || value.getMonth() + 1 === 10 ||
            value.getMonth() + 1 === 12) {
                this.Ref.setDate(1);
                this.Ref.setMonth(value.getMonth() + 1);
            }
        }

        if (flight === 'flight') {
            this.minDateReturnFlight = this.Ref;
        } else {
            this.minDateReturn = this.Ref;
        }

        this.minDateReturnRef = this.Ref;
        this.minDateReturnRefFlight = this.Ref;
    }

    onSubmit() {
      this.submitted = true;

      if (this.destinyForm.invalid) {
          return;
      }

      this.success = true;
    }

    hotelSelection() {
        this.hotelBtn = true;
        this.flightBtn = false;
        this.minDateReturnFlight = null;
        this.minDateReturnRef = this.minDate;
        this.renderer.setProperty(this.fechaIda.nativeElement, 'value', '');
        // this.fechaIda.nativeElement.value = ''
        console.log('Buscador Hoteleria');
    }

    flightSelection() {
        this.flightBtn = true;
        this.hotelBtn = false;
        this.minDateReturn = null;
        this.minDateReturnRefFlight = this.minDate;
        // this.fechaIdaVuelo.nativeElement.value = '';
        this.renderer.setProperty(this.fechaIdaVuelo.nativeElement, 'value', '');
        console.log('Buscador Boleteria');
    }

    isIdaVuelta() {
        this.idaVuelta = true;
        this.soloIda = false;
        this.minDateReturnFlight = null;
        this.minDateReturnRefFlight = this.minDate;
        // this.fechaIdaVuelo.nativeElement.value = '';
        this.renderer.setProperty(this.fechaIdaVuelo.nativeElement, 'value', '');
        console.log('Vuelo ida vuelta');
    }

    isSoloIda() {
        this.soloIda = true;
        this.idaVuelta = false;
        this.minDateReturnFlight = null;
        // this.fechaIdaVuelo.nativeElement.value = '';
        this.renderer.setProperty(this.fechaIdaVuelo.nativeElement, 'value', '');
        console.log('Vuelo solo ida');
    }

}
