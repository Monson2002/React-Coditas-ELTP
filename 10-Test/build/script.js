"use strict";
const userForm = document.querySelector('#user-form');
const saveBtn = document.querySelector('#saveBtn');
const resetBtn = document.querySelector('#resetBtn');
const tBody = document.querySelector('#user-table');
const nameInputField = document.querySelector('#name');
const ageInputField = document.querySelector('#age');
const contactInputField = document.querySelector('#contact');
const cityInputField = document.querySelector('#city');
const getFormData = (formData) => {
    const inputData = new FormData(formData);
    const data = {};
    for (const [key, value] of inputData.entries()) {
        data[key] = value;
    }
    return data;
};
const createElement = (el) => document.createElement(el);
const createEditBtn = (noRows, tdName, tdAge, tdContact, tdCity) => {
    const btn = createElement('button');
    btn.textContent = "Edit";
    btn.classList.add('btn');
    btn.classList.add('form-btn');
    btn.setAttribute('id', `form-btn-edit-${noRows}`);
    btn.classList.add('btn-success');
    btn.addEventListener('click', () => {
        console.log("Edit ", noRows);
        const row = document.querySelector(`.row-${noRows}`);
        nameInputField.value = tdName.innerHTML;
        ageInputField.value = tdAge.innerHTML;
        contactInputField.value = tdContact.innerHTML;
        cityInputField.value = tdCity.innerHTML;
        btn.parentElement?.parentElement?.remove();
    });
    return btn;
};
const createDeleteBtn = (noRows) => {
    const btn = createElement('button');
    btn.textContent = "Delete";
    btn.classList.add('btn');
    btn.classList.add('form-btn');
    btn.setAttribute('id', `form-btn-delete-${noRows}`);
    btn.classList.add('btn-danger');
    btn.addEventListener('click', () => {
        console.log("Delete ", noRows);
        btn.parentElement?.parentElement?.remove();
    });
    return btn;
};
const createDOMObj = (el, content, userObj) => {
    const object = createElement(el);
    object.setAttribute('id', content);
    object.innerText = userObj[content].toString();
    return object;
};
const makeRow = (noRows, elC) => {
    const elR = createElement('tr');
    elR.appendChild(elC.name);
    elR.appendChild(elC.age);
    elR.appendChild(elC.contact);
    elR.appendChild(elC.city);
    const buttons = createElement('td');
    elR.appendChild(buttons);
    return elR;
};
const addBtn = (btn, row) => {
    row.lastChild?.appendChild(btn);
};
let noRows = 0;
saveBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    const parsedData = getFormData(userForm);
    const tdName = createDOMObj('td', "name", parsedData);
    const tdAge = createDOMObj('td', "age", parsedData);
    const tdContact = createDOMObj('td', "contact", parsedData);
    const tdCity = createDOMObj('td', "city", parsedData);
    const row = makeRow(noRows, { name: tdName, age: tdAge, contact: tdContact, city: tdCity });
    row.classList.add(`row-${noRows}`);
    const editBtn = createEditBtn(noRows, tdName, tdAge, tdContact, tdCity);
    const deleteBtn = createDeleteBtn(noRows);
    addBtn(editBtn, row);
    addBtn(deleteBtn, row);
    tBody.appendChild(row);
    console.log(row);
    noRows++;
    userForm.reset();
});
