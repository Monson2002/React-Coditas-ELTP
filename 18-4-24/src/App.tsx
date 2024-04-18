import styles from './App.module.css'

import Number from './components/Number/Number.tsx';
import { MinusBtn, PlusBtn } from './components/Button/Button.tsx';

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

export default App
