import { EmployeeNameTileProps } from "./EmployeeNameTile.types";
import styles from './EmployeeNameTile.module.scss';

const EmployeeNameTile = ({ name, id, clickHandler, editHandler }: EmployeeNameTileProps) => {

  const ClickHandler = clickHandler;
  const EditHandler = editHandler;

  return (
    <>
      <div className={styles.EmployeeNameTile}>
        <div className={styles.EmployeeName}>{name.slice(0, 1).toUpperCase().concat(name.slice(1))}</div>
        <ClickHandler id={id}/>
        <EditHandler id={id}/>
      </div>
    </>
  );
};

export default EmployeeNameTile;  
