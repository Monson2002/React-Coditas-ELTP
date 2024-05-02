import { useState } from "react";
import { DashboardProps } from "./Dashboard.types";
import styles from './Dashboard.module.scss';
import LeaveList from "../LeaveList/LeaveList";

const Dashboard = ({ leaves, setLeaves }: DashboardProps) => {
  const [leaveArr, setLeaveArr] = useState(leaves);
  console.log(leaveArr, setLeaveArr, setLeaves);
  
  const handleClick = (text: string, btn: any) => {
    const card = leaves.find((leave) => leave.id === btn.id);
    const remaining = leaves.filter((leave) => leave.id !== btn.id)
    console.log(`${text} Clicked`, card);
    if (text === 'S') {
      card!.type = "Sick";
    } else if (text === 'M') {
      card!.type = "Mandatory";
    } else {
      card!.type = "Planned";
    }
    // console.log([...remaining]);
    setLeaveArr([...remaining, card!]);
    console.log(leaveArr, card);
    
  }

  // const handleSickClick = (id: any) => {
  //   const card = leaves.filter((card) => card.id === id);
  //   console.log('Sick CLicked', card);
  // }

  // const handlePlannedClick = (id: number) => {
  //   const card = leaves.filter((card) => card.id === id);
  //   console.log('Planned CLicked', card);
  // }

  const createBtn = (text: string, id: number) => <button onClick={() => handleClick(text, id)}>{text}</button>
  const plannedBtn = (id: number) => createBtn('P', id);
  const mandatoryBtn = (id: number) => createBtn('M', id);
  const sickBtn = (id: number) => createBtn('S', id);
  // console.log(plannedBtn);
  return (
    <div className={styles.Dashboard}>
      <LeaveList type="Planned" leaves={leaveArr} actions={[mandatoryBtn, sickBtn]} />
      <LeaveList type="Mandatory" leaves={leaveArr} actions={[sickBtn, plannedBtn]} />
      <LeaveList type="Sick" leaves={leaveArr} actions={[mandatoryBtn, plannedBtn]} />
    </div>
  );
};

export default Dashboard;  