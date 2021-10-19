import { TestBed } from '@angular/core/testing';

import { StudentTutorGuard } from './student-tutor.guard';

describe('StudentTutorGuard', () => {
  let guard: StudentTutorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StudentTutorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
