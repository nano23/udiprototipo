import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploUniclienteComponent } from './ejemplo-unicliente.component';

describe('EjemploUniclienteComponent', () => {
  let component: EjemploUniclienteComponent;
  let fixture: ComponentFixture<EjemploUniclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploUniclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploUniclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
