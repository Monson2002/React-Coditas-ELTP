import { Dispatch, SetStateAction } from "react";
import { Leave } from "../LeaveList/LeaveList.types";

export interface DashboardProps { 
    leaves: Leave[];
    setLeaves: Dispatch<SetStateAction<Leave[]>>
} 
