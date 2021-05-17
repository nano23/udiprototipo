import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicionCoberturaComponent } from './definicion-cobertura.component';

describe('DefinicionCoberturaComponent', () => {
  let component: DefinicionCoberturaComponent;
  let fixture: ComponentFixture<DefinicionCoberturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinicionCoberturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicionCoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
