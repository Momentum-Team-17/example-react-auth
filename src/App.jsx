import './App.css'
import Login from './components/Login'
import { useState } from 'react'
import Rabbit from './components/Rabbit'
import RabbitList from './components/RabbitList'
import NavBar from './components/NavBar'
import NotFound from './components/NotFound'
import useLocalStorageState from 'use-local-storage-state'
import { Route, Routes, useNavigate } from 'react-router-dom'
import axios from 'axios'

function App() {
  const [token, setToken] = useLocalStorageState('rabbitToken', '')
  const [username, setUsername] = useLocalStorageState('rabbitUsername', '')
  const navigate = useNavigate()

  const setAuth = (token, username) => {
    setToken(token)
    setUsername(username)
  }

  const handleLogout = () => {
    axios
      .post(
        'http://localhost:8000/auth/token/logout',
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then(() => {
        setAuth('', null)
        navigate("/")
      })
  }

  return (
    <div className="m-8 App">
      <header>
        <nav>
          <NavBar
            token={token}
            username={username}
            handleLogout={handleLogout}
          />
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<RabbitList />} />
        <Route
          path="/rabbit/:id"
          element={
            token ? <Rabbit token={token} /> : <Login setAuth={setAuth} />
          }
        />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App
