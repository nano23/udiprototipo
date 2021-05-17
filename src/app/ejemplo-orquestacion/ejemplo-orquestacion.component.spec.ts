import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploOrquestacionComponent } from './ejemplo-orquestacion.component';

describe('EjemploOrquestacionComponent', () => {
  let component: EjemploOrquestacionComponent;
  let fixture: ComponentFixture<EjemploOrquestacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploOrquestacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploOrquestacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
