import { LeaveContaianerProps } from "./LeaveContainer.types";
import styles from './LeaveContainer.module.scss';
import { useState } from "react";

const LeaveContaianer = ({ type, data }: LeaveContaianerProps) => {
  const [arr, setArr] = useState(data);
  const handleShift = (event: React.MouseEvent) => {
    event.preventDefault();
    const leaveElement = event.target.parentNode;
    console.log(leaveElement, event.target.innerHTML);
    const newArr = arr.filter((card) => card.title !== leaveElement.getAttribute('id').slice(3))
    setArr([...newArr]);    
  }
  
  return (
    <section className={styles.LeaveContainerHeader}>
      <h3>
        {type.slice(0, 1).toUpperCase().concat(type.slice(1))}
      </h3>
      <div className={styles.LeaveContainerParent}>
        {arr.map((card: { id: number, title: string, category: number }) => {
          return (
            <div id={`id-${card.title}`} className={styles.LeaveContainer} key={card.id}>
              {card.title}
              <button onClick={handleShift}>1</button>
              <button onClick={handleShift}>2</button>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default LeaveContaianer;  
