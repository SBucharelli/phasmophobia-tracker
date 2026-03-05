import { useState } from 'react'

import './App.css'
import { EvidenceSelector } from './components/EvidenceSelector'
import { EvidenceType } from './data/ghosts'

function App() {
  const [evidenceState, setEvidenceState] = useState<Record<EvidenceType, 'unselected' | 'selected' | 'strikethrough'>>({
    'D.O.T.S Projector': 'unselected',
    'EMF Level 5': 'unselected',
    'Freezing Temperatures': 'unselected',
    'Ghost Orb': 'unselected',
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

      <EvidenceSelector evidenceState={evidenceState} onToggleEvidence={handleToggleEvidence} />
    </div>
  )
}

export default App
