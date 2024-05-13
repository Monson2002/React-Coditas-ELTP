import { EmployeeNameAndId } from "../Main/Main.types";

export interface EmployeeListProps { 
    employeeNameAndIdList: EmployeeNameAndId[];
    clickHandler: ({id}: {id: number}) => JSX.Element;
    editHandler: ({id}: {id: number}) => JSX.Element;
} 
