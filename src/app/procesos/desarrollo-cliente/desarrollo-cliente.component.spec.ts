import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloClienteComponent } from './desarrollo-cliente.component';

describe('DesarrolloClienteComponent', () => {
  let component: DesarrolloClienteComponent;
  let fixture: ComponentFixture<DesarrolloClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesarrolloClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrolloClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
