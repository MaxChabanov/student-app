import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPassInputComponent } from './confirm-pass-input.component';

describe('ConfirmPassInputComponent', () => {
  let component: ConfirmPassInputComponent;
  let fixture: ComponentFixture<ConfirmPassInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmPassInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmPassInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
