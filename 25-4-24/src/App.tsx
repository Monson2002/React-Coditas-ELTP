import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import Dashboard from './components/Dashboard/Dashboard';
import fetchData from './mock-backend/backend';
import { Leave } from './components/LeaveList/LeaveList.types';
// import {leaves} from './data';

function App() {
  
  const [leaves, setLeaves] = useState<any>([]);
  
  useEffect(() => {
    setLeavesFromBackend();
  }, [])

  const setLeavesFromBackend = async () => {
    const data = await fetchData();
    console.log(data.data);
    
    setLeaves(data);
  }
  console.log(leaves.data);
  
  return (
    <div className={styles.App}>
      <Dashboard leaves={leaves.data} setLeaves={setLeaves}/>
    </div>
  )
}

export default App;
