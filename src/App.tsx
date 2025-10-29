import { useState } from 'react'

import './App.css'
import { EVIDENCE_TYPES, GHOSTS } from './data/ghosts'

function App() {

  return (
    <div className='App'>
      <h1>Phasmophobia</h1>
      <h2>Evidence Tracker</h2>
      <h3>Evidence Types: {EVIDENCE_TYPES.length}</h3>
      <h3>Total Ghosts: {GHOSTS.length}</h3>
    </div>
  )
}

export default App
