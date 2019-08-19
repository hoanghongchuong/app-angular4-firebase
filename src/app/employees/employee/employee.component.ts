import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }
  ngOnInit() {
    this.resetForm();
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    if (form.value.$key === null) {
      this.employeeService.insertEmployee(form.value);
    }else {
      this.employeeService.updateEmployee((form.value));
    }
    this.resetForm(form);
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.employeeService.selectedEmployee = {
      $key: null,
      name: '',
      phone: '',
      email: '',
      position: '',
      business_unit: ''
    };
  }

  onDelete(form: NgForm) {
    if (confirm('Bạn có chắc muốn xóa') === true) {
      this.employeeService.deleteEmployee(form.value.$key);
    }
    this.resetForm();
  }
}
