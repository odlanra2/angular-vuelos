import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UiRoutingModule } from './ui-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, LayoutComponent],
  exports: [LayoutComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    UiRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UiModule { }
