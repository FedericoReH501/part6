import { createSlice } from "@reduxjs/toolkit"

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const compareNumber= (a,b)=>{
  return b.votes-a.votes
}

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

/*const anectodesReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_NEW':
      return [...state,action.payload]
    
    case 'VOTE':{
      return state.map(a=> a.id === action.payload.id 
        ? {...a,votes: a.votes + 1}
        : a
        ).sort(compareNumber)
    }
    default:
      return state.sort(compareNumber)
  }
}

export const voteAnecdote=(id)=>{
 return {
  type:'VOTE',
  payload: {id:id}
}
}

export const createAnecdote = (content)=>{
  return {
    type:'ADD_NEW',
    payload:{
    content: content,
    id: getId(),
    votes: 0
  }}
}*/
const anecdoteSlice = createSlice({
  name:'anecdotes',
  initialState,
  reducers:{
    createAnecdote(state,action){
      const content = action.payload
      const newAnecdote = {
        content: content,
        id: getId(),
        votes: 0
      }
      state.push(newAnecdote)
    },
    voteAnecdote(state,action){
      const id = action.payload
      return state.map(a=> a.id === id 
        ? {...a,votes: a.votes + 1}
        : a
        ).sort(compareNumber)
    }
  }
})

export const {createAnecdote,voteAnecdote}= anecdoteSlice.actions
export default anecdoteSlice.reducer