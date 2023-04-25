import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {
  leaveGenreCheckboxList,
  birthdayCheckboxList,
  holidayCheckboxList,
} from 'src/app/core/configs/calendar';

@Component({
  selector: 'app-checkbox-calendar',
  templateUrl: './checkbox-calendar.component.html',
  styleUrls: ['./checkbox-calendar.component.css'],
})
export class CheckboxCalendarComponent implements OnInit {
  @Output()
  leaveGenreEmit: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Output()
  birthdayEmit: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Output()
  holidayEmit: EventEmitter<any[]> = new EventEmitter<any[]>();
  includeLeaveGenreList!: any[];
  includeBirthdayList!: any[];
  includeHolidayList!: any[];

  ngOnInit() {
    this.includeLeaveGenreList = leaveGenreCheckboxList;
    this.includeBirthdayList = birthdayCheckboxList;
    this.includeHolidayList = holidayCheckboxList;
  }

  onChangeCategory($event: any, numCheck: number) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;
    if (numCheck === 1) {
      this.includeLeaveGenreList = this.includeLeaveGenreList.map(
        (genre: any) => {
          if (genre.id == id) {
            genre.select = isChecked;
            this.leaveGenreEmit.emit(this.includeLeaveGenreList);

            return genre;
          }
          return genre;
        }
      );
    } else if (numCheck === 2) {
      this.includeBirthdayList = this.includeBirthdayList?.map((day: any) => {
        if (day.id == id) {
          day.select = isChecked;
          this.birthdayEmit.emit(this.includeBirthdayList);

          return day;
        }
        return day;
      });
    } else {
      this.includeHolidayList = this.includeHolidayList?.map((day: any) => {
        if (day.id == id) {
          day.select = isChecked;
          this.holidayEmit.emit(this.includeHolidayList);
          return day;
        }
        return day;
      });
    }
  }

  onClearFilter(numCheck: number) {
    if (numCheck === 1) {
      this.includeLeaveGenreList = this.includeLeaveGenreList.map(
        (genreLeave: any) => {
          genreLeave.select = false;
          this.leaveGenreEmit.emit(this.includeLeaveGenreList);
          return genreLeave;
        }
      );
    } else if (numCheck === 2) {
      this.includeBirthdayList = this.includeBirthdayList?.map(
        (genreBirthday) => {
          genreBirthday.select = false;
          this.birthdayEmit.emit(this.includeBirthdayList);
          return genreBirthday;
        }
      );
    } else {
      this.includeHolidayList = this.includeHolidayList?.map((genreHoliday) => {
        genreHoliday.select = false;
        this.holidayEmit.emit(this.includeHolidayList);
        return genreHoliday;
      });
    }
  }
}
