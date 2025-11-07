import { EVIDENCE_TYPES, EvidenceType } from '../data/ghosts'

interface EvidenceSelectorProps {
  selectedEvidence: EvidenceType[],
  onToggleEvidence: (evidence: EvidenceType) => void
}

export const EvidenceSelector = ({ selectedEvidence, onToggleEvidence }: EvidenceSelectorProps) => {
  return (
    <div className='evidence-selector'>
      <h3>Evidence</h3>
      <div>
        {EVIDENCE_TYPES.map((evidence) => (
          <div key={evidence}>
            <button className={selectedEvidence.includes(evidence) ? 'selected' : ''} onClick={() => onToggleEvidence(evidence)}>{evidence}</button>
          </div>
        ))}
      </div>
    </div>
  )
}