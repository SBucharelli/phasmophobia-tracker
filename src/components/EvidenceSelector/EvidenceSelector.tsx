import './EvidenceSelector.css'
import { EVIDENCE_TYPES, EvidenceType } from '../../data/ghosts'

interface EvidenceSelectorProps {
  evidenceState: Record<EvidenceType, 'unselected' | 'selected' | 'strikethrough'>,
  onToggleEvidence: (evidence: EvidenceType) => void,
  onClearEvidence: () => void
}

export const EvidenceSelector = ({ evidenceState, onToggleEvidence, onClearEvidence }: EvidenceSelectorProps) => {
  return (
    <div className='evidence-selector'>
      {EVIDENCE_TYPES.map((evidence) => (
        <button
          key={evidence}
          className={evidenceState[evidence]}
          onClick={() => onToggleEvidence(evidence)}
        >
          {evidence}
        </button>
      ))}
      <button className='clear-btn' onClick={onClearEvidence}>Clear</button>
    </div>
  )
}