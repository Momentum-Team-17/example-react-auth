import './App.css'
import Login from './components/Login'
import { useState } from 'react'
import Rabbit from './components/Rabbit'
import useLocalStorageState from 'use-local-storage-state'

function App() {
  const [token, setToken] = useLocalStorageState('rabbitToken', '')
  const [username, setUsername] = useLocalStorageState('rabbitUsername', '')


  const setAuth = (token, username) => {
    setToken(token)
    setUsername(username)
  }

  return (
    <div className="m-8 App">
      {token ? <Rabbit token={token} /> : <Login setAuth={setAuth} />}
    </div>
  )
}

export default App
