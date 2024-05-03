import { leaves } from "./data";
import { Leave } from "../components/LeaveList/LeaveList.types";

const fetchData = (): Promise<{data: Leave[]}> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (leaves) resolve({data: leaves});
      reject({data: 'An error'})
    }, 1000);
  })
}

export default fetchData;