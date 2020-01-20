import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterationScreenComponent } from './registeration-screen.component';

describe('RegisterationScreenComponent', () => {
  let component: RegisterationScreenComponent;
  let fixture: ComponentFixture<RegisterationScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterationScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
