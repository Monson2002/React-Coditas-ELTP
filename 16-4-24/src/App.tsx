import styles from './App.module.scss'

function App() {
  return (
    <>
      <div className={`${styles.centered} ${styles.container}`}>
        <div>
          <h1>Hello, World</h1>
        </div>
        <div className={`${styles.items}`}>
          <span className={`${styles.SpanElement}`}>
            Some Text
          </span>
        </div>
        <div>
          <button className={`${styles.primary}`}>Button1</button>
          <button className={`${styles.secondary}`}>Button2</button>
        </div>
      </div>
    </>
  )
}

export default App