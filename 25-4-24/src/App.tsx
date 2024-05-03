import { Component, ReactNode } from 'react';
import styles from './App.module.scss';
// import fetchData from './mock-backend/backend';
import { Leave } from './components/LeaveList/LeaveList.types';
import { leaves } from './mock-backend/data';
import fetchData from './mock-backend/backend';
import DashboardMain from './components/Dashboard/Dashboard';

const {Dashboard, DashboardClass} = DashboardMain;

function App() {

  // const [leavesArr, setLeavesArr] = useState<any>(leaves);

  return (
    <div className={styles.App}>
      <DashboardClass leaves={leaves} />
    </div>
  )
}

class AppClass extends Component<{}, { leavesArr: Leave[] }> {
  constructor(props: { leavesArr: Leave[] }) {
    super(props);
    this.state = {
      leavesArr: [],
    }
  }

  async fetch() {
    const data = await fetchData();
    // console.log(data);
    const response = data.data;
    this.setState({
      leavesArr: [...response]
    })    
  }

  componentDidMount() {
    this.fetch();    
  }

  render(): ReactNode {
    
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
