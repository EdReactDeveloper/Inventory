import axios from 'axios'; 

const getUser = async() => {
  const result = await axios.get('/api/user/')
  return result.data
}

export default getUser; 