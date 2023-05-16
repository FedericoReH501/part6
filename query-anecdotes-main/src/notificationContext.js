import { createContext,useReducer } from 'react'

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

export default NotificationContext