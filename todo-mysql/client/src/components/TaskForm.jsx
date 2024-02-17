import React, {  useState } from "react";
import TaskList from './TaskList'
import axios from "axios";

const TaskForm = ({getTask}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const addTodo = async(newTodo)=>{
    try {
      const res = await axios.post('http://localhost:3001/tasks',newTodo)
      console.log(res.data)
      getTask()
    } catch (error) {
      console.log(error)
    }
  }

  const handleAdd = () => {
    if (!title) {
      alert("Please Add Title");
      return;
    }
    if (description) {
      const newTodo = { title, description,completed:false };
      addTodo(newTodo)
      setTitle('')
      setDescription('')
    }
  };



  return (
    <div className="container">
      <h3 className="title">Tasks List</h3>
      
      <div className="container border" >
        <input className="inputTitle" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter title..."/>
        <input className="inputDesc"  value={description}   onChange={(e) => setDescription(e.target.value)} placeholder="Enter description..."/>
        <button className="addBtn" onClick={handleAdd}>Add</button>

      </div>
     
      <div>
          <TaskList/>
      </div>
    </div>
  );
};

export default TaskForm;

