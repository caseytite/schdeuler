import { useState } from 'react';

//  updates view of day cards

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // changes mode
  function transition(newMode, replace = false) {
    if (replace) {
      return setMode(newMode);
    }
    setHistory((prev) => [...prev, newMode]);
    return setMode(newMode);

  }

  //reverts to previous mode
  function back() {
    if (history.length < 2) {
      return setMode(...history);
    }
    history.pop();
    return setMode(history[history.length - 1]);
  }
 
  return { mode, transition, back };
}
