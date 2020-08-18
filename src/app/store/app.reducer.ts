
//Using mapping so in future if we want to add mode reducers we can add it here

import * as fromEmp from './employee/employee.reducer';

import { ActionReducerMap } from '@ngrx/store/src/models';


export interface AppState{
    emps:fromEmp.State
}

export const appReducer:ActionReducerMap<AppState> = {
    emps:fromEmp.empReducer
}