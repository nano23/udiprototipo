import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionProyectoComponent } from './administracion-proyecto.component';

describe('AdministracionProyectoComponent', () => {
  let component: AdministracionProyectoComponent;
  let fixture: ComponentFixture<AdministracionProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracionProyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
