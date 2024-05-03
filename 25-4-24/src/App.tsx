import { Component, ReactElement } from 'react';
import styles from './App.module.scss';
// import fetchData from './mock-backend/backend';
// import { Leave } from './components/LeaveList/LeaveList.types';
import { leaves } from './mock-backend/data';
import DashboardMain from './components/Dashboard/Dashboard';

const {Dashboard, DashboardClass} = DashboardMain;

function App() {

  // const [leavesArr, setLeavesArr] = useState<any>(leaves);

  return (
    <div className={styles.App}>
      <Dashboard leaves={leaves} />
    </div>
  )
}

class AppClass extends Component<{}, { leavesArr: { id: number, type: string, date: string, desc: string }[] }> {
  constructor(props: { leavesArr: { id: number, type: string, date: string, desc: string }[] }) {
    super(props);
    this.state = {
      leavesArr: leaves
    }
  }

  render(): ReactElement {
    return (
      <div className={styles.App}>
        <DashboardClass leaves={this.state.leavesArr} />
      </div>
    )
  }
}

export default {
  App,
  AppClass
};
