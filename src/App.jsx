import './App.css'
import Login from './components/Login'

function App() {
  const loggedIn = false

  return (
    <div className="m-8 App">
      {loggedIn ? <Snacks/> : <Login />}
    </div>
  )
}

export default App
