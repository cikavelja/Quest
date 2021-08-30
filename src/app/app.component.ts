import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Flight } from 'src/app/model/flight';
import { FlightService } from './flight/service/flight.service';
import { WorkerService } from './worker/service/worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private workerService: WorkerService, private flightService: FlightService) { }
  title = 'QuestTest';
  selectedWorker: any;
  selectedFlightDetails: Flight;

  subscription: Subscription;
  intervalId: number;

  workers: Worker[] = [];
  flights: Flight[] = [];


  ngOnInit() {
    this.getWorkers();

    const source = interval(60000);
    this.subscription = source.subscribe(val => this.opensnack());

  }

  private getWorkers(): void {
    this.workerService.getWorkers()
      .subscribe(
        workers => this.workers = workers,
        () => { },
        () => this.selectDefaultListItem()
      );
  }

  private selectDefaultListItem() {
    this.selectedWorker = this.workers[0];
    this.onChange(this.workers[0]["id"])
  }

  onChange(deviceValue) {
    console.log(deviceValue);
    this.getFlights(deviceValue)
  }

  private getFlights(id: number) {
    this.flightService.getFlight(id)
      .subscribe(
        flights => this.flights = flights,
        () => { },
        () => this.showFlightDetails(this.flights[0])
      );
  }

  showFlightDetails(selectedFlight) {
    
    this.selectedFlightDetails = selectedFlight;
  }

  opensnack() {
    // I've just commented this so that you're not bombarded with an alert.
    // alert('Test'); 
    if(this.flights){
      this.showFlightDetails(this.flights[0]);
    }
    console.log("Test");
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

}
