import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionConfluenceComponent } from './administracion-confluence.component';

describe('AdministracionConfluenceComponent', () => {
  let component: AdministracionConfluenceComponent;
  let fixture: ComponentFixture<AdministracionConfluenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracionConfluenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionConfluenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
