import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { RecibosDashboardComponent } from "./recibos-dashboard.component";


describe('RecibosDashboardComponent', async () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [],
            imports: [RouterTestingModule,RecibosDashboardComponent]
        }).compileComponents();
    });

    // Escrevendo um test para verificar se o componente foi criado
    it("Teste para ver se o componente RecibosDashboard foi criado", async () => {
        const fixture = TestBed.createComponent(RecibosDashboardComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
    
});



