export interface LeaveProps { 
    id: number, 
    date: string, 
    desc: string,
    type: string,
    actions: ((id: number) => JSX.Element)[]
} 
