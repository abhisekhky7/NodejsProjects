import { useState,createContext, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import axios from 'axios';

const TodoContext = createContext()

function App() {
const [todo,setTodo]=useState([])
  
useEffect(() => {
  console.log("in app")
getTask() 
},[])
const getTask = async()=>{
    const res = await axios.get('http://localhost:3001/tasks')
     setTodo(res.data)
  }
 
  const contextValue = {
    todo,
    getTask,
  };



  
  return (
    <div className="App">
      <TodoContext.Provider value={contextValue}>
        <TaskForm getTask={getTask}/>
      </TodoContext.Provider>
    </div>
  );
}
export {TodoContext};
export default App;
