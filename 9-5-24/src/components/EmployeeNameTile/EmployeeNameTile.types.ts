export interface EmployeeNameTileProps { 
    name: string;
    id: number;
    clickHandler: ({id}: {id: number}) => JSX.Element;
    editHandler: ({id}: {id: number}) => JSX.Element;
} 
