import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloServidorComponent } from './desarrollo-servidor.component';

describe('DesarrolloServidorComponent', () => {
  let component: DesarrolloServidorComponent;
  let fixture: ComponentFixture<DesarrolloServidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesarrolloServidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrolloServidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
