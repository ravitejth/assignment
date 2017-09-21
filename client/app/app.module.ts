import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';
import { CommonModule }  from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { AppComponent }  from './app.component';
import { FormComponent }  from './form/form.component';
import { FormDataComponent }  from './form-data/form-data.component';

// ROUTING
import { AppRoutingModule } from './app-routing.module';

// SERVICES
import { HttpService }    from '../services/http.service';
import { DataService }    from '../services/data.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    FormComponent,
    FormDataComponent
  ],
  providers: [
    HttpService,
    DataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
