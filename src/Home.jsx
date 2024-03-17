import React, { useState } from 'react'
import Users from './Users'
export default function Home() {

    const [users, setUsers] = useState([])
    const [todos, setTodos] = useState([])

    const search = () =>{
        
    }


    return (


        <div className='main' >
            <span>Search</span>
            <input onChange={search()}></input>
            <button>Add</button>

            <div> <Users /></div>


        </div >
    )
}
