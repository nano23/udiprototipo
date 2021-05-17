import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicionCalidadComponent } from './definicion-calidad.component';

describe('DefinicionCalidadComponent', () => {
  let component: DefinicionCalidadComponent;
  let fixture: ComponentFixture<DefinicionCalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinicionCalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicionCalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
