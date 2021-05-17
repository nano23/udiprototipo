import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototipoIntegracionComponent } from './prototipo-integracion.component';

describe('PrototipoIntegracionComponent', () => {
  let component: PrototipoIntegracionComponent;
  let fixture: ComponentFixture<PrototipoIntegracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrototipoIntegracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrototipoIntegracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
