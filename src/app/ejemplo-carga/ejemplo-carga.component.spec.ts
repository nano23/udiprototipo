import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploCargaComponent } from './ejemplo-carga.component';

describe('EjemploCargaComponent', () => {
  let component: EjemploCargaComponent;
  let fixture: ComponentFixture<EjemploCargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploCargaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
