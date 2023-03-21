import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCalendarComponent } from './detail-calendar.component';

describe('DetailCalendarComponent', () => {
  let component: DetailCalendarComponent;
  let fixture: ComponentFixture<DetailCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
