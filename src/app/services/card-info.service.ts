import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { catchError, tap } from 'rxjs/operators';

import { MessageService } from './message.service'
import { MedChartInfo } from '../components/dashboard/med-cards/medChartInfo'
import { Task } from '../components/dashboard/task-list/task'
import { Employee } from '../components/dashboard/employee-stats/employee'

@Injectable({
  providedIn: 'root'
})
export class CardInfoService {
  private smallCardUrl = 'api/smBlockContent'
  private medCardUrl = 'api/medCardData'
  private taskCardUrl = 'api/taskCardInfo'
  private employeeCardUrl = 'api/employeeCardInfo'
  
  httpOption = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
    private messageService: MessageService) { }
  
  getSmallCardInfo(): Observable<string[]> {
    return this.http.get<string[]>(this.smallCardUrl)
      .pipe(
        tap(_ => this.log('fetched card info')),
        catchError(this.handleError<string[]>('getSmallCardInfo', []))
      );
    
  }

  getMedCardInfo(): Observable<MedChartInfo[]> {
    return this.http.get<MedChartInfo[]>(this.medCardUrl)
      .pipe(
        tap(_ => this.log('fetched card info')),
        catchError(this.handleError<MedChartInfo[]>('getMedCardInfo', []))
      );
    
  }

  getTaskCardInfo(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskCardUrl)
      .pipe(
        tap(_ => this.log('fetched card info')),
        catchError(this.handleError<Task[]>('getTaskCardInfo', []))
      );
    
  }

  getEmployeeCardInfo(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeCardUrl)
      .pipe(
        tap(_ => this.log('fetched card info')),
        catchError(this.handleError<Employee[]>('getEmployeeCardInfo', []))
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
