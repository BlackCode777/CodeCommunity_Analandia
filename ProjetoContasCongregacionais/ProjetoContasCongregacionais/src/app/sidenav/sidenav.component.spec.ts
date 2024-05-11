import { TestBed } from "@angular/core/testing";
import { SidenavComponent } from "./sidenav.component";


describe('SidenavComponent', () => {

    // criando um beforeEach para carregar o módulo do componente
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SidenavComponent]
        }).compileComponents();
    });

    // Escrevendo um test para verificar se o componente foi criado
    it("Teste para ver se o componente Sidenav foi criado", () => {
        const fixture = TestBed.createComponent(SidenavComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

});
