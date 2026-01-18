
import React, { useState, useCallback } from 'react';
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

  const startQuiz = useCallback((section: Section | "All", difficulty: Difficulty | "All") => {
    let filtered = [...questions];
    
    if (section !== "All") {
      filtered = filtered.filter(q => q.section === section);
    }
    
    if (difficulty !== "All") {
      filtered = filtered.filter(q => q.difficulty === difficulty);
    }

    // Shuffle filtered questions for variety
    const shuffled = filtered.sort(() => Math.random() - 0.5);
    
    setActiveQuestions(shuffled);
    setView("QUIZ");
  }, []);

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
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
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

      <footer className="py-6 text-center text-slate-400 text-sm">
        <p>&copy; 2024 CMAT Master Prep. Designed for excellence.</p>
      </footer>
    </div>
  );
};

export default App;
