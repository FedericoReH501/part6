import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import axios from 'axios'
import {useQuery} from 'react-query'
import {getAll} from './request'

const App = () => {
  const baseUrl = 'http://localhost:3001/anecdotes'
  const result = useQuery('anecdotes',() => axios.get(baseUrl).then(res => res.data))
  
  if(result.isLoading){
    return <div>Loading...</div>
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
