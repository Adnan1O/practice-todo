const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")
//const port =5000
require('dotenv').config()
app.use(cors())
app.use(express.json());

//create a todo
app.post("/todo", async(req,res)=>{
    try {
      const{description}= req.body;
        const newTodo = await pool.query(
            "INSERT INTO todos (description) VALUES($1) RETURNING 8", [description]
        );
        res.json(newTodo.rows[0]);
    } catch (error) {
        console.error(error.message)
    }
})
//get todos
    app.get("/todo", async(req,res)=>{
      try {
        const allTodo = await pool.query("SELECT * FROM todos");
        res.json(allTodo.rows);
      } catch (error) {
        console.error(err.message)
      }
    })

//get a todo{}

    app.get("/todo/:id", async(req,res)=>{
        try {
            const {id}= req.params;
           const oneTodo = await pool.query("SELECT * FROM todos WHERE todo_id = $1", [id]);
           res.json(oneTodo.rows[0])
        } catch (error) {
            console.error(err.message) 
        }
    })

// PUT edit a todo
    app.put("/todo/:id", async(req,res)=>{
      try {
        const {id} = req.params;
        const {description} = req.body;
        const updateTodo = await pool.query("UPDATE todos SET description = $1 WHERE todo_id=$2",[description,id]);

        res.json("todo was updated")
      } catch (err) {
        console.error(err.message) 
      }
    })
//delete a todo
 app.delete("/todo/:id", async(req,res)=>{
    try {
        const {id}= req.params;
        const deleteTodo= await pool.query("DELETE FROM todos WHERE todo_id = $1",[id]);
        res.json('todo was deleted')
    } catch (error) {
        console.error(err.message) 
    }
 })




app.listen(process.env.PORT, ()=>{
    console.log(`running on port:${process.env.PORT}`)
});
