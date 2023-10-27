import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ConverterComponent } from './pages/converter/converter.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    ConverterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
