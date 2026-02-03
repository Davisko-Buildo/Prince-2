import { useState, useEffect, useCallback } from 'react';
import { getTotalLessonsCount } from '@/data/courseData';

const PROGRESS_STORAGE_KEY = 'prince2_progress';

export const useProgress = () => {
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  // Charger la progression depuis localStorage
  const loadProgress = useCallback(() => {
    try {
      const stored = localStorage.getItem(PROGRESS_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setCompletedLessons(new Set(parsed));
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProgress();
  }, [loadProgress]);

  // Sauvegarder la progression dans localStorage
  const saveProgress = useCallback((lessons: Set<string>) => {
    try {
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify([...lessons]));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  }, []);

  // Marquer une leçon comme terminée
  const markLessonComplete = (lessonId: string) => {
    setCompletedLessons(prev => {
      const newSet = new Set([...prev, lessonId]);
      saveProgress(newSet);
      return newSet;
    });
  };

  // Marquer une leçon comme non terminée
  const markLessonIncomplete = (lessonId: string) => {
    setCompletedLessons(prev => {
      const newSet = new Set(prev);
      newSet.delete(lessonId);
      saveProgress(newSet);
      return newSet;
    });
  };

  // Vérifier si une leçon est terminée
  const isLessonComplete = (lessonId: string): boolean => {
    return completedLessons.has(lessonId);
  };

  // Obtenir la progression d'un module
  const getModuleProgress = (lessonIds: string[]): number => {
    if (lessonIds.length === 0) return 0;
    const completed = lessonIds.filter(id => completedLessons.has(id)).length;
    return Math.round((completed / lessonIds.length) * 100);
  };

  // Obtenir la progression globale
  const getOverallProgress = (): number => {
    const totalLessons = getTotalLessonsCount();
    if (totalLessons === 0) return 0;
    const progress = Math.round((completedLessons.size / totalLessons) * 100);
    return Math.min(progress, 100);
  };

  return {
    completedLessons,
    loading,
    markLessonComplete,
    markLessonIncomplete,
    isLessonComplete,
    getModuleProgress,
    getOverallProgress,
    refreshProgress: loadProgress,
  };
};
