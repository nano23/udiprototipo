import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClonacionBitbucketComponent } from './clonacion-bitbucket.component';

describe('ClonacionBitbucketComponent', () => {
  let component: ClonacionBitbucketComponent;
  let fixture: ComponentFixture<ClonacionBitbucketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClonacionBitbucketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClonacionBitbucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
