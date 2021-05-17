import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicionUniclienteComponent } from './definicion-unicliente.component';

describe('DefinicionUniclienteComponent', () => {
  let component: DefinicionUniclienteComponent;
  let fixture: ComponentFixture<DefinicionUniclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinicionUniclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicionUniclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
