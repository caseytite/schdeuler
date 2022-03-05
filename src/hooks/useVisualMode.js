import { useState } from 'react';

//  updates view of day cards

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

// changes mode
  const transition = (newMode, replace = false) => {
    if(replace){
      setHistory([...history])
      setMode(newMode);
    }

    setHistory([mode, ...history]);
    setMode(newMode);
  };
//reverts to previous mode
  const back = () => {
    if (history.length < 2) return;
    const [prevMode, ...rest] = history;
    setMode(prevMode);
    setHistory(rest);
  };

  return { mode, transition, back };
}