import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    loginForm: FormGroup;
    submitted = false;
    success = false;

  coins = false
  listCoins: Array<any> = [
    { code: 'VES', name: 'Bolivar Soberano' },
    { code: 'AUD', name: 'Dolar Australiano' },
    { code: 'CAD', name: 'Dolar Canadience' },
    { code: 'USD', name: 'Dolar Estadounidense' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'Libra Esterlina' },
    { code: 'ARS', name: 'Peso Argentino' },
    { code: 'CLP', name: 'Peso Chileno' },
    { code: 'COP', name: 'Peso Colombiano' },
    { code: 'DOP', name: 'Peso Dominicano' },
    { code: 'MXN', name: 'Peso Mexicano' },
    { code: 'UYU', name: 'Peso Uruguayo' },
    { code: 'BRL', name: 'Real Brasileño' },
    { code: 'RUB', name: 'Rublo Ruso' },
    { code: 'JPY', name: 'Yen Japones' },
    { code: 'CNY', name: 'Yuan Chino' },
  ]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        pass: ['', Validators.required]
      });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
        return;
    }

    this.success = true;
  }

  @HostListener('document:click', ['$event']) salir(e) {
    // e.preventDefault()
    e.stopPropagation()
    this.coins = false
  }

  showCoins(e): void {
    e.stopPropagation()
    this.coins = !this.coins
  }

  selctCoin(e, index) {
    e.stopPropagation()
    this.coins = !this.coins
    console.log('monenda seleccionada:', this.listCoins[index].name)
  }

  preventCloseLogin(event: MouseEvent) {
    event.stopImmediatePropagation();
    }
}

