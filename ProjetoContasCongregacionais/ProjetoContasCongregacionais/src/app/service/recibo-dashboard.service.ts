import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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

  private getRecibosAPI = 'http://localhost:3000/recibosDashboard'

  /*
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    // withCredentials: true,
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    // 'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With'
  }
  */
  
  
  // criação método getRecibosDashboard para bucar todos os reccibos
  apiRecibosMongo = "localhost:8080/getRecibosDashboard";
  getRecibosDashboard(): Observable<RecibosDashboardClasse[]>{
    return this.http.get<RecibosDashboardClasse[]>(this.apiRecibosMongo); //, this.httpOptions
    // return this.http.get<RecibosDashboardClasse[]>(this.getRecibosAPI);
  }

  // criação de método put para atualizar recibos
  getRecibosPorId(id: Number): Observable<RecibosDashboardClasse> {
    return this.http.get<RecibosDashboardClasse>(this.getRecibosAPI + '/' + id);
  }

  updateReciboJaCadastrado(recibo: RecibosDashboardClasse): Observable<RecibosDashboardClasse> {
    return this.http.put<RecibosDashboardClasse>(this.getRecibosAPI + '/' + recibo.id, JSON.stringify(recibo)) //, this.httpOptions
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // criar para deletar recibos
  deleteRecibo(id: Number): Observable<RecibosDashboardClasse>{
    return this.http.delete<RecibosDashboardClasse>(this.getRecibosAPI + '/' + id, { responseType: 'json' });
  }

  // Criar método para fazer consulta por dataReciboDashboard
  getRecibosPorData(data: string): Observable<RecibosDashboardClasse[]> {
    return this.http.get<RecibosDashboardClasse[]>(this.getRecibosAPI + '?data=' + data);
  }

  // criação de método post para salvar recibos
  // OBS - O método post é utilizado para salvar um novo registro e os dados são enviados no corpo da requisição
  // é obrigatório enviar o objeto que será salvo e de forma alguma mandar um Array de objetos
  cadastraReciboPost(recibo: RecibosDashboardClasse): Observable<RecibosDashboardClasse> {    
    return this.http.post<RecibosDashboardClasse>(this.getRecibosAPI, JSON.stringify(recibo)) //, this.httpOptions
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

  /*
   Nesse trecho de código trecho_1:"apiUsers = "http://localhost:3000/usuarios""
   trecho_2:"httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}"
   trecho_3:" // criar para deletar recibos
          deletePerfilUsuario(id: number): Observable<ControlePermissaoUsers>{
            return this.http.delete<ControlePermissaoUsers>(this.apiUsers + '/' + id, { responseType: 'json', withCredentials: true });
          }"
  
    e estou com esse erro "permissao-users:1 Access to XMLHttpRequest at '
http://localhost:3000/usuarios/3'
from origin '
http://localhost:4200'
has been blocked by CORS policy: Response to preflight request doesn't pass access control check: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'. The credentials mode of requests initiated by the XMLHttpRequest is controlled by the withCredentials attribute."
    o que fazer para resolver? Creio que devo adicionar o withCredentials: true no httpOptions, mas não sei como fazer isso.  

    mostre exemplo de como fazer isso.

    // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true
  }

  // criar para deletar recibos
  deleteRecibo(id: Number): Observable<RecibosDashboardClasse>{
    return this.http.delete<RecibosDashboardClasse>(this.getRecibosAPI + '/' + id, { responseType: 'json', withCredentials: true });
  }

  este exemplo não funcionou e ainda esta retornando erro de "CORS" o que fazer para resolver?
  existe mais alguma configuração que preciso fazer no service de delete para liberar a requisição
  de 'DELETE'?  Mostre exemplos de código para isso.

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true
  }

  // criar para deletar recibos
  deleteRecibo(id: Number): Observable<RecibosDashboardClasse>{
    return this.http.delete<RecibosDashboardClasse>(this.getRecibosAPI + '/' + id, this.httpOptions);
  }

  como configurar o "CORS" no frontend para liberar tudo? Mostre exemplos de código para isso.

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true
  }

  inclua mais credenciais no httpOptions para liberar tudo.

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With'
  }

  ainda estou com o mesmo erro de "CORS" 
  ainda existe alguma configuração que eu precise fazer nesse servidor "'http://localhost:3000/recibosDashboard'"
  para liberar a requisição de 'DELETE'? Mostre exemplos de código para isso.


  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With'
  }

  qual a diferença entre essa susgestão que vc deu e a anterior?
   
  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true
  }



  */





}
