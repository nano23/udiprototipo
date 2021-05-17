import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototipoUniclienteComponent } from './prototipo-unicliente.component';

describe('PrototipoUniclienteComponent', () => {
  let component: PrototipoUniclienteComponent;
  let fixture: ComponentFixture<PrototipoUniclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrototipoUniclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrototipoUniclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
