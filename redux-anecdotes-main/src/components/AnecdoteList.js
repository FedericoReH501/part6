import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = ({anecdote})=>{
  const dispatch = useDispatch()
  
  const voteAnecdotes = (anecdote) => {
    dispatch(vote(anecdote))
    dispatch(setNotification(`you voted: ${anecdote.content}`,5))
  }
  return(
      <div >
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => voteAnecdotes(anecdote)}>vote</button>
        </div>
      </div>
  )
}

const Anecdotes=()=>{
  const anecdotes = useSelector(state =>{ 
    if(state.filter === ''){
      return state.anectodes
    }
    return state.anectodes.filter(a=> a.content.toLowerCase().includes(state.filter.toLowerCase()))
    
  })
  
  return(
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
      <Anecdote key={anecdote.id} 
                anecdote={anecdote}/>
      )}
    </div>
  )
}

export default Anecdotes
