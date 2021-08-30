import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Flight } from 'src/app/model/flight';



@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  getFlight(id: number): Observable<Flight[]> {
    return this.http.get<Flight[]>("https://interview-mock.herokuapp.com/api/workers/" + id.toString());
  }
}
