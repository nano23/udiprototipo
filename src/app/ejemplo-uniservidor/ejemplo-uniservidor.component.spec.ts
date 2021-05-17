import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploUniservidorComponent } from './ejemplo-uniservidor.component';

describe('EjemploUniservidorComponent', () => {
  let component: EjemploUniservidorComponent;
  let fixture: ComponentFixture<EjemploUniservidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploUniservidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploUniservidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
