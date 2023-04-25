import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MonthDetailType, LeaveType } from 'src/app/interface/I-calendar';
import {
  birthdayCheckboxList,
  getMonthDetailsConfig,
  holidayCheckboxList,
  leaveGenreCheckboxList,
} from '../../core/configs/calendar';

@Component({
  selector: 'app-calendar-large',
  templateUrl: './calendar-large.component.html',
  styleUrls: ['./calendar-large.component.css'],
})
export class CalendarLargeComponent implements OnInit {
  today: string = '';
  monthSelected: string = '';
  year: number = 0;
  month: number = 0;
  monthDetailList: MonthDetailType[] = [];
  oneDay: number = 0;
  todayMonth: any;
  todayYear: any;
  includeLeaveGenreList: any[] = [];
  includeBirthdayList: any[] = [];
  includeHolidayList: any[] = [];
  mediaScreenWidth: number = 1024;
  mediaScreenCheck: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {
    this.getInitialCurrentMonth();

    // Set Default Value
    this.includeLeaveGenreList = leaveGenreCheckboxList;
    this.includeBirthdayList = birthdayCheckboxList;
    this.includeHolidayList = holidayCheckboxList;
  }

  getInitialCurrentMonth() {
    let date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth();
    this.todayMonth = this.month;
    this.todayYear = this.year;
    const { monthArray } = getMonthDetailsConfig(this.year, this.month);
    this.monthDetailList = monthArray;
  }

  monthList = [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน ',
    'พฤษภาคม ',
    'มิถุนายน ',
    'กรกฎาคม ',
    'สิงหาคม ',
    'กันยายน ',
    'ตุลาคม',
    'พฤศจิกายน ',
    'ธันวาคม ',
  ];

  leaveList = [
    {
      leave: 'ลากิจทั้งหมด',
      amount: '3 คน',
      color: '#005fbc',
      border: '#005fbc',
    },
    {
      leave: 'ลาพักร้อนทั้งหมด',
      amount: '3 คน',
      color: '#eb760b',
      border: '#eb760b',
    },
    {
      leave: 'ลาป่วยทั้งหมด',
      amount: '1 คน',
      color: '#ef0303',
      border: '#ef0303',
    },
    {
      leave: 'ลาอื่น ๆ ทั้งหมด',
      amount: '1 คน',
      color: '#239411',
      border: '#239411',
    },
    {
      leave: 'วันเกิดพนักงานทั้งหมด',
      amount: '6 คน',
      color: '#ff5444',
      border: '#ff5444',
    },
    {
      leave: 'วันหยุดทั้งหมด',
      amount: '2 วัน',
      color: '#636366',
      border: '#636366',
    },
  ];

  setYear(offset: any) {
    let year = this.year + offset;
    let month = this.month;
    const { monthArray } = getMonthDetailsConfig(year, month);
    this.monthDetailList = monthArray;
  }

  getMonthStr(month: any) {
    let calculateMonthSelect =
      this.monthList[Math.max(Math.min(11, month), 0)] || 'Month';
    this.monthSelected = calculateMonthSelect;
  }

  setMonth = (offset: any) => {
    this.month = this.month + offset;
    if (this.month === -1) {
      this.month = 11;
      this.year--;
    } else if (this.month === 12) {
      this.month = 0;
      this.year++;
    }
    const { monthArray } = getMonthDetailsConfig(this.year, this.month);
    this.monthDetailList = monthArray;
  };

  todayCalendarClick(today: string) {
    this.today = today;
    if (today === 'today') {
      const { monthArray } = getMonthDetailsConfig(
        this.todayYear,
        this.todayMonth
      );
      this.monthDetailList = monthArray;
      this.month = this.todayMonth;
    }
  }

  isFilteredCalendar() {
    const { monthArray } = getMonthDetailsConfig(this.year, this.month);
    this.monthDetailList = monthArray;
    this.monthDetailList.filter((detail: MonthDetailType | any) => {
      if (!detail.leaveValue) return;
      const filteredLeaveValues = detail.leaveValue.filter(
        (info: LeaveType) => {
          let checkedData = null;
          const nameLeaves = ['ลากิจ', 'ลาป่วย', 'ลาพักร้อน', 'ลาอื่นๆ'];
          this.includeLeaveGenreList?.map((selected: any) => {
            if (selected.select) {
              if (selected.leaveLabel === info.leave) {
                checkedData = info;
              } else {
                if (
                  !nameLeaves.includes(info.leave) &&
                  selected.leaveLabel === 'ลาอื่นๆ'
                ) {
                  checkedData = info;
                }
              }
            }
            if (this.isBirthdayCheckbox(info.birthday, detail.dateTimeStr)) {
              if (info.birthday === detail.dateTimeStr) {
                checkedData = info;
              }
              if (info.theSameDay) {
                checkedData = info;
              }
            } else {
              if (info.birthday !== info.dateLeave) {
                checkedData = !info;
                return;
              }
            }
          });

          return checkedData;
        }
      );
      detail.leaveValue = filteredLeaveValues;
      return detail;
    });
  }

  // Get event of checkbox
  getGenreOfLeaveCheckbox(event: any) {
    this.includeLeaveGenreList = event;
    this.isFilteredCalendar();
  }

  getBirthdayCheckbox(event: any) {
    this.includeBirthdayList = event;
    this.isFilteredCalendar();
  }

  getHolidayCheckbox(event: any) {
    this.includeHolidayList = event;
  }

  // Check leave condition and media screen show member
  isLeaveCondition(
    dateTimeStr: string,
    dateLeave: string,
    userIndex: number,
    birthday: string,
    leave: string,
    theSameDay: boolean
  ) {
    const windowsScreenWidth = window.innerWidth;
    if (windowsScreenWidth > this.mediaScreenWidth) {
      if (
        this.isLeaveLessThanSixAndThree(
          dateTimeStr,
          dateLeave,
          userIndex,
          leave,
          6
        ) ||
        (userIndex + 1 <= 6 &&
          this.isBirthdayCheckbox(birthday, dateTimeStr) &&
          dateTimeStr === birthday) ||
        (theSameDay && userIndex + 1 <= 6)
      ) {
        return true;
      }
      this.mediaScreenCheck = false;
      return false;
    } else {
      if (
        this.isLeaveLessThanSixAndThree(
          dateTimeStr,
          dateLeave,
          userIndex,
          leave,
          3
        ) ||
        (userIndex + 1 <= 3 &&
          this.isBirthdayCheckbox(birthday, dateTimeStr) &&
          dateTimeStr === birthday) ||
        (theSameDay && userIndex + 1 <= 3)
      ) {
        return true;
      }
      this.mediaScreenCheck = true;
      return false;
    }
  }

  // Check value less than six or three
  isLeaveLessThanSixAndThree(
    dateTimeStr: string,
    dateLeave: string,
    userIndex: number,
    leave: string,
    numberOfLeave: number
  ) {
    if (numberOfLeave === 6) {
      return (
        dateTimeStr === dateLeave &&
        userIndex + 1 <= numberOfLeave &&
        this.isLeaveCheckbox(leave)
      );
    } else {
      return (
        dateTimeStr === dateLeave &&
        userIndex + 1 <= numberOfLeave &&
        this.isLeaveCheckbox(leave)
      );
    }
  }

  isLeaveCheckbox(leave: any) {
    let leaveState = true;
    this.includeLeaveGenreList?.map((genre: any) => {
      if (genre.leaveLabel !== leave) return;
      if (genre.select) {
        leaveState = true;
      } else {
        leaveState = false;
      }
    });
    return leaveState;
  }

  isBirthdayCheckbox(birthday: any, dateTimeStr: any) {
    let birthdayState = true;
    this.includeBirthdayList?.map((day) => {
      if (dateTimeStr !== birthday) return;
      if (day.select) {
        birthdayState = true;
      } else {
        birthdayState = false;
      }
    });
    return birthdayState;
  }

  isBirthdayTooltip(dateTimeStr: string, birthday: string, dateLeave: string) {
    if (dateTimeStr !== birthday || birthday === dateLeave) {
      return true;
    }
    return false;
  }

  setMemberLeaveOver(dayMonth: number, leaveValue: any, lenLeave: number) {
    return (
      (dayMonth === 0 &&
        leaveValue &&
        lenLeave > 6 &&
        !this.mediaScreenCheck) ||
      (dayMonth === 0 && leaveValue && lenLeave > 3 && this.mediaScreenCheck)
    );
  }
}
