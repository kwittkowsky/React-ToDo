import React from 'react';

/**
 * Added probs
 * get from parent as object (like probs.item.id)
 */
export default function TodoItem(probs) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={probs.item.completed} />
      <p>{probs.item.text}</p>
    </div>
  );
}
