export interface Capability {
  num: string
  title: string
  titleItalic?: string
  description: string
}

export const capabilities: Capability[] = [
  {
    num: '01',
    title: 'Product ',
    titleItalic: 'strategy',
    description: 'Translating ambiguous business intent into a design roadmap. Opportunity mapping, competitive teardowns, north-star flows.',
  },
  {
    num: '02',
    title: 'Interaction ',
    titleItalic: 'design',
    description: 'Flow architecture, state modelling, micro-interactions — the invisible layer that separates a tolerable product from one people love.',
  },
  {
    num: '03',
    title: 'Research & ',
    titleItalic: 'behavior',
    description: 'Amplitude analytics, session replay, moderated testing. Turning event streams into a diagnosis the team can actually act on.',
  },
  {
    num: '04',
    title: 'Visual & ',
    titleItalic: 'systems',
    description: 'Type systems, tokens, components. Designing the rules once so the team can ship fast forever.',
  },
  {
    num: '05',
    title: 'Prototyping & ',
    titleItalic: 'motion',
    description: 'Hi-fidelity Figma, Principle, and code prototypes. Motion as a communication tool, not decoration.',
  },
  {
    num: '06',
    title: 'Design & ',
    titleItalic: 'engineering',
    description: 'Fluent with front-end context. I can pair with engineers, read the PR, and make the thing ship without a translation layer.',
  },
]
