import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'


const Anecdote = ({anecdote})=>{
  const dispatch = useDispatch()
  
  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteAnecdote(id))
  }
  return(
      <div >
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
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
