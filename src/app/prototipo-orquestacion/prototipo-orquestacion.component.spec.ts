import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototipoOrquestacionComponent } from './prototipo-orquestacion.component';

describe('PrototipoOrquestacionComponent', () => {
  let component: PrototipoOrquestacionComponent;
  let fixture: ComponentFixture<PrototipoOrquestacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrototipoOrquestacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrototipoOrquestacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
