import axios from "axios";
const baseUrl = 'http://localhost:3001/anecdotes/'

export const getAll = ()=> 
  axios.get(baseUrl).then( response => response.data)

export const createNew = newAnecdote => 
  axios.post( baseUrl, newAnecdote).then(res => res.data)

export const updateOne = newAnecdote =>
  axios.put(`${baseUrl}${newAnecdote.id}`,newAnecdote,{new:true})
    .then(res=>res.data)


