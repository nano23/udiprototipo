import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploArtefactosComponent } from './ejemplo-artefactos.component';

describe('EjemploArtefactosComponent', () => {
  let component: EjemploArtefactosComponent;
  let fixture: ComponentFixture<EjemploArtefactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploArtefactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploArtefactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
