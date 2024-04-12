import { nameInputField, ageInputField, contactInputField, cityInputField } from "./references.js";
export const getFormData = (formData) => {
    const inpuFormEntry = new FormData(formData);
    const data = {};
    for (const [key, value] of inpuFormEntry.entries()) {
        data[key] = value;
    }
    return data;
};
export const createElement = (el) => document.createElement(el);
export const createEditBtn = (noRows, tdName, tdAge, tdContact, tdCity) => {
    const btn = createElement('button');
    btn.textContent = "Edit";
    btn.classList.add('btn');
    btn.classList.add('form-btn');
    btn.setAttribute('id', `form-btn-edit-${noRows}`);
    btn.classList.add('btn-success');
    btn.addEventListener('click', () => {
        var _a, _b;
        console.log("Edit ", noRows);
        const row = document.querySelector(`.row-${noRows}`);
        nameInputField.value = tdName.innerHTML;
        ageInputField.value = tdAge.innerHTML;
        contactInputField.value = tdContact.innerHTML;
        cityInputField.value = tdCity.innerHTML;
        (_b = (_a = btn.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
    });
    return btn;
};
export const createDeleteBtn = (noRows) => {
    const btn = createElement('button');
    btn.textContent = "Delete";
    btn.classList.add('btn');
    btn.classList.add('form-btn');
    btn.setAttribute('id', `form-btn-delete-${noRows}`);
    btn.classList.add('btn-danger');
    btn.addEventListener('click', () => {
        var _a, _b;
        (_b = (_a = btn.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
    });
    return btn;
};
export const createDOMObj = (el, content, userObj) => {
    const object = createElement(el);
    object.setAttribute('id', content);
    object.innerText = userObj[content].toString();
    return object;
};
export const makeRow = (elC) => {
    const elR = createElement('tr');
    elR.appendChild(elC.name);
    elR.appendChild(elC.age);
    elR.appendChild(elC.contact);
    elR.appendChild(elC.city);
    const buttons = createElement('td');
    buttons.classList.add('button-td');
    elR.appendChild(buttons);
    return elR;
};
export const addBtn = (btn, row) => {
    var _a;
    (_a = row.lastChild) === null || _a === void 0 ? void 0 : _a.appendChild(btn);
};
