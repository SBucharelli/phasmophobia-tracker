// Evidence types as a constant array
export const EVIDENCE_TYPES = [
  'DOTS',
  'EMF 5',
  'Freezing Temps',
  'Ghost Orbs',
  'Ghost Writing',
  'Spirit Box',
  'Ultraviolet'
] as const

// TypeScript type derived from the array
export type EvidenceType = typeof EVIDENCE_TYPES[number]

// Ghost interfect -- defined the shape of a ghost object
export interface Ghost {
  name: string,
  evidence: [EvidenceType, EvidenceType, EvidenceType],
  traits: string[]
}

// All ghosts data
export const GHOSTS: Ghost[] = [
  {
    name: 'Banshee',
    evidence: ['DOTS', 'Ultraviolet', 'Ghost Orbs'],
    traits: ['Hunts at 50% sanity', 'The Banshee will choose a target at the beginning of the game and will only target that player during hunts as long as that player is in the house. If the target is not in the house it will hunt as a normal ghost. It will also hunt only based on the targets sanity. It will only roam toward the target player as long as that player is in the house. It has a 30% chance to “banshee scream” into the parabolic mic. Banshees are more likely to do singing ghost events.']
  },
  {
    name: 'Dayan',
    evidence: ['EMF 5', 'Ghost Orbs', 'Spirit Box'],
    traits: ['Hunts at 65%, 45%, or 50%', 'Female only. The Dayan will hunt earlier and be faster if there is a player near the ghost and moving.']
  },
  {
    name: 'Demon',
    evidence: ['Freezing Temps', 'Ultraviolet', 'Ghost Writing'],
    traits: ['Hunts at 70% sanity', 'The Demon has a special ability that it can initiate a hunt whenever it wants, regardless of player sanity. The crucifix has an extended protection range against the it. Can hunt just 60 seconds after being smudged.']
  },
  {
    name: 'Gallu',
    evidence: ['EMF 5', 'Ultraviolet', 'Spirit Box'],
    traits: ['Hunts at65%, 45%, or 50%', 'The Gallu will enter into an enraged state if it steps in salt, despite having UV as one of it\'s evidence. When trying to escape from a Gallu during a hunt, be aware that using salt or incense to slow it down will cause the Gallu to speed up afterwards.']
  },
  {
    name: 'Deogen',
    evidence: ['DOTS', 'Ghost Writing', 'Spirit Box'],
    traits: ['Hunts at 40% sanity  |  Required Evidence: Spirit Box', 'The Deogen always knows your location so do not try and hide. It moves fast when it is far away but is significantly slower when it gets close to you. If standing close enough to it when it responds to a spirit box you will hear a heavy breathing response.']
  },
  {
    name: 'Goryo',
    evidence: ['DOTS', 'EMF 5', 'Ultraviolet'],
    traits: ['Hunts at 50% sanity  |  Required Evidence: DOTS', 'The Goryo will only give DOTS on video cameras. It will never change it’s ghost room and it won’t roam far away from the ghost room']
  },
  {
    name: 'Hantu',
    evidence: ['Freezing Temps', 'Ghost Orbs', 'Ultraviolet'],
    traits: ['Hunts at 50% sanity  |  Required Evidence: Freezing Temps', 'The Hantu will be must faster if the breaker remains off and it won’t speed up during hunts if in a warm room. It is more likely to turn off the breaker than other ghosts and will never turn on the breaker.']
  },
  {
    name: 'Jinn',
    evidence: ['EMF 5', 'Freezing Temps', 'Ultraviolet'],
    traits: ['Hunts at 50% sanity', 'The Jinn will speed up once it sees a player from far away. It will never turn off the breaker and has an ability to instantly drop a players sanity by 25% if it is close to them which will trigger an EMF 2 reading on the breaker as long as it is currently on.']
  },
  {
    name: 'Mare',
    evidence: ['Ghost Orbs', 'Ghost Writing', 'Spirit Box'],
    traits: ['Hunts at 60% sanity in the dark or 40% sanity in the light', 'The Mare cannot turn on light switches, TVs or computer monitors. It has a chance to instantly turn off a light as soon as you turn it on. Turning on the lights in the ghost room will cause it to roam more often.']
  },
  {
    name: 'Moroi',
    evidence: ['Freezing Temps', 'Ghost Writing', 'Spirit Box'],
    traits: ['Hunts at 50% sanity  |  Required Evidence: Spirit Box', 'The Moroi will get faster during hunts the lower the players sanity. If a player hears a response on a spirit box of parabolic mic from the ghost they will be cursed. Once cursed their sanity will drain faster than normal whether or not you are in the light. Smudging it will protect you for 12 seconds during a hunt instead of 6.']
  },
  {
    name: 'The Mimic',
    evidence: ['Freezing Temps', 'Spirit Box', 'Ultraviolet'],
    traits: ['Hunts at 50% sanity', 'The Mimic will always show ghost orbs but are not part of their evidence. They can any ability of the other ghosts. ']
  },
  {
    name: 'Myling',
    evidence: ['EMF 5', 'Ghost Writing', 'Ultraviolet'],
    traits: ['Hunts at 50% sanity', 'The Myling’s footsteps are quiet from far away during hunts. That can only be heard within 12 meters of the ghost.']
  },
  {
    name: 'Obake',
    evidence: ['EMF 5', 'Ghost Orbs', 'Ultraviolet'],
    traits: ['Hunts at 50% sanity  |  Required Evidence: Ultraviolet', 'The Obake is the only ghost who has a chance to not leave fingerprints when touching a door if that ghost has fingerprint evidence. It can also leave a 6 finger fingerprints. While it is hunting it has a 6.66% chance each blink to transform into another ghost model of the same gender.']
  },
  {
    name: 'Obambo',
    evidence: ['Ghost Writing', 'Ultraviolet', 'DOTS'],
    traits: ['Hunts at 10% in calm state and 65% in aggressive state', 'The Obambo has two states: "calm" and "aggressive". It always starts calm at the beginning of a map, but once the front door is opened for the first time, it will become aggressive 1 minute later and every 2 minutes after that.']
  },
  {
    name: 'Oni',
    evidence: ['DOTS', 'EMF 5', 'Freezing Temps'],
    traits: ['Hunts at 50% sanity', 'The Oni is the only ghost who cannot do the airball ghost event. It will be more active, doing more ghost events and it it touches you during a ghost event it will drop your sanity by 20%. When hunting it will blink at a much faster rate.']
  },
  {
    name: 'Onryo',
    evidence: ['Freezing Temps', 'Ghost Orbs', 'Spirit Box'],
    traits: ['Hunts at 60% sanity if there are no candles around', 'The Onryo with treat candles like a crucifix. A candle can prevent a hunt. If a candle is lit on top of the crucifix it will not burn the crucifix. After it blows out a candle for the 3rd time it will initiate a hunt. Each player it kills will increase the chance of it hunting when blowing out a candle.']
  },
  {
    name: 'Phantom',
    evidence: ['DOTS', 'Spirit Box', 'Ultraviolet'],
    traits: ['Hunts at 50% sanity', 'The Phantom will roam directly to players locations. Taking a photo of the ghost will make it immediately disappear. It will not appear in ghost photos. During hunts it will blink much slower than other ghosts (between 1-2 secs).']
  },
  {
    name: 'Poltergeist',
    evidence: ['Ghost Writing', 'Spirit Box', 'Ultraviolet'],
    traits: ['Hunts at 50% sanity', 'The Poltergeist can throw multiple items at once. If it does a “polterthrow” the ghost activity will go from 0 to 100. It will throw items farther than other ghosts and during hunts it will throw items more often than other ghosts.']
  },
  {
    name: 'Raiju',
    evidence: ['DOTS', 'EMF 5', 'Ghost Orbs'],
    traits: ['Hunts at 60% sanity if there is electrical equipment around', 'The Raiju will speed up during hunts when it is near electrical equipment,']
  },
  {
    name: 'Revenant',
    evidence: ['Freezing Temps', 'Ghost Orbs', 'Ghost Writing'],
    traits: ['Hunts at 50% sanity', 'The Revenant will move very slowly when it doesn’t know where a player is but if it sees them or detects their equipment it will speed up to 3x normal speed. Breaking line of sight will cause it to travel at full speed to the players last known location. ']
  },
  {
    name: 'Shade',
    evidence: ['DOTS', 'Spirit Box', 'Ultraviolet'],
    traits: ['Hunts at 35% sanity', 'The Shade won’t throw items or hunt while players are in the ghost room. It has a higher chance to do shadow ghost events. ']
  },
  {
    name: 'Spirit',
    evidence: ['EMF 5', 'Ghost Writing', 'Spirit Box'],
    traits: ['Hunts at 50% sanity', 'The Spirit won’t be able to hunt for 3 minutes after being smudged. There’s not much else to say....']
  },
  {
    name: 'Thaye',
    evidence: ['DOTS', 'Ghost Orbs', 'Ghost Writing'],
    traits: ['Hunts at 75% sanity but will decrease as it ages', 'The Thaye will be more dangerous when it is younger. At the beginning of the game it will be faster and hunt at a higher sanity. It will increase it’s age every 1-2 minutes if there is a player nearby. Once it reaches it’s max age it will be very slow and only hunt at 15% sanity.']
  },
  {
    name: 'The Twins',
    evidence: ['EMF 5', 'Freezing Temps', 'Spirit Box'],
    traits: ['Hunts at 50% sanity', 'The Twins are two ghosts who can both interact with environment. The main ghost has a speed of 90% of normal speed and the decoy has a speed of 110% the normal speed. Either ghost can initiate the hunt, the decoy will hunt from the last location it did an interaction.']
  },
  {
    name: 'Wraith',
    evidence: ['DOTS', 'EMF 5', 'Spirit Box'],
    traits: ['Hunts at 50% sanity', 'The Wraith can teleport to a players location. When it does it will give an EMF 2 reading. It is the only ghost who cannot step in salt.']
  },
  {
    name: 'Yokai',
    evidence: ['DOTS', 'Ghost Orbs', 'Spirit Box'],
    traits: ['Hunts at 80% sanity if you are talking near it', 'The Yokai can only detect voices and equipment that are close by (2 meters) during a hunt.']
  },
  {
    name: 'Yurei',
    evidence: ['DOTS', 'Freezing Temps', 'Ghost Orbs'],
    traits: ['Hunts at 50% sanity', 'The Yurei can randomly drop a players sanity by 15%, during which it can instantly open or close a door.']
  }
]