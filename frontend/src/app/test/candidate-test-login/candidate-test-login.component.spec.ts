import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateTestLoginComponent } from './candidate-test-login.component';

describe('CandidateTestLoginComponent', () => {
  let component: CandidateTestLoginComponent;
  let fixture: ComponentFixture<CandidateTestLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateTestLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateTestLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
