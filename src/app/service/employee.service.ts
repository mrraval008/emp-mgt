import { Injectable } from '@angular/core';
import { EmployeeModel } from '../model/employee.model';
import { UtilService } from 'src/app/service/util.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as EmpAction from '../store/employee/employee.action';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private store:Store<fromApp.AppState>, private utilService:UtilService) { 
      this.getAllEmployee(true);
  }

  private empList:EmployeeModel[];  

  createEmployee(data:EmployeeModel) {
    let _empList = this.getAllEmployee(false);
      if(!_empList){
        _empList = [];
      }
      _empList.push(data)
      this.utilService.setLocalStorage('emps',_empList);
      this.store.dispatch(new EmpAction.AddEmp(data));
  }

  deleteEmployee(id:string) {
    this.store.dispatch(new EmpAction.StartEdit(id));
    let _empList = this.getAllEmployee(false);
    let index = this.getEmpIndex(_empList,id);
    _empList.splice(index,1)
    this.utilService.setLocalStorage('emps',_empList);
    this.store.dispatch(new EmpAction.DeleteEmp());
    this.store.dispatch(new EmpAction.StopEdit());
  }

  updateEmployee(data:EmployeeModel) {
    let _empList = this.getAllEmployee(false);
    if(_empList){
      this.store.dispatch(new EmpAction.StartEdit(data.id));
      let index = this.getEmpIndex(_empList,data.id);
      _empList[index] = data;
      this.utilService.setLocalStorage('emps',_empList);
      this.store.dispatch(new EmpAction.UpdateEmp(data));
      this.store.dispatch(new EmpAction.StopEdit());
    }
  }

  getEmployeeByID(id:string) {
    let _empList = this.utilService.getLocalStorage('emps');
    if(_empList){
      let index = this.getEmpIndex(_empList,id);
      return _empList[index];
    }
    return null;
  }

  getAllEmployee(addEmps) {
      let _empList = this.utilService.getLocalStorage('emps');
      if(addEmps && _empList){
        this.store.dispatch(new EmpAction.AddEmps(_empList))
      }
      return _empList
  }

  getEmpIndex(empList,id){
    return empList.findIndex(emp=>emp.id === id);
  }
}
