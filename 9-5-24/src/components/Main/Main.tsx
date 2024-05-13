import { MainProps, EmployeeNameAndId, EmployeeProps } from "./Main.types";
import styles from './Main.module.scss';
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';

import EmployeeList from "../EmployeeList/EmployeeList";
import EmployeeDetail from "../EmployeeDetail/EmployeeDetail";
import NavigationFooter from "../NavigationFooter/NavigationFooter";
import { getEmployeesNameAndId } from "../../api/getEmployeesNameAndId";
import { getEmployeesDetails } from "../../api/getEmployeesDetails";

const Main = ({}: MainProps) => {

  const [employeeNameAndId, setemployeeNameAndId] = useState<EmployeeNameAndId[]>([])
  const [employees, setEmployees] = useState<EmployeeProps[]>([]);
  const [currentId, setCurrentId] = useState<number>(1);
  const [editEmployeeId, setEditEmployeeId] = useState<number | null>(null);
  const [modal, setModal] = useState<null | EmployeeProps>(null);
 
  const PreviousBtn = () => <Button size='small' variant="outlined" color="success" onClick={() => handlePrevious()}>Previous</Button>
  const NextBtn = () => <Button size='small' variant="outlined" color="success" onClick={() => handleNext()}>Next</Button>
  const DeleteBtn = () => <Button size='small' variant="outlined" color="error" onClick={() => handleDelete()}>Delete</Button>
  const ClickHandler = ({id}: {id: number}) => <Button size='small' variant="outlined" color="secondary" onClick={() => handleClick({id})}>Select</Button>
  const EditHandler = ({id}: {id: number}) => <Button size='small' variant="outlined" color="primary" onClick={() => handleEdit({id})}>Edit</Button>
  const SaveHandler = ({id, editedDetails}: {id: number, editedDetails: any}) => <Button size='small' variant="outlined" color="primary" onClick={() => handleSave({id, editedDetails})}>Save</Button>

  const handlePrevious = () => {
    if (currentId === employees[0].id) {
      alert("PrevBtn Disabled");
    } else {
      const newId = currentId-1;
      setCurrentId(newId);
    }
  }

  const handleNext = () => {
    if (currentId === employees[employees.length-1].id) {
      alert("NextBtn Disabled");
    } else {
      const newId = currentId+1; 
      setCurrentId(newId);
    }
  }

  const handleDelete = () => {
    console.log(`Delete ${currentId}`);
  }

  const handleClick = ({id}: {id: number}) => {
    setCurrentId(id);
  }

  const handleEdit = ({id}: {id: number}) => {
    const employeeToChange = employees.find((employee: EmployeeProps) => employee.id === id)!;
    setEditEmployeeId(id);
    popupModal(employeeToChange);
    console.log(employeeToChange);
  }

  const handleSave = ({id, editedDetails}: {id: number, editedDetails: EmployeeProps}) => {
    console.log(`Set id=${id}, editedDetails=`, editedDetails);
    setModal(null);
  }

  const popupModal = (employeeToChange: EmployeeProps) => {
    setModal(employeeToChange);
  }

  const getEmployeesNameAndIdFromApi = async () => {
    const data = await getEmployeesNameAndId();
    setemployeeNameAndId(data);
  }

  const getEmployeesDetailsFromApi = async () => {
    const data = await getEmployeesDetails();
    setEmployees(data);    
  }

  useEffect(() => {
    getEmployeesNameAndIdFromApi();
  }, [])

  useEffect(() => {
    getEmployeesDetailsFromApi();
  })

  return (
    <div className={styles.Main}>
      <EmployeeList 
        employeeNameAndIdList={employeeNameAndId} 
        clickHandler={ClickHandler}
        editHandler={EditHandler}
      />
      <div className={styles.Employee}>
        <EmployeeDetail
          data={employees}
          currentId={currentId}
          deleteBtn={DeleteBtn} 
          modal={modal}
          saveEmployee={SaveHandler}
          employeeToEdit={editEmployeeId}  
        />
        <NavigationFooter
          previousBtn={PreviousBtn}
          nextBtn={NextBtn}
        />
      </div>
    </div>
  );
};

export default Main;  
