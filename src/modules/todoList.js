import Tasks from './tasks.js';

export default class TodoList {
  constructor(selector) {
    this.list = document.querySelector(selector);
    this.tasks = [];
  }

  addTask(description, completed = false) {
    const newTask = new Tasks(description, completed, this.newIndex());
    this.tasks.push(newTask);
    this.drawList();
  }

  sortedIndex() {
    return this.tasks.sort((a, b) => a.index - b.index);
  }

  newIndex() {
    if (!this.tasks.length) {
      return 0;
    }
    const lastIndex = Math.max(...this.tasks.map((task) => task.index));
    return lastIndex + 1;
  }

  drawList() {
    this.list.innerHTML = '';
    this.sortedIndex().forEach((task) => {
      const domTask = task.listTask();
      this.list.appendChild(domTask);
    });
  }
}
