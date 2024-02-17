const express = require('express')
const sql = require('mysql2');
const bodyParser = require("body-parser")
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())


 const db = sql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root",
    database:"tododb"
 })
 
 db.connect(err => {
    if (err) throw err;
    console.log('Connected to Database');
  });

  app.get('/tasks', async(req, res) => {
    const query = 'SELECT * FROM tasks';
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  // Add Task
  app.post('/tasks', (req, res) => {
    const task = { title: req.body.title, description: req.body.description };
    const query = 'INSERT INTO tasks SET ?';
    db.query(query, task, (err, result) => {
      if (err) throw err;
      res.send('Task added.');
    })
  });
  
  // Update a task's status
  app.put('/tasks/:id', (req, res) => {
    const query = `UPDATE tasks SET completed = !completed WHERE id = ${req.params.id}`;
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send('Task status updated.');
    });
  });
  
  // Delete a task
  app.delete('/tasks/:id', (req, res) => {
    const query = `DELETE FROM tasks WHERE id = ${req.params.id}`;
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send('Task deleted.');
    });
  });
  





app.listen(3001,()=>console.log("Server started"))