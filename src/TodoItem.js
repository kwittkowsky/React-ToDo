import React from 'react';

/**
 * Added probs
 * get from parent as object (like probs.item.id)
 * added conditional rendering
 */
export default function TodoItem(probs) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={probs.item.completed} />
      <p>
        { probs.item.completed ? (
          <del>{probs.item.text}</del>
          ) : (
            probs.item.text
          )
        }
      </p>
    </div>
  );
}
