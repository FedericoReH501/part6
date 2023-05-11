import { filterChange } from "../reducers/filterReduced"
import { useDispatch } from "react-redux"

const Filter = ()=>{
  const dispatch = useDispatch()

  return(
  <div>
<h2>Filter</h2>
      <form>
        <input
        name='filter'
        type='text'
        placeholder='search for anectodes'
        onChange={(event)=>dispatch(filterChange(event.target.value))}
       /> 
      </form>
  </div>
  )
}

export default Filter