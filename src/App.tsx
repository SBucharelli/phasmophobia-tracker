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
      <ul style={{ justifyContent: 'right', alignItems: 'flex-start' }}>
        {GHOSTS.map(ghost => (
          <li key={ghost.name}>
            {ghost.name}: {ghost.evidence.join(', ')}
            <ul>{ghost.traits.map((trait, index) => (<li key={index}>{trait}</li>))}</ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
