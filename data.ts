import { Question, Section, Difficulty } from './types';

// ==========================================
// STATIC SEED QUESTIONS
// ==========================================
const seedQuestions: Question[] = [
  {
    id: 1, section: "Quantitative Techniques", difficulty: "Easy",
    question: "A person crosses a 600m long street in 5 minutes. What is his speed in km/hr?",
    options: ["3.6 km/hr", "7.2 km/hr", "8.4 km/hr", "10 km/hr"],
    answer: "7.2 km/hr",
    explanation: "Speed = Distance/Time. 600m / 300s = 2 m/s. 2 * (18/5) = 7.2 km/hr.",
    hint: "Convert minutes to seconds first (300s)."
  },
  {
    id: 2, section: "Logical Reasoning", difficulty: "Medium",
    question: "SCD, TEF, UGH, ____, WKL",
    options: ["CMN", "UJI", "VIJ", "IJT"],
    answer: "VIJ",
    explanation: "The first letter follows S-T-U-V-W. The second and third letters follow CD-EF-GH-IJ-KL.",
    hint: "Observe the first letter of each triplet separately."
  },
  {
    id: 3, section: "Innovation & Entrepreneurship", difficulty: "Hard",
    question: "Which term describes a startup that reaches a valuation of $1 billion without being listed on the stock market?",
    options: ["Centaur", "Decacorn", "Unicorn", "Blue Chip"],
    answer: "Unicorn",
    explanation: "A Unicorn is a privately held startup company with a value of over $1 billion.",
    hint: "It's a mythical creature often used in venture capital terminology."
  }
];

const SECTIONS: Section[] = [
  "Quantitative Techniques",
  "Logical Reasoning",
  "Language Comprehension",
  "Data Interpretation",
  "Innovation & Entrepreneurship"
];

const DIFFICULTIES: Difficulty[] = ["Easy", "Medium", "Hard"];

const generateContextualQuestion = (id: number, section: Section, difficulty: Difficulty, index: number): Question => {
  const seed = (index + 1) * (difficulty === "Easy" ? 1 : difficulty === "Medium" ? 2 : 3);
  
  let q: Partial<Question> = { 
    id, 
    section, 
    difficulty,
    options: [],
    answer: "",
    explanation: "",
    question: ""
  };

  switch (section) {
    case "Quantitative Techniques":
      const p = 100 * seed;
      const r = 5 + (index % 5);
      const t = 2 + (index % 3);
      const si = (p * r * t) / 100;
      q.question = `Calculate the Simple Interest on a principal of Rs. ${p} at a rate of ${r}% per annum for ${t} years.`;
      q.answer = `Rs. ${si}`;
      q.options = [`Rs. ${si}`, `Rs. ${si + 10}`, `Rs. ${si - 5}`, `Rs. ${Math.round(si * 1.2)}`];
      q.explanation = `Simple Interest formula: (P × R × T) / 100. (${p} × ${r} × ${t}) / 100 = ${si}.`;
      q.hint = "SI = (Principal × Rate × Time) / 100";
      break;

    case "Logical Reasoning":
      const startNum = index + seed;
      const stepValue = difficulty === "Easy" ? 2 : difficulty === "Medium" ? 5 : 12;
      const series = [startNum, startNum + stepValue, startNum + 2 * stepValue, startNum + 3 * stepValue];
      const nextNum = startNum + 4 * stepValue;
      q.question = `Identify the missing term in the following numerical series: ${series.join(", ")}, ?`;
      q.answer = `${nextNum}`;
      q.options = [`${nextNum}`, `${nextNum + 2}`, `${nextNum - 5}`, `${nextNum + stepValue + 1}`];
      q.explanation = `The series progresses with a constant difference of ${stepValue}. ${series[3]} + ${stepValue} = ${nextNum}.`;
      q.hint = "Look for the difference between consecutive terms.";
      break;

    case "Language Comprehension":
      const vocabulary = [
        { w: "Obdurate", s: "Stubborn", h: "Think about someone who refuses to change their mind." },
        { w: "Prudent", s: "Wise", h: "Acting with or showing care for the future." },
        { w: "Laconic", s: "Brief", h: "Using very few words." },
        { w: "Enervate", s: "Weaken", h: "To feel drained of energy or vitality." },
        { w: "Garrulous", s: "Talkative", h: "Excessively fond of speaking." }
      ];
      const item = vocabulary[index % vocabulary.length];
      q.question = `Which of the following is the most appropriate synonym for the word: '${item.w}'?`;
      q.answer = item.s;
      q.options = [item.s, "Aggressive", "Cheerful", "Passive"];
      q.explanation = `'${item.w}' means to be ${item.s.toLowerCase()} or persistent in one's stance.`;
      q.hint = item.h;
      break;

    case "Data Interpretation":
      const totalPop = 1000 + (index * 50);
      const share = (15 + (index % 10)) / 100;
      const val = Math.round(totalPop * share);
      q.question = `In a statistical survey of ${totalPop} people, if Section A accounts for ${Math.round(share * 100)}% of the total, how many people fall into Section A?`;
      q.answer = `${val}`;
      q.options = [`${val}`, `${val + 25}`, `${Math.round(val * 0.8)}`, `${totalPop - val}`];
      q.explanation = `Value = (Percentage / 100) × Total. (${Math.round(share * 100)} / 100) × ${totalPop} = ${val}.`;
      q.hint = "Multiply the total by the percentage as a decimal.";
      break;

    case "Innovation & Entrepreneurship":
      const startupTerms = [
        { t: "Seed Stage", d: "The very initial stage of a startup's funding.", h: "Think of planting a tree." },
        { t: "Venture Capitalist", d: "An investor who provides capital to startups with high growth potential.", h: "Institutional investors seeking equity." },
        { t: "Scale-up", d: "A company that has passed the startup phase and is growing rapidly.", h: "Moving beyond the initial small-scale operations." },
        { t: "Incubator", d: "An organization that helps early-stage startups develop.", h: "Provides office space and mentorship." },
        { t: "Exit Strategy", d: "A plan to sell the company or go public.", h: "How founders realize their gains." }
      ];
      const term = startupTerms[index % startupTerms.length];
      q.question = `In the context of startup ecosystems, what does the term '${term.t}' primarily refer to?`;
      q.answer = term.d;
      q.options = [term.d, "A marketing strategy", "A type of bank loan", "A manufacturing process"];
      q.explanation = `'${term.t}' is defined as: ${term.d}`;
      q.hint = term.h;
      break;
  }

  // Ensure options are shuffled
  q.options = [...(q.options || [])].sort(() => Math.random() - 0.5);

  return q as Question;
};

const generateAllQuestions = (): Question[] => {
  const all: Question[] = [];
  let currentId = 100;

  SECTIONS.forEach(sec => {
    DIFFICULTIES.forEach(diff => {
      const existing = seedQuestions.filter(q => q.section === sec && q.difficulty === diff);
      const needed = 50 - existing.length;

      existing.forEach(s => all.push({ ...s, id: currentId++ }));

      for (let i = 0; i < needed; i++) {
        all.push(generateContextualQuestion(currentId++, sec, diff, i));
      }
    });
  });

  return all;
};

export const questions: Question[] = generateAllQuestions();