import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";

class Rate {
  currency: string;
  code: string;
  mid: number;
}

class RootObject {
  table: string;
  no: string;
  effectiveDate: string;
  rates: Rate[];
}


@Injectable({
  providedIn: 'root'
})
export class NbpService {
  constructor(private http: HttpClient) {
  }

  baseurl = 'http://api.nbp.pl';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  get(): Observable<Rate> {
    // @ts-ignore
    return this.http.get<Rate>(this.baseurl + '/api/exchangerates/tables/a')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  getByCode(code): Observable<Rate> {
    // @ts-ignore
    return this.http.get<Rate>(this.baseurl + '/api/exchangerates/rates/a/' + code)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}


