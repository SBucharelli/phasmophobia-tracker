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
        setEvidenceState((prev) => ({
          ...prev,
          [evidence]: 'selected'
        }))
        break
      case 'selected':
        setEvidenceState((prev) => ({
          ...prev,
          [evidence]: 'strikethrough'
        }))
        break
      case 'strikethrough':
        setEvidenceState((prev) => ({
          ...prev,
          [evidence]: 'unselected'
        }))
        break
      default:
        setEvidenceState((prev) => ({
          ...prev,
          [evidence]: 'unselected'
        }))
    }
  }

  const selectedEvidence = Object.entries(evidenceState).filter((evidenceState) => evidenceState[1] == 'selected').map((selectedEvidence) => selectedEvidence[0]) as EvidenceType[]
  const struckEvidence = Object.entries(evidenceState).filter((evidenceState) => evidenceState[1] == 'strikethrough').map((selectedEvidence) => selectedEvidence[0]) as EvidenceType[]
  console.log('this is the object.entries', selectedEvidence)
  console.log('this is struckthrough', struckEvidence)
  // const testGhost = GHOSTS[0]
  // console.log(testGhost)

  // const matchesSelectedEvidence = selectedEvidence.every((evidence) => {
  //   return testGhost.evidence.includes(evidence)
  // })

  // const hasStruckEvidence = struckEvidence.some((evidence) => {
  //   return testGhost.evidence.includes(evidence)
  // })
  // console.log('match', matchesSelectedEvidence)
  // console.log('struck', hasStruckEvidence)

  // const isEliminated = !matchesSelectedEvidence || hasStruckEvidence

  // console.log('isEliminated', isEliminated)

  return (
    <div className='App'>
      <h1>Phasmophobia</h1>
      <h2>Evidence Tracker</h2>
      <div className='flex'>
        <EvidenceSelector evidenceState={evidenceState} onToggleEvidence={handleToggleEvidence} />
        <div className='grid'>
          {GHOSTS.map((ghost => {
            const matchesSelectedEvidence = selectedEvidence.every((evidence) => {
              return ghost.evidence.includes(evidence)
            })

            const hasStruckEvidence = struckEvidence.some((evidence) => {
              return ghost.evidence.includes(evidence)
            })

            const isEliminated = !matchesSelectedEvidence || hasStruckEvidence
            console.log('isEliminated', ghost.name, isEliminated)

            return (
              <div key={ghost.name}>
                <GhostCard ghost={ghost} isEliminated={isEliminated} />
              </div>
            )
          }))}
        </div>
      </div>
    </div>
  )
}

export default App
