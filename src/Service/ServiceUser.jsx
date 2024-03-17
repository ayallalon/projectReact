import axios from "axios";


// user data json
const url = 'https://jsonplaceholder.typicode.com/users';


const getAllUsers = async () => {
    const {data} = await axios.get(url) 
    return data;
}

export{getAllUsers}