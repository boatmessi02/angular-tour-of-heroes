import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarMiniComponent } from './calendar-mini/calendar-mini.component';
import { CalendarLargeComponent } from './calendar-large/calendar-large.component';
import { DetailCalendarComponent } from './detail-calendar/detail-calendar.component';
import { AddEquipmentEmployeeComponent } from './add-equipment-employee/add-equipment-employee.component';
const routes: Routes = [
  { path: '', component: CalendarMiniComponent },

  {
    path: 'calendar-large',
    component: CalendarLargeComponent,
  },
  // {
  //   path: ':day',
  //   component: DetailCalendarComponent,
  // },
  // {
  //   path: 'calendar-large/:day',
  //   component: DetailCalendarComponent,
  // },
  {
    path: 'employee',
    component: AddEquipmentEmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarRoutingModule {}
