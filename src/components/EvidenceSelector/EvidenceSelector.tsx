import { EVIDENCE_TYPES, EvidenceType } from '../../data/ghosts'

interface EvidenceSelectorProps {
  evidenceState: Record<EvidenceType, 'unselected' | 'selected' | 'strikethrough'>,
  onToggleEvidence: (evidence: EvidenceType) => void
}

export const EvidenceSelector = ({ evidenceState, onToggleEvidence }: EvidenceSelectorProps) => {
  return (
    <div className='evidence-selector'>
      <div>
        {EVIDENCE_TYPES.map((evidence) => (
          <div key={evidence}>
            <button className={evidenceState[evidence]} onClick={() => onToggleEvidence(evidence)}>
              {evidence}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}