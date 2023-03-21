import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarMiniComponent } from './calendar-mini/calendar-mini.component';
import { CalendarLargeComponent } from './calendar-large/calendar-large.component';
import { CheckboxCalendarComponent } from '../components/checkbox-calendar/checkbox-calendar.component';
import { DetailCalendarComponent } from './detail-calendar/detail-calendar.component';
import { SharedModule } from '../shared/shared.module';
import { AddEquipmentEmployeeComponent } from './add-equipment-employee/add-equipment-employee.component';
@NgModule({
  declarations: [
    CalendarMiniComponent,
    CalendarLargeComponent,
    CheckboxCalendarComponent,
    DetailCalendarComponent,
    AddEquipmentEmployeeComponent,
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class CalendarModule {}
