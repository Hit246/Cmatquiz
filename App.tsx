import React, { useState, useCallback, useMemo } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { questions } from './data';
import { View, Question, Section, Difficulty } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<View>("MENU");
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [finalScore, setFinalScore] = useState(0);

  // Memoize all questions to prevent re-generation on render
  const allQuestions = useMemo(() => questions, []);

  const startQuiz = useCallback((section: Section | "All", difficulty: Difficulty | "All") => {
    let filtered = [...allQuestions];
    
    if (section !== "All") {
      filtered = filtered.filter(q => q.section === section);
    }
    
    if (difficulty !== "All") {
      filtered = filtered.filter(q => q.difficulty === difficulty);
    }

    // Shuffle and pick a standard CMAT block of 20 questions
    // This allows students to take multiple unique tests from the large pool
    const shuffled = filtered
      .sort(() => Math.random() - 0.5)
      .slice(0, 20);
    
    setActiveQuestions(shuffled);
    setView("QUIZ");
  }, [allQuestions]);

  const finishQuiz = (score: number) => {
    setFinalScore(score);
    setView("RESULT");
  };

  const resetToMenu = () => {
    setView("MENU");
    setActiveQuestions([]);
    setFinalScore(0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {view === "MENU" && (
          <Menu onStartQuiz={startQuiz} />
        )}

        {view === "QUIZ" && (
          <Quiz 
            questions={activeQuestions} 
            onFinish={finishQuiz} 
          />
        )}

        {view === "RESULT" && (
          <Result 
            score={finalScore} 
            total={activeQuestions.length} 
            onReset={resetToMenu} 
          />
        )}
      </main>

      <footer className="py-8 text-center text-slate-400 text-xs border-t border-slate-100 bg-white">
        <p className="mb-1">© 2024 CMAT Master Prep Platform</p>
        <p>A comprehensive simulator for the Common Management Admission Test</p>
      </footer>
    </div>
  );
};

export default App;