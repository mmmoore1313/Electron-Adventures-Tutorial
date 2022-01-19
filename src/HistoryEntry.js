import React from 'react'

export default function HistoryEntry({command, output}) {
  return (
    <>
      <div className='input-line'>
        <span className='prompt'>$</span>
        <span className='input'>{command}</span>
      </div>
      <div className='ouput'>{output}</div>
    </>
  )
}