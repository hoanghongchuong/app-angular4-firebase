import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Employee} from './employee.model';

@Injectable()
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }
  insertEmployee(employee: Employee) {
    this.employeeList = this.firebase.list('employees');
    this.employeeList.push({
      name: employee.name,
      phone: employee.phone,
      email: employee.email,
      position: employee.position,
      business_unit: employee.business_unit
    }).then(r => console.log(r));
  }
}
