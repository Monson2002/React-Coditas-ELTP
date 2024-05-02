import { LeaveProps } from "./Leave.types";
import styles from './Leave.module.scss';

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

export default Leave;  
