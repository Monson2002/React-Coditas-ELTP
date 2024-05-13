import { EmployeeProps } from "../Main/Main.types"

export interface EmployeeDetailProps { 
    data: EmployeeProps[],
    currentId: number
    deleteBtn: () => JSX.Element
    modal: EmployeeProps | null, 
    saveEmployee: ({id, editedDetails}: {id: number, editedDetails: EmployeeProps}) => JSX.Element,
    employeeToEdit: number | null
} 

