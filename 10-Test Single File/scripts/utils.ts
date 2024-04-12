import { nameInputField, ageInputField, contactInputField, cityInputField } from "./references.js";

export type FormEntry = {
  [key: string]: FormDataEntryValue
}

export type UserData = {
  name: HTMLElement,
  age: HTMLElement,
  contact: HTMLElement,
  city: HTMLElement,
}

export const getFormData = (formData: HTMLFormElement) => {
  const inpuFormEntry = new FormData(formData);
  const data: FormEntry = {};
  for (const [key, value] of inpuFormEntry.entries()) {
    data[key] = value;
  }
  return data;
}

export const createElement = (el: string) => document.createElement(el);

export const createEditBtn = (noRows: number, tdName: HTMLElement, tdAge: HTMLElement, tdContact: HTMLElement, tdCity: HTMLElement) => {
  const btn = createElement('button');
  btn.textContent = "Edit";
  btn.classList.add('btn')
  btn.classList.add('form-btn')
  btn.setAttribute('id', `form-btn-edit-${noRows}`)
  btn.classList.add('btn-success');
  btn.addEventListener('click', () => {
    console.log("Edit ", noRows);
    const row = document.querySelector(`.row-${noRows}`);
    nameInputField.value = tdName.innerHTML;
    ageInputField.value = tdAge.innerHTML;
    contactInputField.value = tdContact.innerHTML;
    cityInputField.value = tdCity.innerHTML;      
    btn.parentElement?.parentElement?.remove();
  })
  return btn;
}

export const createDeleteBtn = (noRows: number) => {
  const btn = createElement('button');
  btn.textContent = "Delete";
  btn.classList.add('btn')
  btn.classList.add('form-btn')
  btn.setAttribute('id', `form-btn-delete-${noRows}`)
  btn.classList.add('btn-danger');
  btn.addEventListener('click', () => {
    btn.parentElement?.parentElement?.remove();
  })
  return btn;
}

export const createDOMObj = (el: string, content: string, userObj: FormEntry) => {
  const object = createElement(el);
  object.setAttribute('id', content);
  object.innerText = userObj[content].toString();
  return object;
}

export const makeRow = (elC: UserData) => {
  const elR = createElement('tr');

  elR.appendChild(elC.name);
  elR.appendChild(elC.age);
  elR.appendChild(elC.contact);
  elR.appendChild(elC.city);

  const buttons = createElement('td');
  buttons.classList.add('button-td');
  elR.appendChild(buttons);
  return elR;
}

export const addBtn = (btn: HTMLElement, row: HTMLElement) => {
  row.lastChild?.appendChild(btn);
}