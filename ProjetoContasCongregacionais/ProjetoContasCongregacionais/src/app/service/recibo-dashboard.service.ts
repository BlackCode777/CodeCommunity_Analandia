import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { ClasseRecibosDashboard } from '../model/RecibosDashboardClasse';

@Injectable({
  providedIn: 'root'
})
export class ReciboDashboardService {

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: false
    /* Ajustar tratamento dos dados */
  }
  
  // criação método getRecibosDashboard para bucar todos os reccibos
  apiRecibosMongo = " http://localhost:8080/recibos/getRecibosDashboardFindAll";
  api = "http://localhost:8080/recibos"
  
  getRecibosDashboardFindAll(): Observable<any[]>{
    return this.http.get<any[]>(`${this.api}/getRecibosDashboardFindAll`, this.httpOptions)
    .pipe(
      map(data => Array.isArray(data) ? data : [data]),  // Certifica que a saída sempre será um array
      map(recibos => recibos.map(recibo => new ClasseRecibosDashboard(recibo)))
    );
  }

  cadastraReciboPost(recibo: ClasseRecibosDashboard): Observable<ClasseRecibosDashboard> {    
    return this.http.post<ClasseRecibosDashboard>(` ${this.api}/postRecibosDashboardSave `, JSON.stringify(recibo), this.httpOptions) //, postRecibosDashboardSave
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
