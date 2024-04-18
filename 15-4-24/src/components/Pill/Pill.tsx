import styles from './Pill.module.scss'

const Pill = (props: {name: string, isActive: boolean}) => {
  const pillStyle = props.isActive ? styles.PillOn : styles.PillOff;
  return (
    <div className={pillStyle}>
      {props.name}
    </div>
  )
}

export default Pill;