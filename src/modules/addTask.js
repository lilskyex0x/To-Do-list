import tasks from './tasks.js';

const addTask = (description) => {
  const task = {};
  const lastIndex = tasks.length;
  task.description = description;
  task.completed = false;
  task.index = lastIndex + 1;
  tasks.push(task);
};

export default addTask;
