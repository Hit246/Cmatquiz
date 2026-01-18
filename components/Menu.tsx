
import React from 'react';
import { Section, Difficulty } from '../types';

interface MenuProps {
  onStartQuiz: (section: Section | "All", difficulty: Difficulty | "All") => void;
}

const Menu: React.FC<MenuProps> = ({ onStartQuiz }) => {
  const [section, setSection] = React.useState<Section | "All">("All");
  const [difficulty, setDifficulty] = React.useState<Difficulty | "All">("All");

  const sections: Section[] = [
    "Quantitative Techniques",
    "Logical Reasoning",
    "Language Comprehension",
    "Data Interpretation",
    "Innovation & Entrepreneurship"
  ];

  const difficulties: Difficulty[] = ["Easy", "Medium", "Hard"];

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl border border-slate-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Configure Your Practice</h2>
        <p className="text-slate-500">Choose a section and difficulty level to start your journey.</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Select Section</label>
          <select 
            value={section}
            onChange={(e) => setSection(e.target.value as any)}
            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
          >
            <option value="All">All Sections Combined</option>
            {sections.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Select Difficulty</label>
          <select 
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as any)}
            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
          >
            <option value="All">Any Difficulty</option>
            {difficulties.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>

        <button 
          onClick={() => onStartQuiz(section, difficulty)}
          className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all transform active:scale-95 shadow-lg shadow-indigo-200"
        >
          Start Practice Quiz
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
          <span className="block text-blue-600 font-bold text-lg">100%</span>
          <span className="text-xs text-blue-500 uppercase font-semibold">Free Access</span>
        </div>
        <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
          <span className="block text-emerald-600 font-bold text-lg">Detailed</span>
          <span className="text-xs text-emerald-500 uppercase font-semibold">Explanations</span>
        </div>
        <div className="p-4 bg-amber-50 rounded-xl border border-amber-100">
          <span className="block text-amber-600 font-bold text-lg">Realtime</span>
          <span className="text-xs text-amber-500 uppercase font-semibold">Feedback</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
