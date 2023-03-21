export interface MonthDetailType {
  date: number;
  day: number;
  month: number;
  dateTimeStr: string;
  dayString: string;
  leaveValue: LeaveType[];
}

export interface LeaveType {
  dateLeave: string;
  name: string;
  leave: string;
  birthday: string;
  theSameDay: boolean;
  department: string;
  genreLeave: string;
  timeLeave: string;
  allow: string;
}
