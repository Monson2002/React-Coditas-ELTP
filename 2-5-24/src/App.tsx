import './App.css'
import { Component } from 'react'

class AppClass extends Component<{}, {count: number}> {
  
  constructor(props: {}){
    super(props);
    this.state = {
      count: 0,
    }
    // this.handleClick = this.handleClick.bind(this)
    console.log(this);
  }
  
  handleClick(){
    console.log(this);
    // this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <>
        {console.log("Render method", this)}
        <button onClick={this.handleClick}>{this.state.count}</button>
      </>
    )
  }
}

export default AppClass;