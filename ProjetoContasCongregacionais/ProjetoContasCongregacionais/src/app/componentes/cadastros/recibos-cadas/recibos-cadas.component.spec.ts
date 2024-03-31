import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibosCadasComponent } from './recibos-cadas.component';

describe('RecibosCadasComponent', () => {
  let component: RecibosCadasComponent;
  let fixture: ComponentFixture<RecibosCadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecibosCadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecibosCadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
