export default class Tasks {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  listTask() {
    this.liBox = document.createElement('li');
    this.liBox.classList.add('box__model');

    this.checkBox = document.createElement('input');
    this.checkBox.setAttribute('type', 'checkbox');
    this.checkBox.checked = this.completed;

    this.descSpan = document.createElement('span');
    this.descSpan.innerHTML = this.description;

    this.liIcon = document.createElement('span');
    this.liIcon.classList.add('icon', 'move');
    this.liIcon.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';

    this.liBox.appendChild(this.checkBox);
    this.liBox.appendChild(this.descSpan);
    this.liBox.appendChild(this.liIcon);

    return this.liBox;
  }
}
