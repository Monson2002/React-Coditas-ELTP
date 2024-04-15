import './App.css'
import FriendMain from './components/Friend'
import ServerMain from './components/Server';
import Profile from './components/Profile';

const {Friend, FriendClass} = FriendMain;
const { Server, ServerClass } = ServerMain;

function App() {
  return (
    <>
      <div>
        This is App Component.
      </div>
      <Friend names={["Mayur","Ruchi","Sanket","Janhavi","Vaishnavi"]}/>
      <FriendClass/>
      <Server name="EC2-M2" status="On"/>
      {/* <ServerClass name="Node" status="On"/> */}
      <Profile 
      name="Monson" 
      surname="Verghese" 
      age={21} 
      isMarried={false} 
      friends={["Mayur","Ruchi","Sanket","Janhavi","Vaishnavi"]} 
      address={{'city': 'Pune', 'country': 'India'}}
      />
    </>
  )
}

export default App
