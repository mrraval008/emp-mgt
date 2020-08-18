import { Action } from '@ngrx/store/src/models';
import  { EmployeeModel } from '../../model/employee.model';

export const ADD_EMP = "ADD_EMP";
export const ADD_EMPS = "ADD_EMPS";
export const DELETE_EMP = "DELETE_EMP";
export const UPDATE_EMP = "UPDATE_EMP";
export const START_EDIT= 'START_EDIT'
export const STOP_EDIT = 'STOP_EDIT'

export class AddEmp implements Action {
        readonly type = ADD_EMP;
        constructor(public payload:EmployeeModel){}
}

export class AddEmps implements Action{
    readonly type = ADD_EMPS
    constructor(public payload:EmployeeModel[]){}
}

export class DeleteEmp implements Action{
        readonly type = DELETE_EMP;
        constructor(){}
}

export class UpdateEmp implements Action{
    readonly type = UPDATE_EMP;
    constructor(public payload:EmployeeModel){}
}

export class StartEdit implements Action{
    readonly type = START_EDIT;
    constructor(public payload:string){}
}

export class StopEdit implements Action{
    readonly type = STOP_EDIT;
    constructor(){}
}

export type empActions = AddEmp | AddEmps | UpdateEmp | DeleteEmp | StartEdit |  StopEdit;
