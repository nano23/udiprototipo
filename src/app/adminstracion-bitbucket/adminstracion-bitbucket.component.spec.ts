import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstracionBitbucketComponent } from './adminstracion-bitbucket.component';

describe('AdminstracionBitbucketComponent', () => {
  let component: AdminstracionBitbucketComponent;
  let fixture: ComponentFixture<AdminstracionBitbucketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminstracionBitbucketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstracionBitbucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
