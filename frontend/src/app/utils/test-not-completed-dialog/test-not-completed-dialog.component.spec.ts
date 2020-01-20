import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNotCompletedDialogComponent } from './test-not-completed-dialog.component';

describe('TestNotCompletedDialogComponent', () => {
  let component: TestNotCompletedDialogComponent;
  let fixture: ComponentFixture<TestNotCompletedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNotCompletedDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNotCompletedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
