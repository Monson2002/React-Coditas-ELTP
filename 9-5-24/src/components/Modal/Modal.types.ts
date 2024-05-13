import { EmployeeProps } from "../Main/Main.types"

export interface ModalProps {
    data: EmployeeProps[], 
    details: EmployeeProps,
    saveBtn: ({id, editedDetails}: {id: number, editedDetails: any}) => JSX.Element
} 
