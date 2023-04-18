import React from 'react'
import './App.css'
import NavBar from './widgets/layouts/NavBar'
import DashboardMain from './layouts/DashboardMain'

function App() {
  return (
    <div className="App">
      <DashboardMain/>
      <h1 className="text-3xl underline">
        Hello world!
      </h1>
    </div>
  )
}

export default App
