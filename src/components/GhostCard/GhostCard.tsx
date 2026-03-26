import './GhostCard.css'

import { Card } from '../Card/Card'
import { Ghost } from '../../data/ghosts'

interface GhostCardProps {
  // evidenceState: Record<EvidenceType, 'unselected' | 'selected' | 'strikethrough'>,
  // onToggleEvidence: (evidence: EvidenceType) => void
  ghost: Ghost
  isEliminated: boolean
}

export const GhostCard = ({ ghost, isEliminated }: GhostCardProps) => {
  return (
    <Card className={isEliminated ? 'ghost-card eliminated' : 'ghost-card'}>
      <h3 className={isEliminated ? 'ghost-name-text eliminated' : 'ghost-name-text'}>
        {ghost.name}
      </h3>
      <p className={isEliminated ? 'ghost-evidence-text eliminated' : 'ghost-evidence-text'}>
        {ghost.evidence.join(', ')}
      </p>
    </Card>
  )
}