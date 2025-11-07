import { useState } from 'react'

import './App.css'
import { EvidenceSelector } from './components/EvidenceSelector'
import { EvidenceType } from './data/ghosts'

function App() {
  const [selectedEvidence, setSelectedEvidence] = useState<EvidenceType[]>([])

  const handleToggleEvidence = (evidence: EvidenceType) => {
    if (selectedEvidence.includes(evidence)) {
      const filteredEvidence = selectedEvidence.filter(item => item !== evidence)
      setSelectedEvidence(filteredEvidence)
    } else {
      setSelectedEvidence([...selectedEvidence, evidence])
    }
  }

  return (
    <div className='App'>
      <h1>Phasmophobia</h1>
      <h2>Evidence Tracker</h2>

      <EvidenceSelector selectedEvidence={selectedEvidence} onToggleEvidence={handleToggleEvidence} />
    </div>
  )
}

export default App
