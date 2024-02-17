import React,{useContext} from 'react'
import Task from './Task'
import { TodoContext } from '../App'

const TaskList = () => {

  const {todo, getTask} = useContext(TodoContext)

 
 
  return (
    <div className='container todoContainer' >
      <ul style={{listStyleType:"none"}}>
        {todo.map((item,ind)=><li key={ind}> <Task item={item} getTask={getTask}/> </li>)}
     </ul>
    </div>
  )
}

export default TaskList