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

create(cardio: Cardio): Observable<Cardio>{
  cardio.enabled = false;
return this.http.post<Cardio>(this.url,cardio).pipe(
  catchError((err:any) => {
    console.error(err);
    return throwError(
      () => new Error( 'CardioService.create(): error creating workout: ' + err)
    );
  })
);
}

update(cardio: Cardio, id: number): Observable<Cardio> {
  return this.http.put<Cardio>(this.url + '/' + id, cardio).pipe(
    catchError((err:any) => {
      console.error(err);
      return throwError(
        () => new Error( 'CardioService.update(): error updating workout: ' + err)
      );
    })
  );
}

destroy(id: number){
  return this.http.delete<Cardio>(this.url + '/' + id).pipe(
    catchError((err:any) => {
      console.error(err);
      return throwError(
        () => new Error( 'CardioService.destroy(): error destroying workout: ' + err)
      );
    })
  );
}

show( id: number): Observable<Cardio>{
  return this.http.get<Cardio>(this.url + '/' + id).pipe(
    catchError((err:any) => {
      console.error(err);
      return throwError(
        () => new Error( 'CardioService.show(): error showing workout: ' + err)
      );
    })
  );
}

}
