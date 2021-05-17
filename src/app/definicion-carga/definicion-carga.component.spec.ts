import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicionCargaComponent } from './definicion-carga.component';

describe('DefinicionCargaComponent', () => {
  let component: DefinicionCargaComponent;
  let fixture: ComponentFixture<DefinicionCargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinicionCargaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicionCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
