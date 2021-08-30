import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightService } from './flight/service/flight.service';
import { WorkerService } from './worker/service/worker.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,      
  ],
  providers: [
    WorkerService,
    FlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
