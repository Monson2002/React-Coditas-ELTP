import axios from "axios"
import * as data from './employeeNameAndId.json'

export const getEmployeesNameAndId = async () => {
  // const { data } = await axios.get('https://579b-47-247-159-210.ngrok-free.app/user/name',{
  //     headers: {
  //       "ngrok-skip-browser-warning": "skip-browser-warning",
  //     },
  //   }
  // )

  return data.default;
}