import './App.css'
import Login from './components/Login'
import { useState } from 'react'
import Rabbit from './components/Rabbit'
import Snacks from './components/Snacks'
import useLocalStorageState from 'use-local-storage-state'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [token, setToken] = useLocalStorageState('rabbitToken', '')
  const [username, setUsername] = useLocalStorageState('rabbitUsername', '')


  const setAuth = (token, username) => {
    setToken(token)
    setUsername(username)
  }

  return (
    <div className="m-8 App">
      <Routes>
        <Route path="/" element={<Snacks />} />
        <Route path="/rabbit/:id" element={ token? <Rabbit token={token} /> : <Login setAuth={setAuth} />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
      </Routes>
      {/* "/" -> render Snacks component */}
      {/* "/rabbit/:id" -> render Rabbit detail component */}
      {/* "/login" -> render Login component */}
    </div>
  )
}

export default App
