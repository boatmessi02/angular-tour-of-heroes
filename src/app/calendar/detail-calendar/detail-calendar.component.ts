import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getMonthDetailsConfig } from '../../core/configs/calendar';
import { MonthDetailType, LeaveType } from 'src/app/interface/I-calendar';
import { convertDate } from 'src/app/core/utils/formatLocalDateWeek';
@Component({
  selector: 'app-detail-calendar',
  templateUrl: './detail-calendar.component.html',
  styleUrls: ['./detail-calendar.component.css'],
})
export class DetailCalendarComponent implements OnInit {
  searchText: string = '';
  thaiDate: string = '';
  monthDetails?: MonthDetailType[];
  users: LeaveType[] = [];
  sortedUsers: LeaveType[] = [];
  usersBirthday: LeaveType[] = [];
  dateSelected: string = '';
  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  testList = [
    {
      id: 1,
      name: 'อุปกรณ์ 1',
      inputValue: '',
      avatar: 'avatar',
    },
    {
      id: 2,
      name: 'อุปกรณ์ 2',
      inputValue: '',
      avatar: 'avatar',
    },
    {
      id: 3,
      name: 'อุปกรณ์ 3',
      inputValue: '',
      avatar: 'avatar',
    },
  ];
  
  ngOnInit() {
    this.sortedUsers = this.users;
    const date = this.activeRoute.snapshot.paramMap.get('day');
    this.dateSelected = date as string;
    this.getMonthArray(date as string);
    this.getUsersDetail(date as string);
    this.getThaiDate(date as string);
  }

  onSubmit(event:any) {
    console.log(event);
  }

  getUsersDetail(date: string) {
    const filteredMountDetail = this.monthDetails?.filter(
      (day) => day.dateTimeStr === date
    );
    filteredMountDetail?.map((detail) => {
      detail.leaveValue?.map((user) => {
        if (
          user.birthday === user.leave ||
          user.dateLeave === this.dateSelected
        ) {
          this.users.push(user);
        }
        if (user.birthday === date) {
          this.usersBirthday.push(user);
        }
      });
    });
  }

  getThaiDate(date: string) {
    this.thaiDate = convertDate(date as string, 'th-TH');
  }

  getMonthArray(dateSelected: string) {
    const date = new Date(dateSelected);
    const { monthArray } = getMonthDetailsConfig(
      date.getFullYear(),
      date.getMonth()
    );
    this.monthDetails = monthArray;
  }

  onSearchChange() {
    if (this.searchText == '') {
      this.sortedUsers = this.users;
      return;
    }

    // filtered member contain only member that includes searchText
    this.sortedUsers = this.users.filter(
      (row) =>
        row.name
          .toLocaleLowerCase()
          .includes(this.searchText.toLocaleLowerCase()) ||
        row.leave
          .toLocaleLowerCase()
          .includes(this.searchText.toLocaleLowerCase())
    );
  }

  backBtnClick() {
    let pathURL = this.activeRoute.snapshot.url[0].path;
    if (pathURL === 'calendar-large') {
      this.router.navigate(['calendar/calendar-large']);
    } else if (pathURL === this.dateSelected) {
      this.router.navigate(['calendar']);
    }
  }
}
