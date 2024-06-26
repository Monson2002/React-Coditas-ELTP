import { Component, ReactNode } from "react";
import styles from './App.module.scss';
import { Data } from "./App.types";
import { CardProps } from "./components/Card/Card.types";

import Card from "./components/Card/Card";

const counters = [
  {name: 'Burger', time: 5, isComplete: false},
  {name: 'Pizza', time: 10, isComplete: false},
  {name: 'Sandwitch', time: 15, isComplete: false},
]

// const data = [{
//   name: 'Burger',
//   time: 5,
//   isComplete: false,
// }]

class App extends Component<{}, {data: Data[]}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: counters, 
    }
  }
  
  onComplete(item: Data) {
    item.isComplete = true
    this.setState({ 
      data: [...counters]
    })
  } 

  renderTimers() {
    return (
      this.state.data.map((item, index) => {
        return !item.isComplete && <Card key={index} name={item.name} time={item.time} toRender={() => this.onComplete(item)}/>
      })
    )
  }
  
  render(): ReactNode { 
    
    return (
      <div className={styles.App}>
        {this.renderTimers()}
      </div>
    )
  }
}

export default App;
