import { Question } from './types';

export const quantitativeQuestions: Question[] = [
  // EASY
  {
    id: 1001,
    section: "Quantitative Techniques",
    difficulty: "Easy",
    question: "What is 20% of 500?",
    options: ["100", "50", "200", "150"],
    answer: "100",
    explanation: "Calculation: (20/100) * 500 = 100."
  },
  {
    id: 1002,
    section: "Quantitative Techniques",
    difficulty: "Easy",
    question: "Simplify: 15 × 4 + 10",
    options: ["70", "60", "90", "50"],
    answer: "70",
    explanation: "BODMAS Rule: Multiplication first (15*4=60), then Addition (60+10=70).",
    hint: "Use BODMAS."
  },
  {
    id: 1003,
    section: "Quantitative Techniques",
    difficulty: "Easy",
    question: "If the cost price is $100 and profit is $20, what is the selling price?",
    options: ["$120", "$80", "$100", "$110"],
    answer: "$120",
    explanation: "Selling Price = Cost Price + Profit = 100 + 20 = 120."
  },
  {
    id: 1004,
    section: "Quantitative Techniques",
    difficulty: "Easy",
    question: "What is the average of 10, 20, 30, 40, and 50?",
    options: ["30", "25", "35", "40"],
    answer: "30",
    explanation: "Sum = 150. Count = 5. Average = 150/5 = 30."
  },
  {
    id: 1005,
    section: "Quantitative Techniques",
    difficulty: "Easy",
    question: "Convert 72 km/hr into m/s.",
    options: ["20 m/s", "25 m/s", "15 m/s", "10 m/s"],
    answer: "20 m/s",
    explanation: "72 * (5/18) = 4 * 5 = 20 m/s.",
    hint: "Multiply by 5/18."
  },
  {
    id: 1006,
    section: "Quantitative Techniques",
    difficulty: "Easy",
    question: "The sum of angles in a triangle is:",
    options: ["180 degrees", "360 degrees", "90 degrees", "270 degrees"],
    answer: "180 degrees",
    explanation: "A fundamental property of Euclidean geometry."
  },
  {
    id: 1007,
    section: "Quantitative Techniques",
    difficulty: "Easy",
    question: "Find the LCM of 4, 6, and 8.",
    options: ["24", "12", "48", "32"],
    answer: "24",
    explanation: "Multiples of 8: 8, 16, 24. 24 is divisible by 4 and 6. LCM is 24."
  },

  // MEDIUM
  {
    id: 1011,
    section: "Quantitative Techniques",
    difficulty: "Medium",
    question: "A train 150m long is running at 54 km/hr. How much time will it take to pass a pole?",
    options: ["10 sec", "15 sec", "20 sec", "5 sec"],
    answer: "10 sec",
    explanation: "Speed in m/s = 54 * (5/18) = 15 m/s. Time = Distance/Speed = 150/15 = 10 sec.",
    hint: "Convert km/hr to m/s by multiplying by 5/18."
  },
  {
    id: 1012,
    section: "Quantitative Techniques",
    difficulty: "Medium",
    question: "A can do a work in 10 days and B in 15 days. Working together, how long will they take?",
    options: ["6 days", "8 days", "12 days", "5 days"],
    answer: "6 days",
    explanation: "Formula: (A*B)/(A+B) = (10*15)/(10+15) = 150/25 = 6 days."
  },
  {
    id: 1013,
    section: "Quantitative Techniques",
    difficulty: "Medium",
    question: "The ratio of boys to girls is 3:2. If there are 60 students, how many are girls?",
    options: ["24", "36", "30", "20"],
    answer: "24",
    explanation: "Girls share = 2/(3+2) = 2/5. Total girls = 60 * (2/5) = 24."
  },
  {
    id: 1014,
    section: "Quantitative Techniques",
    difficulty: "Medium",
    question: "If x + y = 10 and x - y = 4, what is the value of x*y?",
    options: ["21", "24", "16", "20"],
    answer: "21",
    explanation: "Adding equations: 2x=14 => x=7. Sub in first: 7+y=10 => y=3. x*y = 7*3 = 21."
  },
  {
    id: 1015,
    section: "Quantitative Techniques",
    difficulty: "Medium",
    question: "A mixture contains milk and water in ratio 4:1. If 5L of water is added, ratio becomes 4:2. Find initial quantity of milk.",
    options: ["20L", "16L", "24L", "25L"],
    answer: "20L",
    explanation: "Let milk=4x, water=x. New water=x+5. Ratio 4x/(x+5) = 4/2 = 2. 4x = 2(x+5) => 4x=2x+10 => 2x=10 => x=5. Milk=4*5=20."
  },
  {
    id: 1016,
    section: "Quantitative Techniques",
    difficulty: "Medium",
    question: "Compound Interest on $1000 at 10% per annum for 2 years is:",
    options: ["$210", "$200", "$110", "$1210"],
    answer: "$210",
    explanation: "Amount = 1000 * (1.1)^2 = 1000 * 1.21 = 1210. Interest = 1210 - 1000 = 210.",
    hint: "A = P(1 + r/100)^n"
  },
  {
    id: 1017,
    section: "Quantitative Techniques",
    difficulty: "Medium",
    question: "A, B, and C invest in a business in ratio 1:2:3. If total profit is $600, what is B's share?",
    options: ["$200", "$100", "$300", "$150"],
    answer: "$200",
    explanation: "Total parts = 1+2+3 = 6. B's share = (2/6) * 600 = $200."
  },

  // HARD
  {
    id: 1021,
    section: "Quantitative Techniques",
    difficulty: "Hard",
    question: "In how many ways can the letters of 'APPLE' be arranged?",
    options: ["60", "120", "24", "720"],
    answer: "60",
    explanation: "Total letters = 5. 'P' repeats 2 times. Ways = 5! / 2! = 120 / 2 = 60.",
    hint: "Divide total factorial by factorial of repeating letters."
  },
  {
    id: 1022,
    section: "Quantitative Techniques",
    difficulty: "Hard",
    question: "Find the remainder when 7^100 is divided by 6.",
    options: ["1", "6", "5", "0"],
    answer: "1",
    explanation: "(6+1)^100 divided by 6 leaves a remainder of 1^100 = 1."
  },
  {
    id: 1023,
    section: "Quantitative Techniques",
    difficulty: "Hard",
    question: "Two pipes A and B fill a tank in 20 and 30 min. If both are open, when will the tank be full?",
    options: ["12 min", "15 min", "25 min", "50 min"],
    answer: "12 min",
    explanation: "Rate = 1/20 + 1/30 = 5/60 = 1/12. Time = 12 mins."
  },
  {
    id: 1024,
    section: "Quantitative Techniques",
    difficulty: "Hard",
    question: "The length of a rectangle is increased by 20% and breadth decreased by 10%. What is the % change in area?",
    options: ["8% increase", "10% increase", "10% decrease", "8% decrease"],
    answer: "8% increase",
    explanation: "Net effect formula: x + y + (xy)/100. 20 - 10 + (20*-10)/100 = 10 - 2 = 8%."
  },
  {
    id: 1025,
    section: "Quantitative Techniques",
    difficulty: "Hard",
    question: "A boat goes 20 km downstream in 1 hour and the same distance upstream in 2 hours. What is the speed of the stream?",
    options: ["5 km/hr", "10 km/hr", "15 km/hr", "2.5 km/hr"],
    answer: "5 km/hr",
    explanation: "Downstream speed (u+v) = 20. Upstream speed (u-v) = 10. Subtracting: 2v = 10 => v = 5.",
    hint: "Downstream = Boat + Stream, Upstream = Boat - Stream."
  },
  {
    id: 1026,
    section: "Quantitative Techniques",
    difficulty: "Hard",
    question: "What is the probability of getting a sum of 9 when rolling two dice?",
    options: ["1/9", "1/6", "1/12", "1/36"],
    answer: "1/9",
    explanation: "Pairs summing to 9: (3,6), (4,5), (5,4), (6,3). Total outcomes 36. Prob = 4/36 = 1/9."
  },
  {
    id: 1027,
    section: "Quantitative Techniques",
    difficulty: "Hard",
    question: "The sum of the first 10 terms of an Arithmetic Progression with first term 2 and common difference 3 is:",
    options: ["155", "145", "165", "135"],
    answer: "155",
    explanation: "Sum = (n/2)[2a + (n-1)d] = (10/2)[2(2) + 9(3)] = 5[4 + 27] = 5 * 31 = 155."
  }
];