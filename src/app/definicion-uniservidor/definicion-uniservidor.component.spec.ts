import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicionUniservidorComponent } from './definicion-uniservidor.component';

describe('DefinicionUniservidorComponent', () => {
  let component: DefinicionUniservidorComponent;
  let fixture: ComponentFixture<DefinicionUniservidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinicionUniservidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicionUniservidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
