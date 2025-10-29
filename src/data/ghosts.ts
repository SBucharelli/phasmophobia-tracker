// Evidence types as a constant array
export const EVIDENCE_TYPES = [
  'D.O.T.S Projector',
  'EMF Level 5',
  'Freezing Temperatures',
  'Ghost Orb',
  'Ghost Writing',
  'Spirit Box',
  'Ultraviolet'
] as const

// TypeScript type derived from the array
export type EvidenceType = typeof EVIDENCE_TYPES[number]

// Ghost interfect -- defined the shape of a ghost object
export interface Ghost {
  name: string,
  evidence: [EvidenceType, EvidenceType, EvidenceType]
}

// All ghosts data
export const GHOSTS: Ghost[] = [
  {
    name: 'Banshee',
    evidence: ['D.O.T.S Projector', 'Ultraviolet', 'Ghost Orb']
  },
  {
    name: 'Demon',
    evidence: ['Freezing Temperatures', 'Ultraviolet', 'Ghost Writing']
  },
  {
    name: 'Deogen',
    evidence: ['D.O.T.S Projector', 'Ghost Writing', 'Spirit Box']
  },
  {
    name: 'Goryo',
    evidence: ['D.O.T.S Projector', 'EMF Level 5', 'Ultraviolet']
  },
  {
    name: 'Hantu',
    evidence: ['Freezing Temperatures', 'Ghost Orb', 'Ultraviolet']
  },
  {
    name: 'Jinn',
    evidence: ['EMF Level 5', 'Freezing Temperatures', 'Ultraviolet']
  },
  {
    name: 'Mare',
    evidence: ['Ghost Orb', 'Ghost Writing', 'Spirit Box']
  },
  {
    name: 'Moroi',
    evidence: ['Freezing Temperatures', 'Ghost Writing', 'Spirit Box']
  },
  {
    name: 'The Mimic',
    evidence: ['Freezing Temperatures', 'Spirit Box', 'Ultraviolet']
  },
  {
    name: 'Myling',
    evidence: ['EMF Level 5', 'Ghost Writing', 'Ultraviolet']
  },
  {
    name: 'Obake',
    evidence: ['EMF Level 5', 'Ghost Orb', 'Ultraviolet']
  },
  {
    name: 'Oni',
    evidence: ['D.O.T.S Projector', 'EMF Level 5', 'Freezing Temperatures']
  },
  {
    name: 'Onryo',
    evidence: ['Freezing Temperatures', 'Ghost Orb', 'Spirit Box']
  },
  {
    name: 'Phantom',
    evidence: ['D.O.T.S Projector', 'Spirit Box', 'Ultraviolet']
  },
  {
    name: 'Poltergeist',
    evidence: ['Ghost Writing', 'Spirit Box', 'Ultraviolet']
  },
  {
    name: 'Raiju',
    evidence: ['D.O.T.S Projector', 'EMF Level 5', 'Ghost Orb']
  },
  {
    name: 'Revenant',
    evidence: ['Freezing Temperatures', 'Ghost Orb', 'Ghost Writing']
  },
  {
    name: 'Shade',
    evidence: ['D.O.T.S Projector', 'Spirit Box', 'Ultraviolet']
  },
  {
    name: 'Spirit',
    evidence: ['EMF Level 5', 'Ghost Writing', 'Spirit Box']
  },
  {
    name: 'Thaye',
    evidence: ['D.O.T.S Projector', 'Ghost Orb', 'Ghost Writing']
  },
  {
    name: 'The Twins',
    evidence: ['EMF Level 5', 'Freezing Temperatures', 'Spirit Box']
  },
  {
    name: 'Wraith',
    evidence: ['D.O.T.S Projector', 'Freezing Temperatures', 'Spirit Box']
  },
  {
    name: 'Yokai',
    evidence: ['D.O.T.S Projector', 'Ghost Orb', 'Spirit Box']
  },
  {
    name: 'Yurei',
    evidence: ['D.O.T.S Projector', 'Freezing Temperatures', 'Ghost Orb']
  }
]