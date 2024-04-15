import './App.css'
import FriendMain from './components/Friend'
import ServerMain from './components/Server';

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
      <Server name="Node" status="Running..."/>
      <ServerClass name="Node" status="Running..."/>
    </>
  )
}

export default App
