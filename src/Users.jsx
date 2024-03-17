import React, { useEffect, useState } from 'react'
import './App.css'
import { getAllUsers } from './Service/ServiceUser'
import User from './User'
import axios from 'axios'

export default function Users() {

  const [users, setUsers] = useState([])
  const [todos, setTodos] = useState([])
  const [params, setParams] = useState("")

  const fetchUsers = async () => {
    const data = await getAllUsers()
    setUsers(data);
  }

  const getUserByParams = () => {
    debugger;
    const filteredUsers = users.filter(user => {
     return  user.name.toLowerCase().includes(params.toLowerCase()) ||
      user.email.toLowerCase().includes(params.toLowerCase())
    })
    console.log(filteredUsers)
    return filteredUsers
  }


  const search =  (value) => {
    if(value!==""){
      setParams(value)
    console.log(params)
    const data = getUserByParams()
    setUsers(data)
    }
    else
    {
      fetchUsers()
    }

  }
 
  //will run only on component load 
  useEffect(() => {
    
    fetchUsers()
    console.log("success useEEffect users")
  }, [])


  return (

    <div className='main' >
      <span>Search</span>
      <input onChange={e => search(e.target.value)}></input>
      <button>Add</button>

      {
        users.map((user) => {
          return <User className='user' key={user.id} userData={user} />
        })
      }

    </div>


  )
}
