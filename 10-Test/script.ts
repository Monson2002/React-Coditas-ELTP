// import { userForm, saveBtn, tBody } from "./references.ts";
// import { getFormData} from "./utils.ts";

const userForm = document.querySelector('#user-form') as HTMLFormElement;
const saveBtn = document.querySelector('#saveBtn') as HTMLButtonElement;
const resetBtn = document.querySelector('#resetBtn') as HTMLButtonElement;
const tBody = document.querySelector('#user-table') as HTMLTableElement;

type TData = {
  [key: string]: FormDataEntryValue
}

type UserData = {
  name: HTMLElement,
  age: HTMLElement,
  contact: HTMLElement,
  city: HTMLElement,
  editBtn: HTMLElement,
  deleteBtn: HTMLElement
}

const getFormData = (formData: HTMLFormElement) => {
  const inputData = new FormData(formData);
  const data: TData = {};
  for (const [key, value] of inputData.entries()) {
    data[key] = value;
  }
  return data;
}

const createElement = (el: string) => document.createElement(el);

const createBtn = (content: string, noRows: number) => {
  const btn = createElement('button');
  btn.textContent = content;
  btn.classList.add('btn')
  btn.classList.add('form-btn')
  btn.setAttribute('id', `form-btn-${content.toLowerCase()}-${noRows}`)
  if (content === 'Edit') {
    btn.classList.add('btn-success');
    btn.addEventListener('click', () => {
      console.log("Edit ", noRows);
      const row = btn.parentNode?.parentNode;
      const name = row?.querySelector('#name');
      const age = row?.querySelector('#age');
      const contact = row?.querySelector('#contact');
      const city = row?.querySelector('#city');
      console.log(name, row);
      let nameInput =
        prompt("Enter the updated name:",
          name?.innerHTML);
      let ageInput =
        prompt("Enter the updated email:",
          age?.innerHTML);
      let contactInput =
        prompt("Enter the updated mobile details:",
          contact?.innerHTML
        );
      let cityInput =
        prompt("Enter the updated address:",
          city?.innerHTML
        );

      // Update the cell contents with the new values 
      name.innerHTML = nameInput?;
      age?.innerHTML = emailInput;
      contact?.innerHTML = numberInput;
      city?.innerHTML = addressInput;
    })
    return btn;
  }
  btn.classList.add('btn-danger');
  btn.addEventListener('click', () => {
    console.log("Delete ", noRows);
    btn.parentElement?.parentElement?.remove();
  })
  return btn;
}

const createDOMObj = (el: string, content: string, userObj: TData) => {
  const object = createElement(el);
  object.setAttribute('id', content);
  object.innerText = userObj[content].toString();
  return object;
}

const makeRow = (noRows: number, elC: UserData) => {
  const elR = createElement('tr');

  elR.appendChild(elC.name);
  elR.appendChild(elC.age);
  elR.appendChild(elC.contact);
  elR.appendChild(elC.city);

  const buttons = createElement('td');
  buttons.appendChild(elC.editBtn);
  buttons.appendChild(elC.deleteBtn);

  elR.appendChild(buttons);
  return elR;
}

let noRows = 0;

saveBtn?.addEventListener('click', (e) => {
  e.preventDefault();

  const parsedData = getFormData(userForm);

  const tRow = createElement('tr');
  const tdName = createDOMObj('td', "name", parsedData);
  const tdAge = createDOMObj('td', "age", parsedData);
  const tdContact = createDOMObj('td', "contact", parsedData);
  const tdCity = createDOMObj('td', "city", parsedData);

  const editBtn = createBtn('Edit', noRows);
  const deleteBtn = createBtn('Delete', noRows);

  const row = makeRow(noRows, { name: tdName, age: tdAge, contact: tdContact, city: tdCity, editBtn: editBtn, deleteBtn: deleteBtn });
  row.classList.add(`row-${noRows}`);
  tBody.appendChild(row);
  console.log(row);

  noRows++;
  // userForm.reset();
})