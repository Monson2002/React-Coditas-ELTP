import styles from './Server.module.scss';

interface ServerType {
  name: string,
  isActive: boolean
}

const Server = (props: ServerType) => {
  const pillStyleObject = {
    pillStyle: props.isActive ? styles.PillOn : styles.PillOff,
    pillText: props.isActive ? "Online" : "Offline",
    btnStyle: styles.Btn,
    btnText: props.isActive ? "Stop" : "Start"
  }
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
          <div className={pillStyleObject.pillStyle}>
            {pillStyleObject.pillText}
          </div>
          <button className={pillStyleObject.btnStyle}>
            {pillStyleObject.btnText}
          </button>
        </div>
      </div>
    </>
  )
}

export default Server;