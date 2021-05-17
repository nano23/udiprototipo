import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicionOrquestacionComponent } from './definicion-orquestacion.component';

describe('DefinicionOrquestacionComponent', () => {
  let component: DefinicionOrquestacionComponent;
  let fixture: ComponentFixture<DefinicionOrquestacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinicionOrquestacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicionOrquestacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
