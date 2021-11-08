import React from 'react';
import './style.css';
import TodoItem from './TodoItem.js';
import todosData from './todosData.js';
//
/**
 * Main Component <App />
 * call for each item <TodoItem /> with key and probs
 */
export default function App() {
  const todoItems = todosData.map((item) => (
    <TodoItem key={item.id} item={item} />
  ));

  return (
    <div className="todo-list">
      <h1>Deine aktuellen TODO`s</h1>
      {todoItems}
    </div>
  );
}
