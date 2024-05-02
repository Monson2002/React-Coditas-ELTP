import { Component } from "react";

const Profile = (props: any) => {
  return (
    <>
      <p>{props.name}</p>
      <p>{props.surname}</p>
      <p>{props.age}</p>
      <p>{props.isMarried ? 'true' : 'false'}</p>
      {
        props.friends.map((friend: string) => {
          return <p>{friend}</p>
        })
      }
      <p>{props.address.city}, {props.address.country}</p>
    </>
  )
}

class ProfileClass extends Component<{name: string, surname: string, age: number, isMarried: boolean, friends: string[], address: {city: string, country: string}}, {}> {
  constructor(props: { name: string, surname: string, age: number, isMarried: boolean, friends: string[], address: {city: string, country: string} }) {
    super(props);
  }

  render() {
    return (
      <>
        <p>{this.props.name}</p>
        <p>{this.props.surname}</p>
        <p>{this.props.age}</p>
        <p>{this.props.isMarried ? 'true' : 'false'}</p>
        {
          this.props.friends.map((friend: string, index: number) => {
            return <p key={index}>{friend}</p>
          })
        }
        <p>{this.props.address.city}, {this.props.address.country}</p>
      </>
    )
  }
}

export default {
  Profile,
  ProfileClass
};