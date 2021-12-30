import React, {useState} from 'react'
import Setup from './tutorial/1-useState/setup/2-useState-basics.js'

function App() {
  console.log(useState());
  return (
    <div className='container'>
      <Setup ></Setup>
    </div>
  )
}

export default App