import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionArtefactosComponent } from './instalacion-artefactos.component';

describe('InstalacionArtefactosComponent', () => {
  let component: InstalacionArtefactosComponent;
  let fixture: ComponentFixture<InstalacionArtefactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstalacionArtefactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalacionArtefactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
