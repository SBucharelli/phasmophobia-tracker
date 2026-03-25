import './GhostCard.css'

import { Card } from '../Card/Card'
import { Ghost } from '../../data/ghosts'

interface GhostCardProps {
  // evidenceState: Record<EvidenceType, 'unselected' | 'selected' | 'strikethrough'>,
  // onToggleEvidence: (evidence: EvidenceType) => void
  ghost: Ghost
}

export const GhostCard = ({ ghost }: GhostCardProps) => {
  return (
    <Card className='ghost-card'>
      <h3 className='ghost-name-text'>
        {ghost.name}
      </h3>
      <p className='ghost-evidence-text'>
        {ghost.evidence.join(', ')}
      </p>
    </Card>
  )
}