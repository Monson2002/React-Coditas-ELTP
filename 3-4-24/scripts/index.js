import { userForm, saveBtn, tBody } from "./references.js";
import { getFormData, createDOMObj, joinWithParent } from "./utils.js";

let noRows = 0;

saveBtn.addEventListener('click', (e) => {
  e.preventDefault();

  console.log(userForm);
  // if (userForm.getAttribute()) {
    
  // }

  const parsedData = getFormData(userForm);

  const tRow = createDOMObj('tr');
  const tdName = createDOMObj('td', "name", parsedData);
  const tdAge = createDOMObj('td', "age", parsedData);
  const tdContact = createDOMObj('td', "contact", parsedData);
  const tdAction = createDOMObj('td', "action", ['Edit', 'Delete']);
  const row = joinWithParent(tRow, [tdName, tdAge, tdContact, tdAction], noRows++);
  
  tBody.appendChild(row);
  
  // addFunctionality(row);

  userForm.reset();
})

// function addFunctionality(row) {
//   const el = document.querySelector(`#user-table-row-${noRows}`)
//   console.log(el, row);
// }