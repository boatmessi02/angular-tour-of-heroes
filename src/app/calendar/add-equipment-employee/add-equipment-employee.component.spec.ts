import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquipmentEmployeeComponent } from './add-equipment-employee.component';

describe('AddEquipmentEmployeeComponent', () => {
  let component: AddEquipmentEmployeeComponent;
  let fixture: ComponentFixture<AddEquipmentEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEquipmentEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEquipmentEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
