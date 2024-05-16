import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";
import { ClasseRecibosDashboard } from '../model/RecibosDashboardClasse';
import { ReciboDashboardService } from "./recibo-dashboard.service";

describe('ReciboDashboardService', () => {
    let service: ReciboDashboardService;
    let httpMock: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ReciboDashboardService]
        });
        service = TestBed.inject(ReciboDashboardService);
        httpMock = TestBed.inject(HttpTestingController);
    });
     
    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    // Testando o servico de ReciboDashboardService e suas funções
    // função handleError() 
    it("Verificar se a função retorna uma mensagem de erro correta quando um `ErrorEvent` é recebido (erro do lado do cliente).", () => {
        //1. **Erro do Lado do Cliente**: Verificar se a função retorna uma mensagem de erro correta quando um `ErrorEvent` é recebido (erro do lado do cliente).
        service.handleError(new HttpErrorResponse({ error: new ErrorEvent('Client-side error') }));
    });

    it("Testar se a função extrai e retorna uma mensagem de erro correta baseada no status e na mensagem do erro HTTP (erro do lado do servidor)", () => {
        //2. **Erro do Lado do Servidor**: Testar se a função extrai e retorna uma mensagem de erro correta baseada no status e na mensagem do erro HTTP (erro do lado do servidor).
        service.handleError(new HttpErrorResponse({ status: 404, statusText: 'Not Found' }));
    });

    it("Testar o comportamento da função quando um erro não contém `ErrorEvent` nem propriedades de erro HTTP.", () => {
        //3. **Erro Sem `ErrorEvent` ou Status HTTP**: Testar o comportamento da função quando um erro não contém `ErrorEvent` nem propriedades de erro HTTP.
        service.handleError(new HttpErrorResponse({ status: 404, statusText: 'Not Found' }));
    });
    
    it("Verificar como a função lida com uma resposta de erro que não segue o formato esperado (por exemplo, falta de status ou mensagem).", () => {
        //4. **Erro com Resposta Mal Formada**: Verificar como a função lida com uma resposta de erro que não segue o formato esperado (por exemplo, falta de status ou mensagem).
        service.handleError(new HttpErrorResponse({ status: 404, statusText: 'Not Found' }));
    });

    it("Confirmar se a função registra adequadamente os erros no console (isso poderia ser verificado por um espião de função, como `spyOn(console, 'log')`)", () => {
        //5. **Registro de Erro**: Confirmar se a função registra adequadamente os erros no console (isso poderia ser verificado por um espião de função, como `spyOn(console, 'log')`).
        const spy = spyOn(console, 'log');
        service.handleError(new HttpErrorResponse({ status: 404, statusText: 'Not Found' }));
        expect(spy).toHaveBeenCalled();
    });

    // Testando o servico de ReciboDashboardService e suas funções
    // função cadastraReciboPost()    
    it("5. **Testar Resposta Com Erro do Servidor (500 Internal Server Error)**: Verificar se a função trata adequadamente erros internos do servidor e retorna uma mensagem de erro clara.", () => {
        // 5. **Testar Resposta Com Erro do Servidor (500 Internal Server Error)**: Verificar se a função trata adequadamente erros internos do servidor e retorna uma mensagem de erro clara.
        const recibo = {
            _id: '1',
            mesReciboDashboard: "Janeiro",
            dataReciboDashboard: "", // considerando que pode ser nulo, você pode querer formatar isso de alguma maneira especial
            donativoObraMundRecDashboard: 1000.00,
            donativoDespCongrLocalRecDash: 650.00,
            donativoTipo: "Dinheiro",
            arranjoDeOnibus: 250.00,
        };
        const reciboObj = new ClasseRecibosDashboard(recibo);
        service.cadastraReciboPost(reciboObj).subscribe({
            next: () => {},
            error: (err) => {
                expect(err).toBeTruthy();
            }
        });
        const req = httpMock.expectOne((req) => req.url.trim() === `${service.api}/postRecibosDashboardSave`.trim() && req.method === 'POST');
        expect(req.request.method).toBe('POST');
        req.flush(null, { status: 500, statusText: 'Internal Server Error' }); // Simulando um erro interno do servidor
    });

    it("4. **Testar Tentativas de Reconexão**: Assegurar que a função tenta reconectar a quantidade de vezes especificada pelo `retry(2)` antes de falhar definitivamente."), () => {
        // 4. **Testar Tentativas de Reconexão**: Assegurar que a função tenta reconectar a quantidade de vezes especificada pelo `retry(2)` antes de falhar definitivamente.
        const recibo = {
            _id: '1',
            mesReciboDashboard: "Janeiro",
            dataReciboDashboard: "", // considerando que pode ser nulo, você pode querer formatar isso de alguma maneira especial
            donativoObraMundRecDashboard: 1000.00,
            donativoDespCongrLocalRecDash: 650.00,
            donativoTipo: "Dinheiro",
            arranjoDeOnibus: 250.00,
        };
        const reciboObj = new ClasseRecibosDashboard(recibo);
        service.cadastraReciboPost(reciboObj).subscribe({
            next: () => {},
            error: (err) => {
                expect(err).toBeTruthy();
            }
        });
        const req = httpMock.expectOne((req) => req.url.trim() === `${service.api}/postRecibosDashboardSave`.trim() && req.method === 'POST');
        expect(req.request.method).toBe('POST');
        req.flush(null, { status: 500, statusText: 'Internal Server Error' }); // Simulando um erro interno do servidor
    };

    it("3. **Testar Falha de Conexão**: Verificar como a função lida com uma falha de conexão (por exemplo, servidor não disponível).", () => {
        // 3. **Testar Falha de Conexão**: Verificar como a função lida com uma falha de conexão (por exemplo, servidor não disponível).
        const dadosInvalidos = { _id: '', mesReciboDashboard: '', dataReciboDashboard: '', donativoObraMundRecDashboard: null, donativoDespCongrLocalRecDash: null, donativoTipo: '', arranjoDeOnibus: null };
        const recibo = new ClasseRecibosDashboard(dadosInvalidos); // Passando dados iniciais
        service.cadastraReciboPost(new ClasseRecibosDashboard(recibo)).subscribe({
            error: (err) => {
                expect(err).toBeTruthy();
            }
        });        
        const req = httpMock.expectOne((req) => req.url.trim() === `${service.api}/postRecibosDashboardSave`.trim() && req.method === 'POST');
        expect(req.request.method).toBe('POST');
        req.error(new ErrorEvent('URL indisponível no momento!  Tente mais tarde.'), { status: 0 }); // Simulando falha de conexão
    });    
    
    it('should handle and return an appropriate error when the server returns a 400 error (simulating invalid input data)', () => {
        // 2. **Testar Erro de Cliente (400 Bad Request)**: Garantir que a função trata e retorna um erro apropriado quando o servidor retorna um erro 400 (simulando dados de entrada inválidos).
        const dadosInvalidos = {
            _id: '',  // ID vazio para representar dados inválidos
            mesReciboDashboard: '',
            dataReciboDashboard: '',
            donativoObraMundRecDashboard: null,
            donativoDespCongrLocalRecDash: null,
            donativoTipo: '',
            arranjoDeOnibus: null
        };
        const recibo = new ClasseRecibosDashboard(dadosInvalidos); // Replace null with an instance of ClasseRecibosDashboard
        return service.cadastraReciboPost(recibo).subscribe({
            next: () => {},
            error: (err) => {
                expect(err.status).toBe(400);
                expect(err.message).toBe('Bad Request');
            }
        });
    });
    
    it('should return a ClasseRecibosDashboard object when the recibo is posted successfully', () => {        
        // 1. **Testar Postagem Bem-sucedida**: Verificar se a função retorna o objeto `ClasseRecibosDashboard` correto quando o recibo é postado com sucesso.
        const recibo = {
            _id: '1',
            mesReciboDashboard: "Janeiro",
            dataReciboDashboard: "", // considerando que pode ser nulo, você pode querer formatar isso de alguma maneira especial
            donativoObraMundRecDashboard: 1000.00,
            donativoDespCongrLocalRecDash: 650.00,
            donativoTipo: "Dinheiro",
            arranjoDeOnibus: 250.00,
        };
        const reciboObj = new ClasseRecibosDashboard(recibo);
        service.cadastraReciboPost(reciboObj).subscribe(data => {
            expect(data).toBeInstanceOf(ClasseRecibosDashboard); // Verifica se o retorno é uma instância de ClasseRecibosDashboard
        });
    });

    // Testando o servico de ReciboDashboardService e suas funções
    // função getRecibosDashboardFindAll()
    it('should return an array of RecibosDashboardClass', () => {
        service.getRecibosDashboardFindAll().subscribe(data => {
            expect(data).toBeInstanceOf(Array); // Verifica se o retorno é um array
            expect(data.length).toBeGreaterThan(0); // Verifica se o array não está vazio
            data.forEach(recibo => {
                expect(recibo).toBeInstanceOf(ClasseRecibosDashboard);
            });
        });
    });
    
    it('should return an empty array when no data is available', () => {
        //2. **Testar Resposta Vazia**: Garantir que a função retorna um array vazio quando o endpoint não tem dados para retornar.
        service.getRecibosDashboardFindAll().subscribe(data => {
            expect(data).toBeInstanceOf(Array); // Verifica se o retorno é um array
            expect(data.length).toBe(0); // Verifica se o array está vazio
        });
    });
    
    it('should convert a single response to an array with a single item', () => {
        //3. **Testar Resposta Não-Array**: Verificar se a função consegue converter uma resposta única (não-array) para um array com um único item.
        service.getRecibosDashboardFindAll().subscribe(data => {
            expect(data).toBeInstanceOf(Array); // Verifica se o retorno é um array
            expect(data.length).toBe(1); // Verifica se o array tem um único item
            expect(data[0]).toBeInstanceOf(ClasseRecibosDashboard); // Verifica se o item é uma instância de ClasseRecibosDashboard
        });
    });
    
    it('should propagate an error when a network failure occurs', () => {
        //4. **Testar Erro de Rede**: Verificar se a função propaga um erro quando ocorre uma falha de rede (simulando uma condição de erro de rede).
        service.getRecibosDashboardFindAll().subscribe({
            error: err => {
                expect(err).toBeTruthy(); // Verifica se um erro foi retornado
            }
        });
    });
    
    it('should handle server error responses correctly', () => {
        // 5. **Testar Resposta de Erro do Servidor**: Verificar se a função trata adequadamente erros HTTP, como um erro 500, e retorna o erro apropriado.
        service.getRecibosDashboardFindAll().subscribe({
            error: err => {
                expect(err.status).toBe(500); // Verifica se o status do erro é 500 (Internal Server Error)
                expect(err.message).toBe('Internal Server Error'); // Verifica se a mensagem do erro é 'Internal Server Error'
            }
        });
    });    

});
