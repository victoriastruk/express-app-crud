const { tasksController } = require('./controllers');
const express = require('express');

const app = express();
app.use(express.json());

app.get('/tasks', tasksController.getTasks);
app.post('/tasks', tasksController.createTask);
app.get('/tasks/:id', tasksController.getTaskById);
app.patch('/tasks/:id', tasksController.updatedTask);
app.delete('/tasks/:id', tasksController.deleteTaskById);

module.exports = app;
