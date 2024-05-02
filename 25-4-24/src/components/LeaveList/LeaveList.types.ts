export interface LeaveListProps { 
    type: string;
    leaves: Leave[];
    actions: ((id: number) => JSX.Element)[];
} 

export interface Leave {
    id: number, 
    type: string, 
    date: string, 
    desc: string
}