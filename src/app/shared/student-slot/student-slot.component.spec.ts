import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSlotComponent } from './student-slot.component';

describe('StudentSlotComponent', () => {
  let component: StudentSlotComponent;
  let fixture: ComponentFixture<StudentSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
