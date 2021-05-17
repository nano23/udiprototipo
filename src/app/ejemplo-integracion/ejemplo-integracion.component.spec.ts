import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploIntegracionComponent } from './ejemplo-integracion.component';

describe('EjemploIntegracionComponent', () => {
  let component: EjemploIntegracionComponent;
  let fixture: ComponentFixture<EjemploIntegracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploIntegracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploIntegracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
