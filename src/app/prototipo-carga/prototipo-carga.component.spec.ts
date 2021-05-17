import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototipoCargaComponent } from './prototipo-carga.component';

describe('PrototipoCargaComponent', () => {
  let component: PrototipoCargaComponent;
  let fixture: ComponentFixture<PrototipoCargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrototipoCargaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrototipoCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
