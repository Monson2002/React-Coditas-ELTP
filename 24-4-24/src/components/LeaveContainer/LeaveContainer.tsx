import { LeaveContaianerProps } from "./LeaveContainer.types";
import styles from './LeaveContainer.module.scss';
import { useEffect, useState } from "react";

const LeaveContaianer = ({ type, data }: LeaveContaianerProps) => {
  const [arr, setArr] = useState(data);
  const handleShift = (event: React.MouseEvent) => {
    event.preventDefault();
    
    const leaveElement = event.target.parentNode;
    
    arr.forEach((card) => {
      if (card.title === leaveElement.getAttribute('id').slice(3)) {
        card.category = event.target.innerHTML;
      }
    })
    // const selectedArrObject = arr.filter((card) => card.title === leaveElement.getAttribute('id').slice(3)) 
    // console.log(selectedArrObject);
    // console.log(leaveElement, event.target.innerHTML);
    // const newParentArraytype = event.target.innerHTML;
    // const newArrayParent = arr.filter((card) => card.category === newParentArraytype)
    // newArrayParent.push(selectedArrObject[0])
    setArr(arr);  
    console.log(arr);
    
    // console.log(newArrayParent);
  }
  const allCardsCategory: string[] = []
  arr.forEach((card) => {
    if (!allCardsCategory.includes(card.category)) {
      allCardsCategory.push(card.category);
    }
  })
  const btnTextArray = allCardsCategory.filter((category) => category !== type);
  
  // console.log(allCardsCategory, btnTextArray);
  
  return (
    <section className={styles.LeaveContainerHeader}>
      <h3>
        {type.slice(0, 1).toUpperCase().concat(type.slice(1))}
      </h3>
      <div className={styles.LeaveContainerParent}>
        {arr.filter((card: { id: number, title: string, category: string }) => {
          return card.category.toLowerCase() === type;
        }).map((card: { id: number, title: string, category: string }) => {
          return (
            <div id={`id-${card.title}`} className={styles.LeaveContainer} key={card.id}>
              {card.title}
              <button onClick={handleShift}>{btnTextArray[0]}</button>
              <button onClick={handleShift}>{btnTextArray[1]}</button>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default LeaveContaianer;  
