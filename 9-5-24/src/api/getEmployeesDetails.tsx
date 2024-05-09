import axios from "axios"
import * as data from './employeeDetails.json';

export const getEmployeesDetails = async () => {
  // const { data } = await axios.get('https://579b-47-247-159-210.ngrok-free.app/users', {
  //     headers: {
  //       "ngrok-skip-browser-warning": "skip-browser-warning",
  //     },
  //   }
  // )

  return data.default;
}