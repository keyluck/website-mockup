import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { catchError, tap } from 'rxjs/operators';

import { MessageService } from './message.service'
import { MedCardFormat } from '../components/dashboard/med-cards/med-card-format'


@Injectable({
  providedIn: 'root'
})
export class CardInfoService {
  private cardUrl = 'api/cardInfo'

  httpOption = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getMedCardInfo(): Observable<MedCardFormat[]> {
    return this.http.get<MedCardFormat[]>(this.cardUrl)
      .pipe(
        tap(_ => this.log('fetched card info')),
        catchError(this.handleError<MedCardFormat[]>('getMedCardInfo', []))
      );
    
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
