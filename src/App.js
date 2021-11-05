import React from 'react';
import './style.css';
import TodoItem from './TodoItem.js';

/**
 * Main Component <App />
 * Rendering 4 <TodoItem />
 * Adding className="todo-list"
 */
export default function App() {
  return (
    <div className="todo-list">
      <h1>Deine aktuellen TODO`s</h1>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}
