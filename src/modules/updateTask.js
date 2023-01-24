import tasks from './tasks.js';

const updateTask = (index, description) => {
  tasks.filter((object) => object.index === index).forEach((object) => {
    object.description = description;
  });
};

const completeTask = (index, completed) => {
  tasks.filter((object) => object.index === index).forEach((object) => {
    object.completed = completed;
  });
};
export { updateTask, completeTask };