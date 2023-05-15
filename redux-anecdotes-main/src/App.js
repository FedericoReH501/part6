
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { useEffect } from 'react'
import anecdotesServices from './services/anecdotes'
import anecdoteReducer,{setAnecdotes} from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdotesServices.getAll().then(anecList=>{
      dispatch(setAnecdotes(anecList))
    })
    }
  , [dispatch])
  
  return (
    <div>
      <Filter/>
      <Notification/>
      <AnecdoteList/>
      <AnecdoteForm/>
    </div>
  )
}

export default App