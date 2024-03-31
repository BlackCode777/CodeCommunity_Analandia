import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolhaContasComponent } from './folha-contas.component';

describe('FolhaContasComponent', () => {
  let component: FolhaContasComponent;
  let fixture: ComponentFixture<FolhaContasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolhaContasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FolhaContasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
