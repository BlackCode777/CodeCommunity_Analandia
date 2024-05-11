import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { RecibosCadasComponent } from "./recibos-cadas.component";


describe('RecibosCadasComponent', () => {

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, RecibosCadasComponent], // Standalone Components vão em imports agora
            providers: []
        }).compileComponents();
    });

    // Escrevendo um test para verificar se o componente foi criado
    it("Teste para ver se o componente RecibosCadas foi criado", () => {
        const fixture = TestBed.createComponent(RecibosCadasComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

});
