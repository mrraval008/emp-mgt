import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/model/employee.model';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UtilService } from 'src/app/service/util.service';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {
  public isEditMode: boolean = false;
  public empData:EmployeeModel; 
  private cloneEmpData:EmployeeModel;
  public showLoader:boolean = true;
  public mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
  public emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
  constructor(private route: ActivatedRoute,private utilService:UtilService,private empService:EmployeeService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let empId = params['empId'];
      if (empId) {
        this.isEditMode = true;
        this.empData = this.empService.getEmployeeByID(empId);
        this.cloneEmpData = this.utilService.cloneObj(this.empData)
      } else {
        this.isEditMode = false;
        let avatar = this.utilService.getRandomAvatar();
        this.empData = new EmployeeModel("","","","",null,"",avatar);
      }
      this.showLoader = false;
    })
  }

  onSubmit(form:NgForm){
    this.showLoader = true;
      if(form.invalid){
        alert('Please provide valid data.')
        return
      }
      if(!form.dirty){
          alert('No Changes to save.')
          return
      }
       let {name,email,companyName,contactNum,designation} = form.value;
      if(!this.isEditMode){
            let emp = new EmployeeModel(this.utilService.genarateRandomId(),name,email,companyName,contactNum,designation,this.empData.avatar);
            this.empService.createEmployee(emp)
      }else{
        this.empService.updateEmployee(this.empData)
      }
      if(this.isEditMode){
        alert('Employee updated succesfully.')
      }else{
        alert('Employee created succesfully.')
      }
      this.showLoader = false;
      
  }

  onCancel(form:NgForm){
    if(this.isEditMode){
      this.empData = this.utilService.cloneObj(this.cloneEmpData);
    }else{
      form.resetForm();
    }
  }

}
