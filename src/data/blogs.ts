// Define all categories in one place - easy to add new ones
export const categories = {
  'ai': {
    key: 'ai',
    label: 'ai & related'
  },
  'experiences': {
    key: 'experiences',
    label: 'experiences'
  },
  'recommendations': {
    key: 'recommendations',
    label: 'recommendations'
  }
} as const

// Type for category keys - automatically inferred from categories map
export type CategoryKey = keyof typeof categories

export interface Blog {
  id: string
  title: string
  /** Date you wrote the blog (e.g. "Jan 15, 2024" or "2024-01-15"). */
  date: string
  summary: string
  category: CategoryKey
  /** When false, this blog is hidden from the blog list (draft/unpublished). */
  visible: boolean
}

export const blogs: Blog[] = [
  {
    id: 'running-is-harder-than-weightlifting',
    title: 'Running is Harder than Weightlifting',
    date: 'Jan 15, 2025',
    summary: 'My experience as a beginner runner and a beginner weightlifter.',
    category: 'experiences',
    visible: true
  },
  {
    id: 'how-i-got-into-research',
    title: 'How I Got Into Research',
    date: 'Feb 1, 2025',
    summary: 'A personal story of how I got into research, what I learned, and how it has changed my thought process.',
    category: 'experiences',
    visible: false
  },
  {
    id: 'ai-agi-asi',
    title: 'AI, AGI, and ASI',
    date: 'Feb 10, 2025',
    summary: '[2 min read] These terms are thrown around very loosely. I wrote this to share with my non-AI friends and family.',
    category: 'ai',
    visible: true
  },
]
