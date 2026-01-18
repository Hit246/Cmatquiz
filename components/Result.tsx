
import React from 'react';

interface ResultProps {
  score: number;
  total: number;
  onReset: () => void;
}

const Result: React.FC<ResultProps> = ({ score, total, onReset }) => {
  const percentage = Math.round((score / total) * 100);
  
  let message = "Good effort!";
  let iconColor = "text-amber-500";
  
  if (percentage >= 80) {
    message = "Outstanding! You're ready!";
    iconColor = "text-emerald-500";
  } else if (percentage >= 50) {
    message = "Getting there! Keep practicing.";
    iconColor = "text-indigo-500";
  } else {
    message = "Need more focus. Try again.";
    iconColor = "text-rose-500";
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 sm:p-12 bg-white rounded-3xl shadow-2xl border border-slate-100 text-center">
      <div className={`mb-6 flex justify-center ${iconColor}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      </div>

      <h2 className="text-3xl font-bold text-slate-800 mb-2">Quiz Complete</h2>
      <p className="text-slate-500 mb-8">{message}</p>

      <div className="flex flex-col items-center mb-10">
        <div className="relative">
          <svg className="w-32 h-32 transform -rotate-90">
            <circle
              className="text-slate-100"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r="58"
              cx="64"
              cy="64"
            />
            <circle
              className={percentage >= 80 ? 'text-emerald-500' : percentage >= 50 ? 'text-indigo-500' : 'text-rose-500'}
              strokeWidth="8"
              strokeDasharray={364}
              strokeDashoffset={364 - (364 * percentage) / 100}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="58"
              cx="64"
              cy="64"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-black text-slate-800">{score}/{total}</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Correct</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <span className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Accuracy</span>
          <span className="text-xl font-bold text-slate-800">{percentage}%</span>
        </div>
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <span className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Points</span>
          <span className="text-xl font-bold text-slate-800">{score * 4}</span>
        </div>
      </div>

      <button
        onClick={onReset}
        className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-100 transform active:scale-95"
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default Result;
