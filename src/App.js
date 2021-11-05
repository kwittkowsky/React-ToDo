import React from 'react';
import './style.css';

/**
 * Main Component <App />
 * Rendering 4 hardcoded checkboxes with paragraph
 * @return markup (JSX)
 */
export default function App() {
  /**
   * If markup isn´t all on the same line as the return statement,
   * you must wrap it in a pair of parentheses
   */
  return (
    <div>
      <h1>Deine aktuellen TODO`s</h1>

      <input type="checkbox" />
      <p>Müll raus bringen</p>

      <input type="checkbox" />
      <p>Müll raus bringen</p>

      <input type="checkbox" />
      <p>Müll raus bringen</p>

      <input type="checkbox" />
      <p>Müll raus bringen</p>
    </div>
  );
}
