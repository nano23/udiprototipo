import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicionIntegracionComponent } from './definicion-integracion.component';

describe('DefinicionIntegracionComponent', () => {
  let component: DefinicionIntegracionComponent;
  let fixture: ComponentFixture<DefinicionIntegracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinicionIntegracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicionIntegracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
