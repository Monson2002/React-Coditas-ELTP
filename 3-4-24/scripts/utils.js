export const getFormData = (formData) => {
  const inputData = new FormData(formData);
  const data = {};
  for (const [key, value] of inputData.entries()) {
    data[key] = value;
  }
  return data;
}

export const createElement = (el) => document.createElement(el);

export const createBtnInTd = (content) => {
  const btn = createElement('button');
  btn.textContent = content;
  return createBtn(btn, content);
}

export const createBtn = (btn, content) => {
  btn.classList.add('btn')
  btn.classList.add('form-btn')
  btn.setAttribute('id', `form-btn-${content.toLowerCase()}`)
  if (content === 'Edit') {
    btn.classList.add('btn-success');
    return btn;
  }
  btn.classList.add('btn-danger');
  return btn;
}

export const createDOMObj = (el, content = 1, userObj) => {
  if (content === 1) {
    const object = createElement(el);
    return object;
  } else if (content === 'action') {
    console.log(userObj);
    const editBtn = createBtnInTd(userObj[0]);
    const deleteBtn = createBtnInTd(userObj[1]);
    const actions = createElement(el);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    actions.classList.add('action-td');
    return actions;
  }
  const object = createElement(el);
  object.innerHTML = userObj[content];
  return object;
}

export const joinWithParent = (elP, elC, noRows) => {
  elP.setAttribute('id', `user-table-row-${noRows}`)
  elC.forEach(element => {
    elP.appendChild(element);
  });
  
  elC[3].firstChild.onclick = () => {
    console.log(`Edit ${elP.getAttribute('id')}`);
  };
  elC[3].lastChild.onclick = () => {
    console.log(`Delete ${elP.getAttribute('id')}`);
    elP.remove();
  };
  return elP;
} 