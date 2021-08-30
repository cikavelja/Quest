import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private http: HttpClient) { }

  getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>("https://interview-mock.herokuapp.com/api/workers/");

    // return this.http.get<Worker>("https://interview-mock.herokuapp.com/api/workers/")
    // .pipe(
    //   tap(_ => console.log('fetched heroes')),
    //   catchError(this.handleError<Worker>('getHeroes', []))
    // );
    //return this.http.get<Worker[]>(`https://interview-mock.herokuapp.com/api/workers/`).
    // pipe(
    //    map((data: Worker[]) => {
    //      return data as Worker[];
    //    })
    // )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      //console.log('Error occured:', error.message)
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getUsers():Observable<Worker[]> {
    return this.http.get<Worker[]>(`https://reqres.in/api/users`).
        pipe(
           map((data: Worker[]) => {
             return data as Worker[];
           })
        )
    }
}
