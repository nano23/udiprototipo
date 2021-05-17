import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicionArtefactosComponent } from './definicion-artefactos.component';

describe('DefinicionArtefactosComponent', () => {
  let component: DefinicionArtefactosComponent;
  let fixture: ComponentFixture<DefinicionArtefactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinicionArtefactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicionArtefactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
