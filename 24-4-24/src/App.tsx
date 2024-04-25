import styles from './App.module.scss';
import { mandatory, planned, sick } from './categories';
import Header from './components/Header/Header';
import LeaveContaianer from './components/LeaveContainer/LeaveContainer.tsx';
// import { useState } from 'react';

function App() {
  // const [mandatoryStateArr, setMandatoryStateArr] = useState(mandatory);
  // const [plannedStateArr, setPlannedStateArr] = useState(planned);
  // const [sickStateArr, setSickStateArr] = useState(sick);
  // console.log(mandatoryStateArr, plannedStateArr, sickStateArr);
  console.log(mandatory);
  
  return (
    <main className={styles.App}>
      <Header title="Leaves"/>
      <section className={styles.Section}>
        <LeaveContaianer type='mandatory' data={mandatory}/>
        <LeaveContaianer type='sick' data={sick}/>
        <LeaveContaianer type='planned' data={planned}/>
      </section>
    </main>
  )
}

export default App
