import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cardio } from '../models/cardio';

@Injectable({
  providedIn: 'root'
})
export class CardioService {

private url = environment.baseUrl + 'api/workouts';



  constructor(private  http: HttpClient) { }

index(): Observable<Cardio[]>{
  return this.http.get<Cardio[]>(this.url).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError(
        () => new Error('CardioService.index(): error retrieving workout: ' + err)
      );
    })
  );
}


}
