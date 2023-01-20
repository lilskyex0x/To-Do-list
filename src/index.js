import './style.css';
import TodoList from './modules/todoList.js';
import '@fortawesome/fontawesome-free/js/all.js';
import '@fortawesome/fontawesome-free/js/solid.min.js';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';

window.onload = () => {
  const mylist = new TodoList('ul');

  mylist.addTask('Read one book');
  mylist.addTask('Do the dishes');
};
