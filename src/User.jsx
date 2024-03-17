import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { getTodoByid } from './Service/ServiceTodos'

export default function User(props) { //key = userData

const [todo, setTodo ] = useState()

useEffect(() => {
    const getTodoByid= async ()=>{
        const data = await getTodoByid(props.userData.id) 
        setTodo(data)
    }
    getTodoByid()
    console.log("success useEEffect user")
},[])


    return (


        <div className="user-container" style={{ border: `1px solid ${todo &&  todo.completed ? 'green' : 'red'}`}} >
            <div className="user-info">
                <label>ID:</label>
                {props.userData.id}

            </div>
            <div className="user-info">
                <label>Name:</label>
                <input type='text' value={props.userData.name} />
            </div>
            <div className="user-info">
                <label>Email:</label>
                <input type='text' value={props.userData.email} />
            </div>
            <div className='user-info'>
                <button>Other Data</button>
                <button>Update</button>
                <button>Delete</button>
            </div>
        </div>
    )
}
