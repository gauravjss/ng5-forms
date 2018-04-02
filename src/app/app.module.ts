import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TdFormComponent } from './td-form/td-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TdForm2Component } from './td-form2/td-form2.component';
import { ReactiveFormAssignComponent } from './reactive-form-assign/reactive-form-assign.component';

@NgModule({
  declarations: [
    AppComponent,
    TdFormComponent,
    ReactiveFormComponent,
    TdForm2Component,
    ReactiveFormAssignComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
