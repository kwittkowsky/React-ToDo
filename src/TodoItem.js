import React from 'react';

/**
 * New Component <TodoItem />
 * @return markup with checkbox and paragraph ()
 * Adding className="todo-item"
 */
export default function TodoItem() {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <p>Hier kann eine Aufgabe stehen</p>
    </div>
  );
}
