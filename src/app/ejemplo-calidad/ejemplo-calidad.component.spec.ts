import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploCalidadComponent } from './ejemplo-calidad.component';

describe('EjemploCalidadComponent', () => {
  let component: EjemploCalidadComponent;
  let fixture: ComponentFixture<EjemploCalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploCalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploCalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
