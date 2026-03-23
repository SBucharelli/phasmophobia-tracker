import { EVIDENCE_TYPES, EvidenceType } from '../data/ghosts'

interface EvidenceSelectorProps {
  evidenceState: Record<EvidenceType, 'unselected' | 'selected' | 'strikethrough'>,
  onToggleEvidence: (evidence: EvidenceType) => void
}

export const EvidenceSelector = ({ evidenceState, onToggleEvidence }: EvidenceSelectorProps) => {
  return (
    <div className='evidence-selector'>
      {/* <h3>Selected: {evidenceState.join(', ') || 'None'}</h3> */}
      <div>
        {EVIDENCE_TYPES.map((evidence) => (
          <div key={evidence}>
            <button className={evidenceState[evidence]} onClick={() => onToggleEvidence(evidence)}>{evidence}</button>
          </div>
        ))}
      </div>
    </div>
  )
}