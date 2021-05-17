import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegracionConfluenceComponent } from './integracion-confluence.component';

describe('IntegracionConfluenceComponent', () => {
  let component: IntegracionConfluenceComponent;
  let fixture: ComponentFixture<IntegracionConfluenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegracionConfluenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegracionConfluenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
