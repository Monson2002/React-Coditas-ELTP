export const getFormData = (formData) => {
  const inputData = new FormData(formData);
  const data = {}
  console.log(inputData.entries());
  for (const [key, value] of inputData.entries()) {
    data[key] = value;
  }
  return data;
}