import { EmployeeProps } from "../Main/Main.types"

export interface EmployeeDetailProps { 
    data: EmployeeProps[],
    currentId: number
    deleteBtn: () => JSX.Element
} 

