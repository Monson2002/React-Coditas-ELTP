import { Component, ReactNode } from "react"

const Server = (props: any) => {
  return (
    <>
      <div>
        {props.name} is {props.status}
      </div>
    </>
  )
}

class ServerClass extends Component<any> {
  constructor(params: any) {
    super(params);
  }
  render(): ReactNode {
    return (
      <>
        <div>
          {this.props.name} is {this.props.status} in class based Component.
        </div>
      </>
    )
  }
}

export default {
  Server,
  ServerClass
}