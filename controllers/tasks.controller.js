const { TaskDB } = require('../models');

module.exports.getTasks = (req, res) => {
  const tasks = TaskDB.getTasks();

  res.status(200).send(tasks);
};

module.exports.createTask = (req, res) => {
  const { body } = req;
  const createTask = TaskDB.createTask(body);

  return res.status(201).send(createTask);
};

module.exports.getTaskById = (req, res) => {
  const { id } = req.params;
  const foundTask = TaskDB.getTaskById(id);
  if (foundTask) {
    return res.status(200).send(foundTask);
  }
  res.status(404).send('Task not found');
};

module.exports.updatedTask = (req, res) => {
  const {
    params: { id },
    body,
  } = req;

  const updatedTask = TaskDB.updateTask(id, body);
  if (updatedTask) {
    return res.status(200).send(updatedTask);
  }
  res.status(404).send('Task not found');
};

module.exports.deleteTaskById = (req, res) => {
  const {
    params: { id },
  } = req;

  const deleteTask = TaskDB.deleteTask(id);
  if (deleteTask) {
    return res.status(204).send();
  }
  res.status(404).send('Task not found');
};
