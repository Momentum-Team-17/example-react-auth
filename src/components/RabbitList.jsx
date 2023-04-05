import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const RabbitList = () => {
  const [rabbits, setRabbits] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/rabbits').then(res => [
      setRabbits(res.data.rabbits)
    ])
  }, [])

  return (
    <section className="flex flex-wrap rabbits">
      <div className="grid grid-cols-4 gap-4 my-8">
        {rabbits.map((rabbitObj) => (
          <div key={rabbitObj.pk} className="p-4 text-center bg-teal-500 rounded-lg shadow-lg min-w-min">
            <Link to={`rabbit/${rabbitObj.pk}`}>{rabbitObj.name}</Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RabbitList
