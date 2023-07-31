import './TodoInput.css'
import {useState} from 'react';
const TodoInput=()=>{
    const [description, setDescription] = useState('');
    
   const onSubmit= async (e)=>{
e.preventDefault();

try {
    const body = {description}
    const response= await fetch("http://localhost:5000/todo",{
    method: "POST",
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify(body)
    });
    window.location="/";
    console.log(response)
    setDescription('');
} catch (error) {
    console.error(error.message) 
}
}

return(
<>
<h1>hello</h1>
<div className="inputarea">
<input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} />
<button onClick={onSubmit} >Add</button>
</div>
</>
)
};
export default TodoInput;