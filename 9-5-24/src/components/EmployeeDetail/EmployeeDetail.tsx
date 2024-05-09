import { EmployeeDetailProps } from "./EmployeeDetail.types"; 
import styles from './EmployeeDetail.module.scss'; 
 
const EmployeeDetail = ({data, currentId, deleteBtn}: EmployeeDetailProps) => {
  
  const foundEmployee = data.find((employee) => employee.id === currentId)!;
  const DeleteBtn = deleteBtn;

  return ( 
    <div className={styles.EmployeeDetail}> 
      <div className={styles.TextInfo}>
        <div>Name: {foundEmployee?.name.slice(0, 1).toUpperCase().concat(foundEmployee?.name.slice(1))}</div>
        <div>Email: {foundEmployee?.email}</div>
        <div>Address: {foundEmployee?.address.street}, {foundEmployee?.address.suite}, {foundEmployee?.address.city}, {foundEmployee?.address.zipcode}</div>
      </div>
      <div className={styles.Multimedia}>
        <div>Image: {foundEmployee?.img}</div>
        <DeleteBtn/>
      </div>
    </div> 
  ); 
}; 
  
export default EmployeeDetail;  
