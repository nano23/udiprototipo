import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototipoCoberturaComponent } from './prototipo-cobertura.component';

describe('PrototipoCoberturaComponent', () => {
  let component: PrototipoCoberturaComponent;
  let fixture: ComponentFixture<PrototipoCoberturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrototipoCoberturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrototipoCoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
