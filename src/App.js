import React, { useState } from 'react'
import CommandInput from './CommandInput'
import HistoryEntry from './HistoryEntry'

export default function App(props) {
  let [history, setHistory] = useState([])
  
  let onsubmit = (command) => {
    let output = window.api.runCommand(command)
    setHistory([...history, { command, output }])
  }
  
  return (
    <>
      <h1>The Reaction... It's Terminal</h1>
      {history.map(({command, output}, index) => (
          <HistoryEntry key={index} command={command} output={output} />
      ))}
      <CommandInput onsubmit={onsubmit} />
    </>
  );
};
