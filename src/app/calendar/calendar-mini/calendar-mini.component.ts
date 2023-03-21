import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MonthDetailType } from 'src/app/interface/I-calendar';
import { getMonthDetailsConfig } from '../../core/configs/calendar';
@Component({
  selector: 'app-calendar-mini',
  templateUrl: './calendar-mini.component.html',
  styleUrls: ['./calendar-mini.component.css'],
})
export class CalendarMiniComponent implements OnInit {
  toggleMonthSelect: boolean = false;
  monthSelected: string = '';
  numberOfMonthSelected: number = 0;
  year: number = 0;
  month: number = 0;
  monthDetailList: MonthDetailType[] = [];
  oneDay: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.getInitialMonth();
  }

  getInitialMonth() {
    let date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth();
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
    this.numberOfMonthSelected = month;
  }

  selectMonth(month: any) {
    this.month = month;
    const { monthArray } = getMonthDetailsConfig(this.year, this.month);
    this.monthDetailList = monthArray;
    this.toggleMonthSelect = false;
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

  onMonthToggle = () => {
    if (!this.toggleMonthSelect) {
      this.toggleMonthSelect = true;
    } else {
      this.toggleMonthSelect = false;
    }
  };

  onCircleClick() {
    console.log('xxx');
    this.router.navigate(['calendar/employee']);
  }
}
