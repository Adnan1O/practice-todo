import React, { useState } from 'react'

function EditTodo({todo}) {
  
  const [updatedValue, setUpdatedValue] = useState(todo.description);

 const updateHandler= async(e)=>{
  e.preventDefault();
    try {
      const body = {updatedValue};
      const response = await fetch(`http://localhost:5000/todo/${todo.todo_id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      
      window.location = "/";
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div>
      <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target={`#id${todo.todo_id}`}>Edit</button>


<div id={`id${todo.todo_id}`} className="modal fade" role="dialog">
  <div className="modal-dialog">

   
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">update your todo</h4>
      </div>
      <div className="modal-body">
        <input type="text" value={updatedValue} onChange={(e)=>setUpdatedValue(e.target.value)} />
        <button onClick={(e)=>updateHandler(e)}>update</button>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
    </div>
  )
}

export default EditTodo
