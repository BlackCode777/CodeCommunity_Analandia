import { TestBed } from "@angular/core/testing";
import { HeaderComponent } from "./header.component";

describe('HeaderComponent', () => {

    // criando um beforeEach para carregar o módulo do componente
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HeaderComponent]
        }).compileComponents();
    });

    // Escrevendo um test para verificar se o componente foi criado
    it("Teste para ver se o componente Header foi criado", () => {
        const fixture = TestBed.createComponent(HeaderComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

});
