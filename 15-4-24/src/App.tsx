import Server from './components/Server/Server.js';
import styles from './App.module.scss';

function App() {
  return (
    <>
      <div className={styles.App}>
        <Server name="EC2-M2" isActive={true}/> 
        <Server name="EC2-L4" isActive={false}/>  
        <Server name="EC2-C4" isActive={true}/>     
      </div>   
    </>
  )
}

export default App
