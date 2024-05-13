import { ModalProps } from "./Modal.types";
import styles from './Modal.module.scss';
import { useEffect, useState } from "react";
import { EmployeeProps } from "../Main/Main.types";

const Modal = ({ data, details, saveBtn }: ModalProps) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [suite, setSuite] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');

  const editEmployee = data.find((employee: EmployeeProps) => employee.id === details.id)!;

  const setDetails = () => {
    setName(editEmployee.name);
    setEmail(editEmployee.email);
    setStreet(editEmployee.address.street);
    setSuite(editEmployee.address.suite);
    setZipCode(editEmployee.address.zipcode);
    setCity(editEmployee.address.city);
  }

  useEffect(() => {
    setDetails();
  }, [])

  const SaveBtn = saveBtn;

  return (
    <div className={styles.Parent}>
      <div className={styles.Modal}>
      <form action="" className={styles.Form}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
            />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
            />
        </div>
        <div>
          <label htmlFor="street">Street</label>
          <input
            type="text"
            name="street"
            value={street}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStreet(e.target.value)} 
            />
        </div>
        <div>
          <label htmlFor="suite">Suite</label>
          <input
            type="text"
            name="suite"
            value={suite}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSuite(e.target.value)} 
            />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)} 
            />
        </div>
        <div>
          <label htmlFor="zipcode">Zip Code</label>
          <input
            type="text"
            name="zipcode"
            value={zipCode}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setZipCode(e.target.value)} 
            />
        </div>
        <SaveBtn id={details.id} editedDetails={{name, email, street, suite, zipCode, city}}/>
      </form>
    </div>
    </div>
  );
};

export default Modal;  
