import { leaves } from "./data";
import { Leave } from "../components/LeaveList/LeaveList.types";

const fetchData = (): Promise<{data: Leave[], error: any}> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (leaves) resolve({data: leaves, error: null});
      reject({data: null, error: {message: 'An error'}})
    }, 1000);
  })
}

export default fetchData;