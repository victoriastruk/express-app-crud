const express = require('express');
const { tasksController } = require('./controllers');
const { validate, errorHandlers } = require('./middleware');

const app = express();
app.use(express.json());

app.get('/tasks', tasksController.getTasks);
app.post('/tasks', validate.validateTaskOnCreate, tasksController.createTask);
app.get('/tasks/:id', tasksController.getTaskById);
app.patch(
  '/tasks/:id',
  validate.validateTaskOnUpdate,
  tasksController.updatedTask
);
app.delete('/tasks/:id', tasksController.deleteTaskById);

app.use(errorHandlers.validationErrorHandler, errorHandlers.errorHandler);
module.exports = app;
