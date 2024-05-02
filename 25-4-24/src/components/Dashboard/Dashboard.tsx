import { Component, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { DashboardProps } from "./Dashboard.types";
import styles from './Dashboard.module.scss';
import { Leave } from "../LeaveList/LeaveList.types";
import LeaveListMain from "../LeaveList/LeaveList";

const {LeaveList, LeaveListClass} = LeaveListMain;

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


class DashboardClass extends Component<{leaves: Leave[], setLeaves: Dispatch<SetStateAction<Leave[]>>},
{
  leavesArr: Leave[]
}> {
  constructor(props: {leaves: Leave[], setLeaves: Dispatch<SetStateAction<Leave[]>>}) {
    super(props);
    this.state = {
      leavesArr: this.props.leaves
    }
  }

  handleClick(text: string, btn: any) {
    const card = this.state.leavesArr.find((leave) => leave.id === btn.id);
    const remaining = this.state.leavesArr.filter((leave) => leave.id !== btn.id)
    console.log(`${text} Clicked`, card);
    if (text === 'S') {
      card!.type = "Sick";
    } else if (text === 'M') {
      card!.type = "Mandatory";
    } else {
      card!.type = "Planned";
    }
    this.setState({leavesArr: [...remaining, card!]});
    console.log(this.state.leavesArr, card);
  }

  createBtn(text: string, id: number) {
    return <button onClick={() => this.handleClick(text, id)}>{text}</button>
  }
  plannedBtn(id: number) {
    return this.createBtn('P', id);
  }
  mandatoryBtn(id: number) { 
    return this.createBtn('M', id)
  } 
  sickBtn(id: number) {
    return this.createBtn('S', id);
  }
  render(): ReactNode {
    return (
     <div className={styles.Dashboard}>
        <LeaveListClass type="Planned" leaves={this.state.leavesArr} actions={[this.mandatoryBtn, this.sickBtn]} />
        <LeaveListClass type="Mandatory" leaves={this.state.leavesArr} actions={[this.sickBtn, this.plannedBtn]} />
        <LeaveListClass type="Sick" leaves={this.state.leavesArr} actions={[this.mandatoryBtn, this.plannedBtn]} />
      </div>
    );
  }
}

export default {
  Dashboard,
  DashboardClass
};  