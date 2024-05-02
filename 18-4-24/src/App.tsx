import styles from './App.module.scss'
import { Component, ReactElement } from 'react';

import NumberMain from './components/Number/Number.tsx';
import { MinusButtonClass, PlusButtonClass, MinusBtn, PlusBtn } from './components/Button/Button.tsx';

const {Number, NumberClass} = NumberMain;

function App() {

  return (
    <>
      <main className={styles.Main}>
        <MinusBtn />
        <Number />
        <PlusBtn />
      </main>
    </>
  )
}

class AppClass extends Component<{},{}> {
  constructor(props: {}) {
    super(props);
  }
  render(): ReactElement {
    return (
      <>
        <main className={styles.Main}>
          <MinusButtonClass />
          <NumberClass />
          <PlusButtonClass />
        </main>
      </>
    )
  }
}

export default {
  App,
  AppClass
}
