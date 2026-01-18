
import React from 'react';
import { Question } from '../types';

interface QuizProps {
  questions: Question[];
  onFinish: (score: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onFinish }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState<string | null>(null);
  const [isAnswered, setIsAnswered] = React.useState(false);
  const [showHint, setShowHint] = React.useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (option: string) => {
    if (isAnswered) return;
    
    setSelectedAnswer(option);
    setIsAnswered(true);
    
    if (option === currentQuestion.answer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setShowHint(false);
    } else {
      onFinish(score);
    }
  };

  if (!questions || questions.length === 0) {
    return (
      <div className="text-center mt-20 p-10 bg-white rounded-2xl shadow-lg border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">No Questions Found</h2>
        <p className="text-slate-500 mb-6">Sorry, we couldn't find any questions matching your selection. Try a different combination.</p>
        <button 
          onClick={() => onFinish(0)}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Back to Menu
        </button>
      </div>
    );
  }

  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto mt-6 mb-20 px-4">
      {/* Progress Header */}
      <div className="mb-6">
        <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{currentQuestion.section}</span>
          <span className="text-xs font-medium text-slate-400">Question {currentIndex + 1} of {questions.length}</span>
        </div>
        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
          <div 
            className="bg-indigo-600 h-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden mb-6">
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between mb-4">
             <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
               currentQuestion.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
               currentQuestion.difficulty === 'Medium' ? 'bg-amber-100 text-amber-700' :
               'bg-rose-100 text-rose-700'
             }`}>
               {currentQuestion.difficulty}
             </span>
          </div>
          
          <h3 className="text-lg sm:text-xl font-semibold text-slate-800 leading-relaxed mb-6">
            {currentQuestion.question}
          </h3>

          {/* Strategic Hint Section */}
          {!isAnswered && currentQuestion.hint && (
            <div className="mb-8 p-3 bg-slate-50 border border-slate-200 rounded-xl">
              {!showHint ? (
                <button 
                  onClick={() => setShowHint(true)}
                  className="flex items-center text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors uppercase tracking-widest group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-amber-500 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Reveal Strategy Hint
                </button>
              ) : (
                <div className="text-xs text-slate-600 animate-in fade-in duration-300">
                  <span className="font-bold text-amber-600 uppercase tracking-tighter mr-2">Strategy Tip:</span> 
                  {currentQuestion.hint}
                </div>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 gap-3">
            {currentQuestion.options.map((option, idx) => {
              const isCorrect = option === currentQuestion.answer;
              const isSelected = option === selectedAnswer;
              
              let buttonStyle = "border-slate-100 hover:border-indigo-200 hover:bg-slate-50";
              let labelStyle = "bg-slate-100 text-slate-500";
              
              if (isAnswered) {
                if (isCorrect) {
                  buttonStyle = "border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500";
                  labelStyle = "bg-emerald-500 text-white";
                } else if (isSelected && !isCorrect) {
                  buttonStyle = "border-rose-500 bg-rose-50 ring-1 ring-rose-500";
                  labelStyle = "bg-rose-500 text-white";
                } else {
                  buttonStyle = "border-slate-50 opacity-40 grayscale";
                }
              } else {
                if (isSelected) {
                   buttonStyle = "border-indigo-500 bg-indigo-50 ring-1 ring-indigo-500";
                   labelStyle = "bg-indigo-500 text-white";
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isAnswered}
                  onClick={() => handleAnswer(option)}
                  className={`flex items-center p-4 border-2 rounded-xl transition-all text-left group ${buttonStyle}`}
                >
                  <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg font-bold text-sm mr-4 transition-colors ${labelStyle}`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-slate-700 font-medium text-sm sm:text-base">{option}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback Section */}
        {isAnswered && (
          <div className={`p-6 sm:p-8 border-t border-slate-100 animate-in slide-in-from-bottom duration-300 ${
            selectedAnswer === currentQuestion.answer ? 'bg-emerald-50/30' : 'bg-rose-50/30'
          }`}>
            <div className="flex items-start space-x-3 mb-6">
              <div className={`mt-0.5 p-1 rounded-full flex-shrink-0 ${
                selectedAnswer === currentQuestion.answer ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'
              }`}>
                {selectedAnswer === currentQuestion.answer ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
              <div>
                <h4 className={`text-sm font-bold ${
                  selectedAnswer === currentQuestion.answer ? 'text-emerald-700' : 'text-rose-700'
                }`}>
                  {selectedAnswer === currentQuestion.answer ? 'Correct Answer' : 'Incorrect Selection'}
                </h4>
                <div className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed bg-white/50 p-3 rounded-lg border border-slate-100">
                  <span className="font-bold text-slate-800 block mb-1">Detailed Explanation:</span> 
                  {currentQuestion.explanation}
                </div>
              </div>
            </div>
            
            <button
              onClick={handleNext}
              className="w-full py-4 bg-slate-900 hover:bg-black text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center transform active:scale-[0.98]"
            >
              {currentIndex < questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
