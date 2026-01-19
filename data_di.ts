import { Question } from './types';

export const diQuestions: Question[] = [
  // EASY
  {
    id: 4001,
    section: "Data Interpretation",
    difficulty: "Easy",
    question: "If a Pie Chart sector is 90 degrees, what percentage of the total is it?",
    options: ["25%", "50%", "10%", "33%"],
    answer: "25%",
    explanation: "(90 / 360) * 100 = 25%."
  },
  {
    id: 4002,
    section: "Data Interpretation",
    difficulty: "Easy",
    question: "Sales in 2020: $100M. Sales in 2021: $120M. What is the increase?",
    options: ["$20M", "$10M", "$30M", "$120M"],
    answer: "$20M",
    explanation: "120 - 100 = 20."
  },
  {
    id: 4003,
    section: "Data Interpretation",
    difficulty: "Easy",
    question: "Table: A=10, B=20, C=30. What is the total?",
    options: ["60", "50", "70", "100"],
    answer: "60",
    explanation: "Simple addition: 10 + 20 + 30 = 60."
  },
  {
    id: 4004,
    section: "Data Interpretation",
    difficulty: "Easy",
    question: "If 50% of students passed and total students are 200, how many passed?",
    options: ["100", "50", "150", "200"],
    answer: "100",
    explanation: "50% of 200 is 100."
  },
  {
    id: 4005,
    section: "Data Interpretation",
    difficulty: "Easy",
    question: "If Total = 500 and Boys = 300, what is the ratio of Boys to Girls?",
    options: ["3:2", "2:3", "3:5", "2:5"],
    answer: "3:2",
    explanation: "Girls = 500 - 300 = 200. Ratio 300:200 = 3:2."
  },

  // MEDIUM
  {
    id: 4011,
    section: "Data Interpretation",
    difficulty: "Medium",
    question: "Average of 5 numbers is 20. If one number (10) is removed, what is the new average?",
    options: ["22.5", "20", "25", "18"],
    answer: "22.5",
    explanation: "Sum = 5*20=100. Remove 10 -> Sum=90. Count=4. New Avg = 90/4 = 22.5."
  },
  {
    id: 4012,
    section: "Data Interpretation",
    difficulty: "Medium",
    question: "Expenditure is 80% of Income. If Income is 5000, what is Savings?",
    options: ["1000", "4000", "500", "200"],
    answer: "1000",
    explanation: "Savings = 20% of 5000 = 1000."
  },
  {
    id: 4013,
    section: "Data Interpretation",
    difficulty: "Medium",
    question: "In a class of 60, ratio of boys to girls is 2:1. How many more boys are there than girls?",
    options: ["20", "10", "30", "40"],
    answer: "20",
    explanation: "Boys=40, Girls=20. Difference = 20."
  },
  {
    id: 4014,
    section: "Data Interpretation",
    difficulty: "Medium",
    question: "Production rose from 40 units to 50 units. What is the % increase?",
    options: ["25%", "20%", "10%", "50%"],
    answer: "25%",
    explanation: "Increase = 10. % = (10/40)*100 = 25%."
  },
  {
    id: 4015,
    section: "Data Interpretation",
    difficulty: "Medium",
    question: "A car travels 100km in 2hrs and 200km in the next 4hrs. Average speed?",
    options: ["50 km/hr", "60 km/hr", "45 km/hr", "55 km/hr"],
    answer: "50 km/hr",
    explanation: "Total Dist=300km. Total Time=6hrs. Avg Speed=300/6=50."
  },

  // HARD
  {
    id: 4021,
    section: "Data Interpretation",
    difficulty: "Hard",
    question: "Two groups have means 10 and 20 with weights 2 and 3. Find combined mean.",
    options: ["16", "15", "14", "18"],
    answer: "16",
    explanation: "Weighted Mean = (10*2 + 20*3) / (2+3) = (20+60)/5 = 80/5 = 16."
  },
  {
    id: 4022,
    section: "Data Interpretation",
    difficulty: "Hard",
    question: "In a bar graph, A=40, B=60. By what percentage is B more than A?",
    options: ["50%", "20%", "33%", "25%"],
    answer: "50%",
    explanation: "Difference = 20. Base = A (40). % = (20/40)*100 = 50%."
  },
  {
    id: 4023,
    section: "Data Interpretation",
    difficulty: "Hard",
    question: "Company Profit = Revenue - Cost. If Revenue increases by 20% and Cost by 10%, and initially Revenue=200, Cost=100. New Profit?",
    options: ["130", "120", "110", "140"],
    answer: "130",
    explanation: "Old Profit=100. New Rev=240, New Cost=110. New Profit=130."
  },
  {
    id: 4024,
    section: "Data Interpretation",
    difficulty: "Hard",
    question: "Pie Chart: Food(30%), Rent(25%), Others(45%). If 'Others' amount is $900, find Total Income.",
    options: ["$2000", "$1800", "$2500", "$3000"],
    answer: "$2000",
    explanation: "45% = 900. 1% = 20. 100% = 2000."
  },
  {
    id: 4025,
    section: "Data Interpretation",
    difficulty: "Hard",
    question: "Data: 5, 10, 15, x, 25. If mean is 15, find x.",
    options: ["20", "18", "15", "22"],
    answer: "20",
    explanation: "(5+10+15+x+25)/5 = 15 => 55+x = 75 => x = 20."
  },
  {
    id: 4026,
    section: "Data Interpretation",
    difficulty: "Hard",
    question: "Imports=$4000, Exports=$5000. If exports increase by 20% and imports by 10%, what is the new trade balance?",
    options: ["$1600", "$1000", "$2000", "$1500"],
    answer: "$1600",
    explanation: "New Export=6000. New Import=4400. Balance=6000-4400=1600."
  }
];