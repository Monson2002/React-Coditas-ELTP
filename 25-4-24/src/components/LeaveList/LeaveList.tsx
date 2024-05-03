import { Component, ReactNode } from "react";
import { LeaveListProps } from "./LeaveList.types"; 
import { LeaveProps } from "../Leave/Leave.types";
import styles from './LeaveList.module.scss'; 
import LeaveMain from "../Leave/Leave";

const {Leave, LeaveClass} = LeaveMain;

const LeaveList = ({ type, leaves, actions }: LeaveListProps) => {   
  console.log(actions);
    
  return ( 
    <div className={`${styles.LeaveList} ${styles.Scroller}`}> 
      <h2>{type}</h2>
      {leaves.filter((leave) => leave.type === type)
      .map((leave: any) => {        
        return (
          <Leave key={leave.id} type={leave.type} id={leave.id} date={leave.date} desc={leave.desc} actions={actions}/>
        )
      })}
    </div> 
  ); 
}; 

class LeaveListClass extends Component<{
  type: string, 
  leaves: any, 
  actions: ((id: number) => JSX.Element)[]}, {}> {
  constructor(props: {
    type: string, 
    leaves: any, 
    actions: ((id: number) => JSX.Element)[]}
  ) {
    super(props);
  }
  
  render(): ReactNode {
    console.log(this.props.actions);
    return ( 
      <div className={`${styles.LeaveList} ${styles.Scroller}`}> 
        <h2>{this.props.type}</h2>
        {this.props.leaves.filter((leave: LeaveProps) => leave.type === this.props.type)
        .map((leave: any) => {        
          return (
            <LeaveClass key={leave.id} id={leave.id} date={leave.date} desc={leave.desc} actions={this.props.actions}/>
          )
        })}
      </div> 
    ); 
  }
}
  
export default {
  LeaveList,
  LeaveListClass
};  
