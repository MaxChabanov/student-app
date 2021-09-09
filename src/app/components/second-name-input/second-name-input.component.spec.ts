import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondNameInputComponent } from './second-name-input.component';

describe('SecondNameInputComponent', () => {
  let component: SecondNameInputComponent;
  let fixture: ComponentFixture<SecondNameInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondNameInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondNameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
