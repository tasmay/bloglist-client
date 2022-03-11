import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/blogs'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (object) => {
    // const object = { content, votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const addLike = async (id) => {
    const response = await axios.post(`${baseUrl}/${id}/like`)
    return response.data
}

export default { getAll, createNew, addLike }