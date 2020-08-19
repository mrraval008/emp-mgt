import  { EmployeeModel } from '../../model/employee.model';
import * as EmployeeAction from './employee.action';

export interface State{
    emps:EmployeeModel[];
    editEmp:EmployeeModel,
    editEmpIndex:any
}

const initialEmp:State = {
    emps:[],
    editEmp:null,
    editEmpIndex:-1
} 

export function empReducer(state:State=initialEmp,action:EmployeeAction.empActions){

    switch(action.type){

        case EmployeeAction.ADD_EMP:
            return {
                ...state,
                emps:[...state.emps,action.payload]
            }
        
        case EmployeeAction.ADD_EMPS:
            return {
                ...state,
                emps:[...action.payload]
            }

        case EmployeeAction.UPDATE_EMP:{
                let updatedPost = {...state.emps[state.editEmpIndex]};
                updatedPost = {...updatedPost,...action.payload}
                let allEmps = [...state.emps]
                allEmps[state.editEmpIndex] = updatedPost;
                return {
                    ...state,
                    emps:allEmps
                }
        }

        case EmployeeAction.DELETE_EMP:{
                return {
                    ...state,
                    emps:state.emps.filter((emp,index)=> index != state.editEmpIndex)
                }
        }
        case EmployeeAction.START_EDIT:
        let id = action.payload;
        let editedItem = state.emps.find(emp=>emp.id === id);
        let editIndex = state.emps.findIndex(emp=>emp.id === id);
            return {
                ...state,
                editEmp:editedItem,
                editEmpIndex:editIndex
            }
    case EmployeeAction.STOP_EDIT :
        return {
            ...state,
            editEmp:null,
            editEmpIndex:-1
        }

        default:return state
    }
}