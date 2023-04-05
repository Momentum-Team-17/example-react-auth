import { useState, useRef } from 'react'
import axios from 'axios'
import Error from './Error'
import { useNavigate } from 'react-router-dom'

const Login = ({setAuth}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  // when a user submits the form
  // make a request to the API to login
  // POST http://localhost:8000/auth/token/login
  // send JSON credentials for username and password

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    console.log(username)
    console.log(password)
    axios.post('http://localhost:8000/auth/token/login', {
      username: username,
      password: password
    }).then(res => {
      setAuth(res.data.auth_token, username)
      navigate(-1)
    })
  }

  return (
    <div className="max-w-lg py-8 login-form">
      <h2 className='mb-4 text-2xl font-bold'>Log In</h2>
      <form onFocus={() => setError(null)} onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        <div>
          <label className="block" htmlFor="username"><span className="text-gray-700">username</span></label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            required
            className="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className='block' htmlFor="password"><span className="text-gray-700">password</span></label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            required
            className="block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className='btn'>Submit</button>
        </div>
      </form>
      { error && <Error message={error.message} />}
    </div>
  )
}

export default Login
