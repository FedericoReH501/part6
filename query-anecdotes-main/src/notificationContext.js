import { createContext,useReducer,useContext } from 'react'

const notificationReducer=(state,action)=>{
  switch(action.type){
    case 'SHOW':
      return action.payload
    case 'HIDE':
      return null
    default:
      return null
  }
}

const NotificationContext = createContext()

export const NotificationContextProvider = (props)=>{
  const [notifState,notifDispatch] = useReducer(notificationReducer,null)
  
  return(
    <NotificationContext.Provider value={[notifState,notifDispatch]}>
     
      {props.children}
    
    </NotificationContext.Provider>
  )

}

export const useNotifValue = ()=>{
  const stateAndDispatch = useContext(NotificationContext)
  return  stateAndDispatch[0]
}

export const useNotifyDispatch = ()=>{
  const stateAndDispatch = useContext(NotificationContext)
  return stateAndDispatch[1]
}

export default NotificationContext