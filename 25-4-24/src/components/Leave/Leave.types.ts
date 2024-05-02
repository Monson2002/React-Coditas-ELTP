export interface LeaveProps { 
    id: number, 
    date: string, 
    desc: string,
    actions: ((id: number) => JSX.Element)[]
} 
