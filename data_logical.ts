import { Question } from './types';

export const logicalQuestions: Question[] = [
  // EASY
  {
    id: 2001,
    section: "Logical Reasoning",
    difficulty: "Easy",
    question: "Find the next term: 2, 4, 6, 8, ?",
    options: ["10", "12", "9", "11"],
    answer: "10",
    explanation: "The series increases by 2 each time."
  },
  {
    id: 2002,
    section: "Logical Reasoning",
    difficulty: "Easy",
    question: "Doctor : Hospital :: Teacher : ?",
    options: ["School", "Office", "Field", "Factory"],
    answer: "School",
    explanation: "A doctor works in a hospital; a teacher works in a school."
  },
  {
    id: 2003,
    section: "Logical Reasoning",
    difficulty: "Easy",
    question: "Odd one out:",
    options: ["Computer", "Table", "Chair", "Sofa"],
    answer: "Computer",
    explanation: "Computer is electronic; the others are furniture."
  },
  {
    id: 2004,
    section: "Logical Reasoning",
    difficulty: "Easy",
    question: "If A=1, B=2, C=3, what is 'BED'?",
    options: ["254", "245", "154", "253"],
    answer: "254",
    explanation: "Direct number coding: B=2, E=5, D=4."
  },
  {
    id: 2005,
    section: "Logical Reasoning",
    difficulty: "Easy",
    question: "Look at this series: 36, 34, 30, 28, 24, ... What number should come next?",
    options: ["22", "20", "26", "23"],
    answer: "22",
    explanation: "Alternating subtraction: -2, -4, -2, -4. Next is 24 - 2 = 22."
  },
  {
    id: 2006,
    section: "Logical Reasoning",
    difficulty: "Easy",
    question: "Which word does NOT belong with the others?",
    options: ["Tyre", "Steering", "Engine", "Car"],
    answer: "Car",
    explanation: "Car is the whole; the others are parts of a car."
  },

  // MEDIUM
  {
    id: 2011,
    section: "Logical Reasoning",
    difficulty: "Medium",
    question: "If APPLE is coded as BQQMF (shifted +1), how is GRAPE coded?",
    options: ["HSBQF", "HQBQF", "GRBQF", "HSBQE"],
    answer: "HSBQF",
    explanation: "Each letter is shifted forward by 1: G->H, R->S, A->B, P->Q, E->F."
  },
  {
    id: 2012,
    section: "Logical Reasoning",
    difficulty: "Medium",
    question: "Pointing to a man, a woman said, 'He is the brother of the daughter of my husband's wife.'",
    options: ["Son", "Brother", "Uncle", "Father"],
    answer: "Son",
    explanation: "Husband's wife = Woman herself. Daughter of woman. Brother of daughter = Son.",
    hint: "Identify 'Husband's wife' first."
  },
  {
    id: 2013,
    section: "Logical Reasoning",
    difficulty: "Medium",
    question: "1, 4, 9, 16, 25, ?",
    options: ["36", "30", "49", "32"],
    answer: "36",
    explanation: "Squares of natural numbers: 1^2, 2^2, 3^2, 4^2, 5^2, 6^2 = 36."
  },
  {
    id: 2014,
    section: "Logical Reasoning",
    difficulty: "Medium",
    question: "A man walks 5km North, then turns Right and walks 3km. How far is he from the start point (shortest distance)?",
    options: ["5.83 km", "8 km", "2 km", "6 km"],
    answer: "5.83 km",
    explanation: "Pythagoras theorem: sqrt(5^2 + 3^2) = sqrt(25 + 9) = sqrt(34) ≈ 5.83."
  },
  {
    id: 2015,
    section: "Logical Reasoning",
    difficulty: "Medium",
    question: "Statements: No flowers are trees. All trees are plants. Conclusion: Some plants are not flowers.",
    options: ["Follows", "Does not follow", "False", "None"],
    answer: "Follows",
    explanation: "Since All trees are plants and No trees are flowers, the part of plants that are trees cannot be flowers."
  },
  {
    id: 2016,
    section: "Logical Reasoning",
    difficulty: "Medium",
    question: "If 1st January 2004 was a Thursday, what day was 1st January 2005?",
    options: ["Saturday", "Friday", "Sunday", "Monday"],
    answer: "Saturday",
    explanation: "2004 was a leap year (366 days). It has 2 odd days. Thursday + 2 = Saturday."
  },

  // HARD
  {
    id: 2021,
    section: "Logical Reasoning",
    difficulty: "Hard",
    question: "Statement: All cars are cats. Some cats are bats. Conclusion: Some cars are bats.",
    options: ["Does not follow", "Follows", "Probably true", "False"],
    answer: "Does not follow",
    explanation: "There is no direct link established between cars and bats in the premises."
  },
  {
    id: 2022,
    section: "Logical Reasoning",
    difficulty: "Hard",
    question: "Five people A, B, C, D, E sit in a row. A is left of B and right of C. D is right of B. E is left of C. Who is at the extreme left?",
    options: ["E", "C", "A", "D"],
    answer: "E",
    explanation: "Order: E - C - A - B - D. Extreme left is E.",
    hint: "Draw the positions on paper."
  },
  {
    id: 2023,
    section: "Logical Reasoning",
    difficulty: "Hard",
    question: "At what time between 3 and 4 o'clock will the hands of a clock be together?",
    options: ["3:16", "3:15", "3:18", "3:20"],
    answer: "3:16",
    explanation: "Formula approx 16 and 4/11 minutes past 3."
  },
  {
    id: 2024,
    section: "Logical Reasoning",
    difficulty: "Hard",
    question: "If South-East becomes North, North-East becomes West, what will West become?",
    options: ["South-East", "North-West", "South-West", "East"],
    answer: "South-East",
    explanation: "The rotation is 135 degrees clockwise. West rotated 135 degrees CW becomes South-East."
  },
  {
    id: 2025,
    section: "Logical Reasoning",
    difficulty: "Hard",
    question: "Six books P, Q, R, S, T, U are placed side by side. R, Q, T have blue covers, others red. Only S and U are new. Which is a new red-covered book?",
    options: ["S or U", "P", "Q", "T"],
    answer: "S or U",
    explanation: "P (Red, Old), Q (Blue, Old), R (Blue, Old), S (Red, New), T (Blue, Old), U (Red, New). S and U fit."
  },
  {
    id: 2026,
    section: "Logical Reasoning",
    difficulty: "Hard",
    question: "Statement: 'The local municipality has cancelled the summer festival due to water shortage.' This is an example of:",
    options: ["Cause and Effect", "Statement and Assumption", "Statement and Argument", "Course of Action"],
    answer: "Cause and Effect",
    explanation: "Water shortage (Cause) led to Cancellation (Effect)."
  }
];