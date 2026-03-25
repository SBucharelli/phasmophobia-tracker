import { useState } from 'react'

import './App.css'
import { EvidenceSelector } from './components/EvidenceSelector/EvidenceSelector'
import { EvidenceType, GHOSTS } from './data/ghosts'
import { GhostCard } from './components/GhostCard/GhostCard'

function App() {
  const [evidenceState, setEvidenceState] = useState<Record<EvidenceType, 'unselected' | 'selected' | 'strikethrough'>>({
    'DOTS': 'unselected',
    'EMF 5': 'unselected',
    'Freezing Temps': 'unselected',
    'Ghost Orbs': 'unselected',
    'Ghost Writing': 'unselected',
    'Spirit Box': 'unselected',
    'Ultraviolet': 'unselected'
  })

  const handleToggleEvidence = (evidence: EvidenceType) => {
    console.log(evidenceState)
    // need to check the status of the evidence and update as the selection is made
    // 1. get current state of this evidence
    const currentState = evidenceState[evidence]

    switch (currentState) {
      case 'unselected':
        setEvidenceState({ ...evidenceState, [evidence]: 'selected' })
        break
      case 'selected':
        setEvidenceState({ ...evidenceState, [evidence]: 'strikethrough' })
        break
      case 'strikethrough':
        setEvidenceState({ ...evidenceState, [evidence]: 'unselected' })
        break
      default:
        setEvidenceState({ ...evidenceState, [evidence]: 'unselected' })
    }
  }

  return (
    <div className='App'>
      <h1>Phasmophobia</h1>
      <h2>Evidence Tracker</h2>
      <div className='flex'>
        <EvidenceSelector evidenceState={evidenceState} onToggleEvidence={handleToggleEvidence} />
        <div className='grid'>
          {GHOSTS.map((ghost => (
            <div key={ghost.name}>
              <GhostCard ghost={ghost} />
            </div>
          )))}
        </div>
      </div>
    </div>
  )
}

export default App
