import { Component, useState } from "react";
import styles from './App.module.css';
import CounterMain from "./components/Counter/Counter.tsx";

const {Counter, CounterClass} = CounterMain;

function App() {
  const [countArr, setCountArr] = useState([1,1,2]);

  const handleIncrement = (index: number, value: number) => {
    const newArr = [...countArr]
    newArr[index] += value;
    setCountArr(newArr);
  }

  const handleSquare = (index: number) => {
    const newArr = [...countArr]
    newArr[index] = newArr[index]*newArr[index];
    setCountArr(newArr);
  }

  return (
    <div className={styles.App}>
      <Counter count={countArr[0]} increment={() => handleIncrement(0, 5)}/>
      <Counter count={countArr[1]} increment={() => handleIncrement(1, 10)}/>
      <Counter count={countArr[2]} increment={() => handleSquare(2)}/>
    </div>
  )
}

class AppClass extends Component<{},{countArr: number[]}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      countArr: [1,1,2]
    }
  }

  handleIncrement(index: number, value: number) {
    const newArr = [...this.state.countArr]
    newArr[index] += value;
    this.setState({countArr: newArr});
  }

  handleSquare(index: number) {
    const newArr = [...this.state.countArr]
    newArr[index] = newArr[index]*newArr[index];
    this.setState({countArr: newArr});
  }

  render() {
    return (
      <div className={styles.App}>
        <CounterClass count={this.state.countArr[0]} increment={() => this.handleIncrement(0, 5)}/>
        <CounterClass count={this.state.countArr[1]} increment={() => this.handleIncrement(1, 10)}/>
        <CounterClass count={this.state.countArr[2]} increment={() => this.handleSquare(2)}/>
      </div>
    )
  }
}

export default {
  App,
  AppClass
}
