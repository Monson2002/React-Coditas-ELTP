import { EmployeeListProps } from "./EmployeeList.types"; 
import styles from './EmployeeList.module.scss'; 
import EmployeeNameTile from "../EmployeeNameTile/EmployeeNameTile";
 
const EmployeeList = ({employeeNameAndIdList, clickHandler, editHandler}: EmployeeListProps) => { 
  return ( 
    <div className={styles.EmployeeList}> 
      {
        employeeNameAndIdList.map((employee) => <EmployeeNameTile key={employee.id} id={employee.id} name={employee.name} clickHandler={clickHandler} editHandler={editHandler}/>)
      }
    </div> 
  ); 
}; 
  
export default EmployeeList;  
