import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Store } from '@ngrx/store/';
import * as fromApp from '../../store/app.reducer';
import { Observable } from 'rxjs/internal/Observable';
import { State } from 'src/app/store/employee/employee.reducer';
import { EmployeeService } from 'src/app/service/employee.service';



@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  public empStore$: Observable<State>;
  constructor(private store: Store<fromApp.AppState>, private empService: EmployeeService) { }
  public filterText: string = "";
  public sortObj:object = {};

  ngOnInit() {
    this.empStore$ = this.store.select('emps');
  }

  deleteEmployee(event) {
    if (event.target.id && event.target.id.includes('delete')) {
      let confirmDelete = confirm("Are you sure you want to delete ?");
      if (confirmDelete) {
        let empId = event.target.id.split("#")[1];
        this.empService.deleteEmployee(empId);
      }
    }
  }
  onSort(event) {
    if (event.target.id && event.target.id.includes('sort')) {
      let _sortData = event.target.id;
      let _sortDataSplit = _sortData.split('-');
      this.sortObj = {
        sortBy: _sortDataSplit[1],
        sortOrder:_sortDataSplit[2]
      }
      // todoView.clearView();
      // items = items.sort((elem1, elem2) => {
      //   var x = elem1[_sortBy].toLowerCase();
      //   var y = elem2[_sortBy].toLowerCase();
      //   if (_sortOrder == 'asc') {
      //     return x < y ? -1 : x > y ? 1 : 0;
      //   } else {
      //     return x < y ? 1 : x > y ? -1 : 0;
      //   }
      // })
    }

  }

}
