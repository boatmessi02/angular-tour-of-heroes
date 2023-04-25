export const leaveGenreCheckboxList = [
  { id: 1, nameStyle: 'cb1', select: true, leaveLabel: 'ลากิจ' },
  { id: 2, nameStyle: 'cb2', select: true, leaveLabel: 'ลาป่วย' },
  { id: 3, nameStyle: 'cb3', select: true, leaveLabel: 'ลาพักร้อน' },
  { id: 4, nameStyle: 'cb4', select: true, leaveLabel: 'ลาอื่นๆ' },
];

export const birthdayCheckboxList = [
  {
    id: 5,
    nameStyle: 'cb5',
    select: true,
    leaveLabel: 'วันเกิดพนักงานทั้งหมด',
  },
];

export const holidayCheckboxList = [
  { id: 6, nameStyle: 'cb6', select: true, leaveLabel: 'วันหยุดทั้งหมด' },
];

const userList: any = [
  {
    name: 'สมัครชัย',
    dateLeave: '2023-03-05',
    leave: 'ลาคลอด',
    birthday: '2023-03-01',
    theSameDay: false,
    department: 'นักพัฒนา',
    genreLeave: 'ลาช่วงบ่าย',
    timeLeave: '4 ชั่วโมง',
    allow: 'รออนุมัติ',
  },
  {
    name: 'สรพัค',
    dateLeave: '2023-03-05',
    leave: 'ลาหาผัว',
    birthday: '2023-03-28',
    theSameDay: false,
    department: 'นักพัฒนา',
    genreLeave: 'ลาทั้งวัน',
    timeLeave: '1 วัน',
    allow: 'รออนุมัติ',
  },
  {
    name: 'ธนดล',
    dateLeave: '2023-03-06',
    leave: 'ลาอื่นๆ',
    birthday: '2023-03-06',
    theSameDay: true,
    department: 'นักพัฒนา',
    genreLeave: 'ลาทั้งวัน',
    timeLeave: '1 วัน',
    allow: 'รออนุมัติ',
  },
  {
    name: 'สิทโชค',
    dateLeave: '2023-03-02',
    leave: 'ลากิจ',
    birthday: '2023-03-02',
    theSameDay: true,
    department: 'ดีไซน์เนอร์',
    genreLeave: 'ลาช่วงบ่าย',
    timeLeave: '4 ชั่วโมง',
    allow: 'รออนุมัติ',
  },
  {
    name: 'สมพร',
    dateLeave: '2023-03-02',
    leave: 'ลากิจ',
    birthday: '2023-03-03',
    theSameDay: false,
    department: 'ดีไซน์เนอร์',
    genreLeave: 'ลาช่วงบ่าย',
    timeLeave: '4 ชั่วโมง',
    allow: 'อนุมัติ',
  },
  {
    name: 'สหวรรณ',
    dateLeave: '2023-03-04',
    leave: 'ลาพักร้อน',
    birthday: '2023-03-04',
    theSameDay: true,
    department: 'ดีไซน์เนอร์',
    genreLeave: 'ลาช่วงบ่าย',
    timeLeave: '4 ชั่วโมง',
    allow: 'อนุมัติ',
  },
  {
    name: 'กินลาป',
    dateLeave: '2023-03-01',
    leave: 'ลาอื่นๆ',
    birthday: '2023-03-08',
    theSameDay: false,
    department: 'ดีไซน์เนอร์',
    genreLeave: 'ลาทั้งวัน',
    timeLeave: '1 วัน',
    allow: 'อนุมัติ',
  },
  {
    name: 'อวตาล',
    dateLeave: '2023-03-01',
    leave: 'ลาอื่นๆ',
    birthday: '2023-03-16',
    theSameDay: false,
    department: 'นักพัฒนา',
    genreLeave: 'ลาช่วงบ่าย',
    timeLeave: '4 ชั่วโมง',
    allow: 'อนุมัติ',
  },
  {
    name: 'พรภพ',
    dateLeave: '2023-03-18',
    leave: 'ลาอื่นๆ',
    birthday: '2023-03-18',
    theSameDay: true,
    department: 'นักพัฒนา',
    genreLeave: 'ลาทั้งวัน',
    timeLeave: '1 วัน',
    allow: 'รออนุมัติ',
  },
  {
    name: 'กินมีดี',
    dateLeave: '2023-03-02',
    leave: 'ลาป่วย',
    birthday: '2023-03-20',
    theSameDay: false,
    department: 'ดีไซน์เนอร์',
    genreLeave: 'ลาทั้งวัน',
    timeLeave: '1 วัน',
    allow: 'รออนุมัติ',
  },
  {
    name: 'สหัส',
    dateLeave: '2023-03-02',
    leave: 'ลาอื่นๆ',
    birthday: '2023-03-22',
    theSameDay: false,
    department: 'ดีไซน์เนอร์',
    genreLeave: 'ลาทั้งวัน',
    timeLeave: '1 วัน',
    allow: 'อนุมัติ',
  },
  {
    name: 'ธีรภร',
    dateLeave: '2023-03-02',
    leave: 'ลาพักร้อน',
    birthday: '2023-03-02',
    theSameDay: true,
    department: 'นักพัฒนา',
    genreLeave: 'ลาทั้งวัน',
    timeLeave: '1 วัน',
    allow: 'รออนุมัติ',
  },
  {
    name: 'สินสัย',
    dateLeave: '2023-03-02',
    leave: 'ลาป่วย',
    birthday: '2023-03-24',
    theSameDay: false,
    department: 'นักพัฒนา',
    genreLeave: 'ลาทั้งวัน',
    timeLeave: '1 วัน',
    allow: 'อนุมัติ',
  },
  {
    name: 'โลนิน',
    dateLeave: '2023-03-02',
    leave: 'ลาป่วย',
    birthday: '2023-03-24',
    theSameDay: false,
    department: 'นักพัฒนา',
    genreLeave: 'ลาทั้งวัน',
    timeLeave: '1 วัน',
    allow: 'อนุมัติ',
  },

  {
    name: 'คำแพง',
    dateLeave: '2023-03-05',
    leave: 'ลาพักร้อน',
    birthday: '2023-03-02',
    theSameDay: false,
    department: 'นักพัฒนา',
    genreLeave: 'ลาช่วงบ่าย',
    timeLeave: '4 ชั่วโมง',
    allow: 'อนุมัติ',
  },
  {
    name: 'คำแจ้ง',
    dateLeave: '2023-03-02',
    leave: 'ลาพักร้อน',
    birthday: '2023-03-02',
    theSameDay: true,
    department: 'นักพัฒนา',
    genreLeave: 'ลาช่วงบ่าย',
    timeLeave: '4 ชั่วโมง',
    allow: 'อนุมัติ',
  },
  {
    name: 'คำมี',
    dateLeave: '2023-03-04',
    leave: 'ลาพักร้อน',
    birthday: '2023-03-05',
    theSameDay: false,
    department: 'ดีไซน์เนอร์',
    genreLeave: 'ลาช่วงบ่าย',
    timeLeave: '4 ชั่วโมง',
    allow: 'อนุมัติ',
  },
];

const dayList: string[] = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const extractDateToStrConfig = (thaiDate: any) => {
  const dateString = thaiDate;
  // Extract year, month, and day values from the date string
  const [dateStr, monthStr, year] = dateString
    .split(' ')[0]
    .split('/')
    .map((str: any) => parseInt(str, 10).toString().padStart(2, '0'));
  const yearStr = year - 543;

  return `${yearStr}-${monthStr}-${dateStr}`;
};

const getNumberOfDaysConfig = (year: any, month: any) => {
  return 40 - new Date(year, month, 40).getDate();
};

const getDayDetailsConfig = (monthDetailList: any) => {
  let date = monthDetailList.index - monthDetailList.firstDayOfMonth;
  let day = monthDetailList.index % 7;
  let prevMonth = monthDetailList.month - 1;
  let prevYear = monthDetailList.year;
  if (prevMonth < 0) {
    prevMonth = 11;
    prevYear--;
  }
  let prevMonthNumberOfDays = getNumberOfDaysConfig(prevYear, prevMonth);
  let _date =
    (date < 0 ? prevMonthNumberOfDays + date : date % monthDetailList.dayOfMonth) +
    1;
  let month = date < 0 ? -1 : date >= monthDetailList.dayOfMonth ? 1 : 0;

  const options: any = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };
  let thaiDate = new Date(
    monthDetailList.year,
    monthDetailList.month + month,
    _date
  ).toLocaleString('th-TH', options);

  let dateTimeStr = extractDateToStrConfig(thaiDate);
  return {
    date: _date,
    day,
    month,
    dateTimeStr,
    dayString: dayList[day],
  };
};

export const getMonthDetailsConfig = (year: number, month: number) => {
  let firstDayOfMonth = new Date(year, month).getDay();
  let dayOfMonth = getNumberOfDaysConfig(year, month);
  let monthArray = [];
  let rows = 6;
  let currentDay: any = null;
  let index = 0;
  let cols = 7;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      currentDay = getDayDetailsConfig({
        index,
        dayOfMonth,
        firstDayOfMonth,
        year,
        month,
      });

      let addLeaveUserToCurrentDay: any = [];
      userList.forEach((user: any) => {
        if (
          user.dateLeave === currentDay.dateTimeStr &&
          currentDay.dateTimeStr !== user.birthday
        ) {
          addLeaveUserToCurrentDay.push(user);
        }
        if (user.birthday === currentDay.dateTimeStr) {
          addLeaveUserToCurrentDay.push(user);
        }
      });

      if (addLeaveUserToCurrentDay.length > 0) {
        currentDay.leaveValue = addLeaveUserToCurrentDay;
      } else {
        currentDay.leaveValue = null;
      }

      monthArray.push(currentDay);
      index++;
      
    }
  }
  
  return { monthArray: monthArray };
};
