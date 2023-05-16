import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async()=>{
  const response = await axios.get(baseUrl)
  return response.data
}
const createNew = async(content)=>{
  const newAnecdote = {
    content,
    votes: 0
  }
  const response = await axios.post(baseUrl,newAnecdote)
  return response.data
}

const updateOne = async(newAnec)=>{
  const voted = {...newAnec, votes: newAnec.votes+1}
  const response = await axios.put(`${baseUrl}/${voted.id}`,voted,{new:true})
  return response.data
}

export default {getAll,createNew,updateOne}