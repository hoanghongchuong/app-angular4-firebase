import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.employeeService.insertEmployee(form.value);
    this.resetForm(form);
  }

  resetForm(form: NgForm) {
    form.reset();
    this.employeeService.selectedEmployee = {
      name: '',
      phone: '',
      email: '',
      position: '',
      business_unit: ''
    };
  }
}
