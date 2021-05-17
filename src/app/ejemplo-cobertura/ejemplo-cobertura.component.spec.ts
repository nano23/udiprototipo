import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploCoberturaComponent } from './ejemplo-cobertura.component';

describe('EjemploCoberturaComponent', () => {
  let component: EjemploCoberturaComponent;
  let fixture: ComponentFixture<EjemploCoberturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploCoberturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploCoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
