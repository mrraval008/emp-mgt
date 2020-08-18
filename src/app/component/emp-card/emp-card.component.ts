import { Component, OnInit, Input } from '@angular/core';
import { EmployeeModel } from 'src/app/model/employee.model';

@Component({
  selector: 'app-emp-card',
  templateUrl: './emp-card.component.html',
  styleUrls: ['./emp-card.component.css']
})
export class EmpCardComponent implements OnInit {
  @Input() empData:EmployeeModel
  constructor() { }

  ngOnInit() {
  }
}
