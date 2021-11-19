import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorSlotComponent } from './tutor-slot.component';

describe('TutorSlotComponent', () => {
  let component: TutorSlotComponent;
  let fixture: ComponentFixture<TutorSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorSlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
