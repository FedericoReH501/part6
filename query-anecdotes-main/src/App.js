import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import {useQuery} from 'react-query'
import {getAll} from './request'

const App = () => {
  
  const result = useQuery('anecdotes',() => getAll))
  
  if(result.isLoading){
    return <div>Loading...</div>
  }
  else if (result.isError){
    return <div>anecdotes service not available due to problem in server</div>
  }

  const anecdotes = result.data

  const handleVote = (anecdote) => {
    console.log('vote')
  }

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
