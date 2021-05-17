import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegracionJiraComponent } from './integracion-jira.component';

describe('IntegracionJiraComponent', () => {
  let component: IntegracionJiraComponent;
  let fixture: ComponentFixture<IntegracionJiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegracionJiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegracionJiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
