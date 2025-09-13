export interface Question {
  id: string;
  question: string;
  type: 'likert' | 'choice';
  options?: { value: string; label: string; description?: string }[];
  dimensions: string[];
  reverse?: boolean;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export const assessmentSections: Section[] = [
  {
    id: 'psychometric',
    title: 'Psychometric Foundations',
    description: 'These questions measure core emotional intelligence dimensions with emphasis on reflection & relaxation.',
    questions: [
      {
        id: 'psych_1',
        question: 'I regularly take time to reflect on my day—what went well, what felt hard, what I learned.',
        type: 'likert',
        dimensions: ['self_awareness', 'motivation']
      },
      {
        id: 'psych_2',
        question: 'When I feel stressed or tired, I allow myself to rest rather than pushing through.',
        type: 'likert',
        dimensions: ['self_regulation', 'motivation']
      },
      {
        id: 'psych_3',
        question: 'I can notice early signs (mental, emotional, physical) that I need a break.',
        type: 'likert',
        dimensions: ['self_awareness', 'self_regulation']
      },
      {
        id: 'psych_4',
        question: 'I find it easy to quiet my mind (or slow down) when needed.',
        type: 'likert',
        dimensions: ['self_regulation']
      },
      {
        id: 'psych_5',
        question: 'Even when busy, I make time for things I enjoy purely for relaxation, without needing to achieve anything.',
        type: 'likert',
        dimensions: ['motivation', 'social_skills']
      },
      {
        id: 'psych_6',
        question: 'I often miss cues from others because I haven\'t paused to reflect on their feelings.',
        type: 'likert',
        dimensions: ['empathy', 'social_skills'],
        reverse: true
      },
      {
        id: 'psych_7',
        question: 'You come home after a long day; you feel mentally exhausted. What do you most likely do?',
        type: 'choice',
        dimensions: ['self_regulation', 'motivation'],
        options: [
          { value: '1', label: 'A) Keep working on tasks hoping to finish more.', description: 'Push through despite exhaustion' },
          { value: '5', label: 'B) Take a quiet break – reading, music, meditating.', description: 'Choose restorative activities' },
          { value: '2', label: 'C) Watch something distracting, scroll social media until you feel less anxious.', description: 'Seek distraction from stress' },
          { value: '1', label: 'D) Force yourself to stay up to catch up.', description: 'Override body\'s need for rest' }
        ]
      },
      {
        id: 'psych_8',
        question: 'Reflection helps me understand my emotions, triggers, and what I value.',
        type: 'likert',
        dimensions: ['self_awareness', 'motivation']
      },
      {
        id: 'psych_9',
        question: 'When I try to relax, I often feel guilty for not being productive.',
        type: 'likert',
        dimensions: ['self_regulation', 'motivation'],
        reverse: true
      },
      {
        id: 'psych_10',
        question: 'In the middle of a busy week, someone suggests you take the weekend off or do a retreat to reset your mental energy. What do you do?',
        type: 'choice',
        dimensions: ['self_regulation', 'motivation'],
        options: [
          { value: '1', label: 'A) Decline, feeling you need to keep going.', description: 'Prioritize productivity over rest' },
          { value: '5', label: 'B) Agree, planning relaxing activities and reflection time.', description: 'Embrace restorative opportunities' },
          { value: '3', label: 'C) Half-agree, but still check emails or work some.', description: 'Partial commitment to rest' },
          { value: '2', label: 'D) Say yes, but feel stressed about falling behind.', description: 'Accept rest with anxiety' }
        ]
      },
      {
        id: 'psych_11',
        question: 'I find that regular reflection (journaling, thinking, talking) improves how I manage my emotions.',
        type: 'likert',
        dimensions: ['self_awareness', 'social_skills']
      },
      {
        id: 'psych_12',
        question: 'You receive feedback you didn\'t expect; instead of reacting immediately, you:',
        type: 'choice',
        dimensions: ['self_awareness', 'self_regulation'],
        options: [
          { value: '1', label: 'A) Respond right away, possibly defensively.', description: 'React without processing' },
          { value: '5', label: 'B) Pause, reflect internally, maybe journal, later respond.', description: 'Take time to process thoughtfully' },
          { value: '2', label: 'C) Ignore feedback hoping it will go away.', description: 'Avoid dealing with it' },
          { value: '1', label: 'D) Overthink, second-guessing yourself for days.', description: 'Get stuck in rumination' }
        ]
      }
    ]
  },
  {
    id: 'personality',
    title: 'Personality & Emotional Style',
    description: 'These help understand what emotional style or temperament may make balancing reflection & relaxation easier or harder.',
    questions: [
      {
        id: 'pers_1',
        question: 'I feel guilty when I am not doing something "productive".',
        type: 'likert',
        dimensions: ['conscientiousness', 'motivation']
      },
      {
        id: 'pers_2',
        question: 'I enjoy quiet, downtime, being still, meditating, or simply resting.',
        type: 'likert',
        dimensions: ['introversion', 'self_regulation']
      },
      {
        id: 'pers_3',
        question: 'When stressed, I often think about what I did wrong or why I feel this way.',
        type: 'likert',
        dimensions: ['rumination', 'self_awareness']
      },
      {
        id: 'pers_4',
        question: 'I prefer to talk through my feelings with someone rather than sit with them alone.',
        type: 'likert',
        dimensions: ['social_skills', 'expressiveness']
      },
      {
        id: 'pers_5',
        question: 'I need structured rest or relaxation (planned, scheduled) rather than "just winging it".',
        type: 'likert',
        dimensions: ['conscientiousness', 'self_regulation']
      },
      {
        id: 'pers_6',
        question: 'I trust others to support me when I take time off or rest.',
        type: 'likert',
        dimensions: ['attachment', 'social_skills']
      },
      {
        id: 'pers_7',
        question: 'I believe rest and downtime are important for long-term success.',
        type: 'likert',
        dimensions: ['motivation', 'growth_mindset']
      },
      {
        id: 'pers_8',
        question: 'When I reflect, I often discover things I can change for the better.',
        type: 'likert',
        dimensions: ['self_awareness', 'motivation']
      }
    ]
  }
];

export const DIMENSION_LABELS = {
  self_awareness: 'Self-Awareness',
  self_regulation: 'Self-Regulation', 
  empathy: 'Empathy',
  social_skills: 'Social Skills',
  motivation: 'Motivation',
  conscientiousness: 'Conscientiousness',
  introversion: 'Introversion',
  rumination: 'Rumination Tendency',
  expressiveness: 'Expressiveness',
  attachment: 'Attachment Security',
  growth_mindset: 'Growth Mindset'
};