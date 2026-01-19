import { Question } from './types';

export const languageQuestions: Question[] = [
  // EASY
  {
    id: 3001,
    section: "Language Comprehension",
    difficulty: "Easy",
    question: "Synonym of HAPPY:",
    options: ["Joyful", "Sad", "Angry", "Fast"],
    answer: "Joyful",
    explanation: "Both words relate to a positive emotional state."
  },
  {
    id: 3002,
    section: "Language Comprehension",
    difficulty: "Easy",
    question: "Antonym of FAST:",
    options: ["Slow", "Quick", "Rapid", "Speedy"],
    answer: "Slow",
    explanation: "Fast means high speed; Slow means low speed."
  },
  {
    id: 3003,
    section: "Language Comprehension",
    difficulty: "Easy",
    question: "He ____ to the market yesterday.",
    options: ["went", "go", "gone", "going"],
    answer: "went",
    explanation: "Past tense is required for 'yesterday'."
  },
  {
    id: 3004,
    section: "Language Comprehension",
    difficulty: "Easy",
    question: "Plural of 'Child':",
    options: ["Children", "Childs", "Childrens", "Childes"],
    answer: "Children",
    explanation: "Irregular plural noun."
  },
  {
    id: 3005,
    section: "Language Comprehension",
    difficulty: "Easy",
    question: "Identify the noun: 'She runs fast'.",
    options: ["She", "runs", "fast", "None"],
    answer: "She",
    explanation: "'She' is a pronoun acting as the subject noun phrase."
  },
  {
    id: 3006,
    section: "Language Comprehension",
    difficulty: "Easy",
    question: "Select the correct article: 'He is ___ honest man.'",
    options: ["an", "a", "the", "no article"],
    answer: "an",
    explanation: "'Honest' starts with a vowel sound (O), so 'an' is used."
  },

  // MEDIUM
  {
    id: 3011,
    section: "Language Comprehension",
    difficulty: "Medium",
    question: "Find the error: 'Neither of the boys were present.'",
    options: ["were", "Neither", "boys", "present"],
    answer: "were",
    explanation: "'Neither' takes a singular verb. Correct: 'Neither of the boys WAS present'.",
    hint: "Neither is singular."
  },
  {
    id: 3012,
    section: "Language Comprehension",
    difficulty: "Medium",
    question: "Idiom: 'Break the ice' means:",
    options: ["Start a conversation", "Break a window", "Feel cold", "End a friendship"],
    answer: "Start a conversation",
    explanation: "To relieve tension or silence in a social setting."
  },
  {
    id: 3013,
    section: "Language Comprehension",
    difficulty: "Medium",
    question: "One word substitution: 'A person who does not believe in God'",
    options: ["Atheist", "Theist", "Agnostic", "Pagan"],
    answer: "Atheist",
    explanation: "Atheist specifically defines lack of belief in deities."
  },
  {
    id: 3014,
    section: "Language Comprehension",
    difficulty: "Medium",
    question: "Select the correct spelling:",
    options: ["Accommodation", "Acommodation", "Accomodation", "Acomodation"],
    answer: "Accommodation",
    explanation: "Double 'c' and double 'm'."
  },
  {
    id: 3015,
    section: "Language Comprehension",
    difficulty: "Medium",
    question: "Fill blank: The jury ____ divided in their opinion.",
    options: ["were", "was", "is", "has"],
    answer: "were",
    explanation: "When a collective noun acts individually (divided opinion), use plural verb."
  },
  {
    id: 3016,
    section: "Language Comprehension",
    difficulty: "Medium",
    question: "Convert to Passive: 'Someone stole my watch.'",
    options: ["My watch was stolen.", "My watch had been stolen.", "My watch is stolen.", "Someone had stolen my watch."],
    answer: "My watch was stolen.",
    explanation: "Simple past active becomes 'was/were + past participle' in passive."
  },

  // HARD
  {
    id: 3021,
    section: "Language Comprehension",
    difficulty: "Hard",
    question: "Meaning of EPHEMERAL:",
    options: ["Short-lived", "Eternal", "Heavy", "Beautiful"],
    answer: "Short-lived",
    explanation: "Ephemeral means lasting for a very short time."
  },
  {
    id: 3022,
    section: "Language Comprehension",
    difficulty: "Hard",
    question: "Rearrange: (A) outcome (B) significant (C) led to a (D) The policy",
    options: ["DCBA", "ABCD", "DBCA", "DCAB"],
    answer: "DCBA",
    explanation: "The policy (D) led to a (C) significant (B) outcome (A)."
  },
  {
    id: 3023,
    section: "Language Comprehension",
    difficulty: "Hard",
    question: "Analogy -> OBFUSCATE : CLARIFY :: ____ : ____",
    options: ["MITIGATE : AGGRAVATE", "LOVE : LIKE", "RUN : WALK", "SEE : LOOK"],
    answer: "MITIGATE : AGGRAVATE",
    explanation: "Relationship is Antonyms. Obfuscate is opposite of Clarify. Mitigate (lessen) is opposite of Aggravate (worsen)."
  },
  {
    id: 3024,
    section: "Language Comprehension",
    difficulty: "Hard",
    question: "Which word is an oxymoron?",
    options: ["Deafening silence", "Loud noise", "Fast car", "Bright light"],
    answer: "Deafening silence",
    explanation: "Oxymoron combines contradictory terms."
  },
  {
    id: 3025,
    section: "Language Comprehension",
    difficulty: "Hard",
    question: "Identify the figure of speech: 'The wind howled in the night.'",
    options: ["Personification", "Simile", "Metaphor", "Hyperbole"],
    answer: "Personification",
    explanation: "Giving human qualities (howling) to inanimate objects (wind)."
  },
  {
    id: 3026,
    section: "Language Comprehension",
    difficulty: "Hard",
    question: "What does the Latin phrase 'Ad hoc' mean?",
    options: ["For a specific purpose", "From the beginning", "Endlessly", "Buyer beware"],
    answer: "For a specific purpose",
    explanation: "Ad hoc means created or done for a particular purpose as necessary."
  }
];