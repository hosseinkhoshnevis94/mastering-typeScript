"use strict";
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const container = document.querySelector('#list');
let todos = [];
function renderTodos() {
    container.innerHTML = '';
    todos.forEach(todo => {
        const html = `<li data-id="${todo.id}" class="item">${todo.text}</li>`;
        container.insertAdjacentHTML('beforeend', html);
    });
}
function saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTodo = { text: input.value, id: Math.random() * 1000 };
    todos.push(newTodo);
    renderTodos();
    saveToLocalStorage();
    input.value = '';
});
window.addEventListener('load', () => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos && savedTodos.length > 0) {
        todos = JSON.parse(savedTodos);
        renderTodos();
    }
});
container.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('item')) {
        const itemId = target.dataset.id;
        if (itemId) {
            todos = todos.filter(item => item.id !== Number(itemId));
            renderTodos();
            saveToLocalStorage();
        }
    }
});
