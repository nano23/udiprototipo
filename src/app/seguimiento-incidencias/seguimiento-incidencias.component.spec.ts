import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoIncidenciasComponent } from './seguimiento-incidencias.component';

describe('SeguimientoIncidenciasComponent', () => {
  let component: SeguimientoIncidenciasComponent;
  let fixture: ComponentFixture<SeguimientoIncidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguimientoIncidenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoIncidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
