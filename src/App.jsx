import './App.css'
import Login from './components/Login'
import { useState } from 'react'
import Rabbit from './components/Rabbit'

function App() {
  const [token, setToken] = useState(null)
  const [username, setUsername] = useState('')
  const loggedIn = token

  const setAuth = (token, username) => {
    setToken(token)
    setUsername(username)
  }

  return (
    <div className="m-8 App">
      {loggedIn ? <Rabbit token={token} /> : <Login setAuth={setAuth} />}
    </div>
  )
}

export default App
