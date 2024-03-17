import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos'

const getAllTodos = async () =>{
    const {data} = await axios.get(url)
    return data
}

const getTodoByid = async (id) =>{
    const {data} = await axios.get(`${url}/${id}`)
    return data
}
export{getAllTodos, getTodoByid}

