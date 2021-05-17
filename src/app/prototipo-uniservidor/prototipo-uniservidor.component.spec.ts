import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototipoUniservidorComponent } from './prototipo-uniservidor.component';

describe('PrototipoUniservidorComponent', () => {
  let component: PrototipoUniservidorComponent;
  let fixture: ComponentFixture<PrototipoUniservidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrototipoUniservidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrototipoUniservidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
