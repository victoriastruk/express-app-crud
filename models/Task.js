const { v4: uuidv4 } = require('uuid');
const { format } = require('date-fns');

const tasksDB = [
  {
    id: '1',
    text: 'Task1',
    createdAt: format(new Date(), 'yyyy-MM-dd HH:mm'),
    isDone: false,
  },
  {
    id: '2',
    text: 'Task2',
    createdAt: format(new Date(), 'yyyy-MM-dd HH:mm'),
    isDone: true,
  },
];

class TaskDB {
  constructor (arr) {
    this.tasks = [...arr];
  }

  createTask (newTask) {
    this.tasks.push({
      ...newTask,
      id: uuidv4(),
      createdAt: format(new Date(), 'yyyy-MM-dd HH:mm'),
      isDone: false,
    });
    return this.tasks[this.tasks.length - 1];
  }

  getTasks () {
    return [...this.tasks];
  }

  getTaskById (id) {
    const foundIndex = this.tasks.findIndex(t => t.id === id);
    return foundIndex === -1 ? null : this.tasks[foundIndex];
  }

  updateTask (id, values) {
    const foundTaskIndex = this.tasks.findIndex(t => t.id === id);
    if (foundTaskIndex !== -1) {
      this.tasks[foundTaskIndex] = {
        ...this.tasks[foundTaskIndex],
        ...values,
      };
    }
    return foundTaskIndex === -1 ? null : this.tasks[foundTaskIndex];
  }

  deleteTask (id) {
    const foundTaskIndex = this.tasks.findIndex(t => t.id === id);

    return foundTaskIndex === -1 ? null : this.tasks.splice(foundTaskIndex, 1);
  }
}

const tasksDbInstance = new TaskDB(tasksDB);

module.exports = tasksDbInstance;
