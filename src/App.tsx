import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Phasmophobia</h1>
      <h2>Evidence Tracker</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(5)}>Set to 5</button>
    </div>
  )
}

export default App
