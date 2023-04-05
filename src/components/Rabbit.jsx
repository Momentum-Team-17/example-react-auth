import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const Rabbit = ({ token }) => {
  const { id } = useParams()
  const [foods, setFoods] = useState([])
  const [rabbitName, setRabbitName] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/rabbit/${id}/detail`, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((res) => {
        setFoods(res.data.foods)
        setRabbitName(res.data.name)
      })
      .catch((err) => setError({message: err.response.data.detail, status: err.response.status}))}
  , [])

  return (
    <div className="rabbit-detail">
      <h1 className="mb-6 text-3xl font-bold">Rabbit Detail</h1>
      {rabbitName && (
        <>
          <p>This is a story about a rabbit named {rabbitName}.</p>
          <p>{rabbitName} liked to eat:</p>
          <ul>
            {foods.map((food) => (
              <li>{food.name}</li>
            ))}
          </ul>
          <Link to="/" className="underline">Go back to all rabbits</Link>
        </>)}
        { error && (
          <div className='p-8 text-lg text-white bg-red-400 error'>{error.status} {error.message}</div>
        )}
    </div>
  )
}

export default Rabbit
