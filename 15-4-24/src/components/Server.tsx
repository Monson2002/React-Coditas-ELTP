import styles from './Server.module.scss';

interface ServerType {
  name: string,
  isActive: boolean
}

const Server = (props: ServerType) => {

  return (
    <>
      {/* <div className={styles.server}>
        {props.name}
        {
          props.status === "On"
          ? <div className={styles.statusOn}>Online</div>
          : <div className={styles.statusOff}>Offline</div>
        }
        {
          props.status === "On" 
          ? <button className={styles.btn}>Stop Server</button>
          : <button className={styles.btn}>Start Server</button>
        }
      </div> */}
      <div className={styles.Server}>
        <h2 className={styles.Header}>{props.name}</h2>
        <div>
          <div className={`${styles.Pill} ${props.isActive ? styles.PillOn : styles.PillOff}`}>
            {props.isActive ? "Online" : "Offline"}
          </div>
          <button className={styles.Btn}>
            {props.isActive ? "Stop" : "Start"}
          </button>
        </div>
      </div>
    </>
  )
}

export default Server;