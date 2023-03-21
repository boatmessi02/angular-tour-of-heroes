import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {
  leaveGenreCheckboxes,
  birthdayCheckboxes,
  holidayCheckboxes,
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
  includeLeaveGenres!: any[];
  includeBirthdays!: any[];
  includeHolidays!: any[];

  ngOnInit() {
    this.includeLeaveGenres = leaveGenreCheckboxes;
    this.includeBirthdays = birthdayCheckboxes;
    this.includeHolidays = holidayCheckboxes;
  }

  onChangeCategory($event: any, numCheck: number) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;
    if (numCheck === 1) {
      this.includeLeaveGenres = this.includeLeaveGenres.map((genre: any) => {
        if (genre.id == id) {
          genre.select = isChecked;
          this.leaveGenreEmit.emit(this.includeLeaveGenres);

          return genre;
        }
        return genre;
      });
    } else if (numCheck === 2) {
      this.includeBirthdays = this.includeBirthdays?.map((day:any) => {
        if (day.id == id) {
          day.select = isChecked;
          this.birthdayEmit.emit(this.includeBirthdays);

          return day;
        }
        return day;
      });
    } else {
      this.includeHolidays = this.includeHolidays?.map((day:any) => {
        if (day.id == id) {
          day.select = isChecked;
          this.holidayEmit.emit(this.includeHolidays);
          return day;
        }
        return day;
      });
    }
  }

  onClearFilter(numCheck: number) {
    if (numCheck === 1) {
      this.includeLeaveGenres = this.includeLeaveGenres.map(
        (genreLeave: any) => {
          genreLeave.select = false;
          this.leaveGenreEmit.emit(this.includeLeaveGenres);
          return genreLeave;
        }
      );
    } else if (numCheck === 2) {
      this.includeBirthdays = this.includeBirthdays?.map((genreBirthday) => {
        genreBirthday.select = false;
        this.birthdayEmit.emit(this.includeBirthdays);
        return genreBirthday;
      });
    } else {
      this.includeHolidays = this.includeHolidays?.map((genreHoliday) => {
        genreHoliday.select = false;
        this.holidayEmit.emit(this.includeHolidays);
        return genreHoliday;
      });
    }
  }
}
