import { Component, ReactNode } from 'react';
import './App.module.css'
import CounterMain from "./components/Counter/Counter.tsx";

const {Counter, CounterClass} = CounterMain;

function App() {
  return (
    <>
      <Counter/>
    </>
  )
}

class AppClass extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render(): ReactNode {
    return <CounterClass/>
  }
}

export default {
  App,
  AppClass
}
