import { Component, OnInit } from '@angular/core';
import {AngularFireList} from 'angularfire2/database';
import {EmployeeService} from '../shared/employee.service';
import {Employee} from '../shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    let x = this.employeeService.getData();
    console.log(x);
    x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        this.employeeList.push(y as Employee);
      });
    });
  }
  onItemClick(emp: Employee) {
    this.employeeService.selectedEmployee = emp;
    console.log(emp);
  }

}
