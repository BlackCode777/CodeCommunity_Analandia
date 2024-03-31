import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibosDashboardComponent } from './recibos-dashboard.component';

describe('RecibosDashboardComponent', () => {
  let component: RecibosDashboardComponent;
  let fixture: ComponentFixture<RecibosDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecibosDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecibosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
