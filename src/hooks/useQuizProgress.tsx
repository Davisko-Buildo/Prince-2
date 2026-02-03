import { useState, useCallback, useEffect } from 'react';

const QUIZ_SCORES_KEY = 'prince2_quiz_scores';

interface QuizScore {
  score: number;
  total: number;
  completedAt: string;
}

interface QuizScores {
  [quizId: string]: QuizScore;
}

export const useQuizProgress = () => {
  const [quizScores, setQuizScores] = useState<QuizScores>({});

  // Charger les scores depuis localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(QUIZ_SCORES_KEY);
      if (stored) {
        setQuizScores(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading quiz scores:', error);
    }
  }, []);

  // Sauvegarder un score
  const saveQuizScore = useCallback((quizId: string, score: number, total: number) => {
    setQuizScores(prev => {
      const newScores = {
        ...prev,
        [quizId]: {
          score,
          total,
          completedAt: new Date().toISOString()
        }
      };
      localStorage.setItem(QUIZ_SCORES_KEY, JSON.stringify(newScores));
      return newScores;
    });
  }, []);

  // Obtenir le score d'un quiz
  const getQuizScore = useCallback((quizId: string): QuizScore | undefined => {
    return quizScores[quizId];
  }, [quizScores]);

  // Vérifier si un quiz a été complété
  const isQuizCompleted = useCallback((quizId: string): boolean => {
    return !!quizScores[quizId];
  }, [quizScores]);

  // Obtenir le pourcentage de réussite d'un quiz
  const getQuizPercentage = useCallback((quizId: string): number => {
    const score = quizScores[quizId];
    if (!score) return 0;
    return Math.round((score.score / score.total) * 100);
  }, [quizScores]);

  // Réinitialiser tous les scores
  const resetAllScores = useCallback(() => {
    setQuizScores({});
    localStorage.removeItem(QUIZ_SCORES_KEY);
  }, []);

  return {
    quizScores,
    saveQuizScore,
    getQuizScore,
    isQuizCompleted,
    getQuizPercentage,
    resetAllScores
  };
};
