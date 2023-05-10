import React, { useState } from 'react'
import './App.css'
import NavBar from './widgets/layouts/NavBar'
import DashboardMain from './layouts/DashboardMain'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  const [login, setlogin] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  return (
    <div className="App">
      {(() => {
          if(login === false){
            return(
              <div>
                {createAccount? <Signup setCreateAccount={ setCreateAccount }/> : <Login setlog={setlogin} setCreateAccount={setCreateAccount} /> }
              </div>
            )
          }
          else if(login === true){
            return(
              <div>
                <DashboardMain/>
              </div>
            )
          }
        })()}
    </div>
  )
}

export default App
