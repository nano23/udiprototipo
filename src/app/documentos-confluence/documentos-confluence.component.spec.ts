import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosConfluenceComponent } from './documentos-confluence.component';

describe('DocumentosConfluenceComponent', () => {
  let component: DocumentosConfluenceComponent;
  let fixture: ComponentFixture<DocumentosConfluenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosConfluenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosConfluenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
