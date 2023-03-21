import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarLargeComponent } from './calendar-large.component';

describe('CalendarLargeComponent', () => {
  let component: CalendarLargeComponent;
  let fixture: ComponentFixture<CalendarLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarLargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
