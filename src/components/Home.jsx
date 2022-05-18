import React ,{ useState , useEffect} from 'react'
import axios from 'axios'

const Home = () => {

    const [users, setUsers] = useState([])

    useEffect(()=>{
        loadUsers()
    },[])

    const loadUsers = async () => {
        const response = await axios.get('http://localhost:3001/user')
        console.log(response,'result');
        setUsers(response.data)
    }

  

  return (
    <div>
        Home
    </div>
  )
}

export default Home