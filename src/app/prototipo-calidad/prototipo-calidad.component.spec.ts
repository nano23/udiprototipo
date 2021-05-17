import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototipoCalidadComponent } from './prototipo-calidad.component';

describe('PrototipoCalidadComponent', () => {
  let component: PrototipoCalidadComponent;
  let fixture: ComponentFixture<PrototipoCalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrototipoCalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrototipoCalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
