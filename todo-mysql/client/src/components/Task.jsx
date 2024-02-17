import React, { useContext } from 'react'
import axios from 'axios'


const Task = ({item,getTask}) => {

 const {id} = item; 

 const myStyle={
  title:{
    textTransform:"capitalize",
    textDecoration:item.completed? "line-through":"none",
    color:item.completed? "aqua":"black",
    fontWeight:"600",
  }
}

const handleToggle = async(id)=>{
  try {
    console.log(id)
    const res = await axios.put(`http://localhost:3001/tasks/${id}`,)
    console.log(res.data)
    getTask()
  } catch (error) {
    console.log(error)
  }
}

const handleDelete = async(id) => {
 try {
   const res = await axios.delete(`http://localhost:3001/tasks/${id}`)
   console.log(res.data)
   getTask()
 } catch (error) {
   console.log(error)
 }
};

  return (
    <div className='container d-flex itemContainer'>
      <div>
        <h4 style={myStyle.title}> {item.title} </h4>
        <p className='itemDesc'>{item.description}</p>
      </div>
      <div className='btnContainer'>
         <button className='itemComplete' onClick={()=>handleToggle(id)}>Completed</button>
          <button className='itemDelete' onClick={()=>handleDelete(id)} >Delete</button>
      </div>
    </div>
  )
}

export default Task