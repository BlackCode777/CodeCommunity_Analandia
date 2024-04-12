import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { RecibosDashboardClasse } from '../model/RecibosDashboardClasse';

@Injectable({
  providedIn: 'root'
})
export class ReciboDashboardService {

  constructor(
    private http: HttpClient
  ) { }

  //private getRecibosAPI = 'http://localhost:3000/recibosDashboard'
  // http://localhost:8080/recibos/getRecibosDashboard

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true
  }
  
  // criação método getRecibosDashboard para bucar todos os reccibos
  apiRecibosMongo = " http://localhost:8080/recibos/getRecibosDashboard";

  getRecibosDashboard(): Observable<RecibosDashboardClasse[]>{
    return this.http.get<RecibosDashboardClasse[]>(this.apiRecibosMongo, this.httpOptions); 
  }

  // criação de método put para atualizar recibos
  getRecibosPorId(id: Number): Observable<RecibosDashboardClasse> {
    return this.http.get<RecibosDashboardClasse>(this.apiRecibosMongo + '/' + id, this.httpOptions);
  }

  updateReciboJaCadastrado(recibo: RecibosDashboardClasse): Observable<RecibosDashboardClasse> {
    return this.http.put<RecibosDashboardClasse>(this.apiRecibosMongo + '/' + recibo.id, JSON.stringify(recibo)) //, this.httpOptions
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // criar para deletar recibos
  deleteRecibo(id: Number): Observable<RecibosDashboardClasse>{
    return this.http.delete<RecibosDashboardClasse>(this.apiRecibosMongo + '/' + id, this.httpOptions);
  }
  
  cadastraReciboPost(recibo: RecibosDashboardClasse): Observable<RecibosDashboardClasse> {    
    return this.http.post<RecibosDashboardClasse>(this.apiRecibosMongo, JSON.stringify(recibo)) //, this.httpOptions
    .pipe(
      retry(2),
      catchError(this.handleError)
    );      
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
