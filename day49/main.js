const input = document.getElementById('input');
const form = document.getElementById('form');
const todosEl = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

form.addEventListener('submit', (e) => {
  e.preventDefault();

  creteTodos();
})


const creteTodos = (todo) => {
  let todoText = input.value;

  if(todo) {
    todoText = todo.text;
  }
  if(!todoText) return;
  
  const liEl = document.createElement('li');
  liEl.innerText = todoText;

  if(todo && todo.completed) {
    liEl.classList.add('completed');
  }

  liEl.addEventListener('click', () => {
    liEl.classList.toggle('completed');

    updateLS();
  });

  liEl.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    liEl.remove();
    updateLS();
  })

  input.value = '';
  todosEl.appendChild(liEl);


  updateLS();
}

const updateLS = () => {
  const todosEl = document.querySelectorAll('li');

  const todos = [];

  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed'),
    })
  })
 
  localStorage.setItem('todos', JSON.stringify(todos));
}

if (todos) {
  todos.forEach((todo) => creteTodos(todo))
}