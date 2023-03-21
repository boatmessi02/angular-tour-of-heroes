import { Component } from '@angular/core';

@Component({
  selector: 'app-add-equipment-employee',
  templateUrl: './add-equipment-employee.component.html',
  styleUrls: ['./add-equipment-employee.component.css'],
})
export class AddEquipmentEmployeeComponent {
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

  onSubmit(event: any) {
    console.log(event);
  }
}
