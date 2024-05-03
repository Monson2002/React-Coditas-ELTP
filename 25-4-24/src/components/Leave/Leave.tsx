import { LeaveProps } from "./Leave.types";
import styles from './Leave.module.scss';
import { Component, ReactNode } from "react";

const Leave = ({ id, date, desc, actions }: LeaveProps) => {
  return (
    <div className={styles.Leave}>
      <div className={styles.LeaveInfo}>
        <span>{date}</span>
        <span>{desc}</span>
      </div>
      <div className={styles.LeaveActions}>
        {actions.map((Btn: any, uid: number) => {
          return (
            <Btn key={uid} id={id}/>  
          )
        })}
      </div>
    </div>
  );
};

class LeaveClass extends Component<{
  id: number, 
  date: string, 
  desc: string, 
  actions: ((id: number) => JSX.Element)[]
}, {}> {
  constructor(props: {
    id: number, 
    date: string, 
    desc: string, 
    actions: ((id: number) => JSX.Element)[]
  }) {
    super(props); 
  }

  render(): ReactNode {
    // console.log(this.props);
    
    return (
      <div className={styles.Leave}>
        <div className={styles.LeaveInfo}>
          <span>{this.props.date}</span>
          <span>{this.props.desc}</span>
        </div>
        <div className={styles.LeaveActions}>
          {this.props.actions.map((Btn: any, uid: number) => {
            return (
              <Btn key={uid} id={this.props.id}/>  
            )
          })}
        </div>
      </div>
    );
  }
}

export default {
  Leave,
  LeaveClass
};  
