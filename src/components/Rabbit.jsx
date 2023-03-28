import axios from "axios"
import { useState, useEffect } from "react"

const Rabbit = ({token}) => {

  useEffect(() => {
    axios.get(`http://localhost:8000/api/rabbit/2/detail`,
    {
      headers: { Authorization: `Token ${token}`}
    }
    ).then(res => console.log(res.data))
  })

  return(<h1>Rabbit Detail</h1>)
}

export default Rabbit
