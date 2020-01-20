import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitCreditsDialogComponent } from './submit-credits-dialog.component';

describe('SubmitCreditsDialogComponent', () => {
  let component: SubmitCreditsDialogComponent;
  let fixture: ComponentFixture<SubmitCreditsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitCreditsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitCreditsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
