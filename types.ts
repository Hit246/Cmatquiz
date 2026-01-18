
export type Section = 
  | "Quantitative Techniques" 
  | "Logical Reasoning" 
  | "Language Comprehension" 
  | "Data Interpretation" 
  | "Innovation & Entrepreneurship";

export type Difficulty = "Easy" | "Medium" | "Hard";

export type View = "MENU" | "QUIZ" | "RESULT";

export interface Question {
  id: number;
  section: Section;
  difficulty: Difficulty;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  hint?: string;
}

export interface QuizState {
  questions: Question[];
  currentIndex: number;
  score: number;
  selectedSection: Section | "All";
  selectedDifficulty: Difficulty | "All";
}
