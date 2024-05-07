import { Component } from 'react';
import styles from './App.module.scss';

class AppClass extends Component<{}, {count: number}> {
  
  constructor(props: {}){
    super(props);
    this.state = {
      count: 0,
    }
    // this.handleClick = this.handleClick.bind(this)
    console.log(this);
  }
  
  handleClick() {
    console.log(this);
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  render() {
    return (
      <>
        {console.log("Render method", this)}
        <div className={styles.App}>
          <button onClick={this.handleClick}>{this.state.count}</button>
        </div>
      </>
    )
  }
}

export default AppClass;