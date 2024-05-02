import { LeaveListProps } from "./LeaveList.types"; 
import styles from './LeaveList.module.scss'; 
import Leave from "../Leave/Leave";
 
const LeaveList = ({ type, leaves, actions }: LeaveListProps) => {     
  return ( 
    <div className={`${styles.LeaveList} ${styles.Scroller}`}> 
      <h2>{type}</h2>
      {leaves.filter((leave) => leave.type === type)
      .map((leave: any) => {        
        return (
          <Leave key={leave.id} id={leave.id} date={leave.date} desc={leave.desc} actions={actions}/>
        )
      })}
    </div> 
  ); 
}; 
  
export default LeaveList;  
