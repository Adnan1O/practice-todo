import { useEffect, useState } from "react";
import './Todolist.css'
import EditTodo from "./EditTodo";

const Todolist=()=>{
    const [todo, setTodo]= useState([]);

const getTodos=async()=>{
try {
    const response = await fetch("http://localhost:5000/todo")
    const jsonData = await response.json()
    setTodo(jsonData)

} catch (error) {
    console.error(error.message)
}
};
    useEffect(()=>{
        getTodos();
    },[])
    
    // EditTodo=()=>{

    // }

   const DeleteTodo= async (id)=>{
       try {
        const deleteTodo = await fetch(`http://localhost:5000/todo/${id}`,{
            method: "DELETE"
        });
       setTodo(todo.filter(todo=> todo.todo_id !== id))
       } catch (error) {
        console.error(error.message)
       }
    }

    return(
        <>
        <h1>list of todos{todo?.length}</h1>
<table>    
    <tbody>
   {  todo.map(todo=>(
        
    <tr key={todo.todo_id}>
        <td >{todo.description}</td>
        <td> <EditTodo todo={todo}/> </td>
        <td> <button onClick={()=>DeleteTodo(todo.todo_id)}>Delete</button> </td>
        </tr>
      
    ))} 
  </tbody>
</table>
        </>
    );
}
export default Todolist;