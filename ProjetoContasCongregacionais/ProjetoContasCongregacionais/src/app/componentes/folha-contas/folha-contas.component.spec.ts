import { TestBed } from "@angular/core/testing";
import { FolhaContasComponent } from "./folha-contas.component";


describe('FolhaContasComponent', () => {

    // criando um beforeEach para carregar o módulo do componente
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FolhaContasComponent]
        }).compileComponents();
    });
    
    // Escrevendo um test para verificar se o componente foi criado
    it("Teste para ver se o componente FolhaContas foi criado", () => {
        const fixture = TestBed.createComponent(FolhaContasComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
  
});
