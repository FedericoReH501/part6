import { createSlice } from "@reduxjs/toolkit"
import anecdotesServices from "../services/anecdotes"
const compareNumber= (a,b)=>{
  return b.votes-a.votes
}

const anecdoteSlice = createSlice({
  name:'anecdotes',
  initialState:[],
  reducers:{
    voteAnecdote(state,action){
      const id = action.payload
      return state.map(a=> a.id === id 
        ? {...a,votes: a.votes + 1}
        : a
        ).sort(compareNumber)
    },
    appendAnecdote(state,action){
      state.push(action.payload)
    },
    setAnecdotes(state,action){
      return action.payload
    }
  }
})

export const {voteAnecdote,appendAnecdote,setAnecdotes}= anecdoteSlice.actions

export const initializeStore = ()=>{
  return async dispatch=> {
    const anecList = await anecdotesServices.getAll()
    dispatch(setAnecdotes(anecList))
  }
}

export const createAnecdote = (content)=>{
  return async dispatch =>{
    const newAnecdotes = await anecdotesServices.createNew(content)
    dispatch(appendAnecdote(newAnecdotes))
  }
}

export default anecdoteSlice.reducer