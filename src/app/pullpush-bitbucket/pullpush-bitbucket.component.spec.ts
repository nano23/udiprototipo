import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullpushBitbucketComponent } from './pullpush-bitbucket.component';

describe('PullpushBitbucketComponent', () => {
  let component: PullpushBitbucketComponent;
  let fixture: ComponentFixture<PullpushBitbucketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PullpushBitbucketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PullpushBitbucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
