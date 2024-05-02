import './App.css'
import FriendMain from './components/Friend'
import ServerMain from './components/Server';
import ProfileMain from './components/Profile';
import React, { Component } from 'react';

const { Friend, FriendClass } = FriendMain;
const { Server, ServerClass } = ServerMain;
const {Profile, ProfileClass} = ProfileMain;

function App() {
  return (
    <>
      <div>
        This is App Component.
      </div>
      <Friend names={["Mayur", "Ruchi", "Sanket", "Janhavi", "Vaishnavi"]} />
      <Server name="EC2-M2" status="On" />
      <Profile
        name="Monson"
        surname="Verghese"
        age={21}
        isMarried={false}
        friends={["Mayur", "Ruchi", "Sanket", "Janhavi", "Vaishnavi"]}
        address={{ 'city': 'Pune', 'country': 'India' }}
      />
    </>
  )
}

class AppClass extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <>
        <FriendClass names={["Mayur", "Ruchi", "Sanket", "Janhavi", "Vaishnavi"]} />
        <ProfileClass
          name="Monson"
          surname="Verghese"
          age={21}
          isMarried={false}
          friends={["Mayur", "Ruchi", "Sanket", "Janhavi", "Vaishnavi"]}
          address={{ 'city': 'Pune', 'country': 'India' }}
        />
        <ServerClass name="Node" status="On"/>
      </>
    )
  }
}

export default {
  App,
  AppClass
}
