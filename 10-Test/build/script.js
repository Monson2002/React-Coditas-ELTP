"use strict";
// import { userForm, saveBtn, tBody } from "./references.ts";
// import { getFormData} from "./utils.ts";
const userForm = document.querySelector('#user-form');
const saveBtn = document.querySelector('#saveBtn');
const resetBtn = document.querySelector('#resetBtn');
const tBody = document.querySelector('#user-table');
const getFormData = (formData) => {
    const inputData = new FormData(formData);
    const data = {};
    for (const [key, value] of inputData.entries()) {
        data[key] = value;
    }
    return data;
};
const createElement = (el) => document.createElement(el);
const createBtn = (content, noRows) => {
    const btn = createElement('button');
    btn.textContent = content;
    btn.classList.add('btn');
    btn.classList.add('form-btn');
    btn.setAttribute('id', `form-btn-${content.toLowerCase()}-${noRows}`);
    if (content === 'Edit') {
        btn.classList.add('btn-success');
        btn.addEventListener('click', () => {
            var _a;
            console.log("Edit ", noRows);
            const row = (_a = btn.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode;
            const name = row === null || row === void 0 ? void 0 : row.querySelector('#name');
            console.log(name, row);
        });
        return btn;
    }
    btn.classList.add('btn-danger');
    btn.addEventListener('click', () => {
        var _a, _b;
        console.log("Delete ", noRows);
        (_b = (_a = btn.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
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
    buttons.appendChild(elC.editBtn);
    buttons.appendChild(elC.deleteBtn);
    elR.appendChild(buttons);
    return elR;
};
let noRows = 0;
saveBtn === null || saveBtn === void 0 ? void 0 : saveBtn.addEventListener('click', (e) => {
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
});
