import { userForm, saveBtn } from "./references.js";
import { getFormData } from "./utils.js";

saveBtn.addEventListener('click', (e) => {
  console.log(e);
  e.preventDefault();

  const parsedData = getFormData(userForm);
  console.log(parsedData);
})