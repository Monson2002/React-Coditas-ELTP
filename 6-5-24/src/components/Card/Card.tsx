import { Component, ReactNode } from "react";
import styles from './Card.module.scss';
import { Data } from "../../App.types";
import { CardProps } from "./Card.types";

class Card extends Component<{ name: string, time: number, toRender: any }, CardProps> {
  constructor(props: { name: string, time: number, toRender: any }) {
    super(props);
    this.state = {
      time: this.props.time,
      intervalId: undefined,
    }
  }

  componentDidMount(): void {
    console.log('did mount');
    const intervalId = setInterval(
      () => this.timer()
      , 1000
    )
    this.setState({ intervalId: intervalId })
  }

  componentWillUnmount(): void {
    console.log("Component Unmount");
    clearInterval(this.state.intervalId);
  }

  timer() {
    if (this.state.time <= 0) {
      console.log(this.state);
      this.props.toRender();
    }
    this.setState({
      time: this.state.time - 1
    })
  }

  render(): ReactNode {
    return (
      <>
        <div className={styles.Card}>
          <h3>{this.props.name.slice(0, 1).toUpperCase().concat(this.props.name.slice(1))}</h3>
          <p>{this.state.time}</p>
        </div>
      </>
    )
  }
}

export default Card;