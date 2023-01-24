import tasks from './tasks.js';

const removeTask = (index) => {
  const temp = tasks.filter((task) => task.index !== index);
  tasks.length = 0;
  let counter = 1;
  temp.forEach((element) => {
    element.index = counter;
    tasks.push(element);
    counter += 1;
  });
};

export default removeTask;