import { useState, useEffect } from 'react';
import { QuizQuestion } from '@/data/quizData';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  RotateCcw,
  Trophy,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuizProps {
  title: string;
  questions: QuizQuestion[];
  onComplete?: (score: number, total: number) => void;
  onClose?: () => void;
}

const Quiz = ({ title, questions, onComplete, onClose }: QuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const isMultipleChoice = currentQuestion.correctAnswers.length > 1;

  const handleSelectAnswer = (index: number) => {
    if (hasSubmitted) return;

    if (isMultipleChoice) {
      setSelectedAnswers(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setSelectedAnswers([index]);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswers.length === 0) return;

    setHasSubmitted(true);
    setAnsweredQuestions(prev => new Set([...prev, currentQuestionIndex]));

    // Vérifier si la réponse est correcte
    const correctAnswers = currentQuestion.correctAnswers;
    const isCorrect = 
      selectedAnswers.length === correctAnswers.length &&
      selectedAnswers.every(a => correctAnswers.includes(a));

    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswers([]);
      setHasSubmitted(false);
    } else {
      setIsComplete(true);
      onComplete?.(score, questions.length);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setHasSubmitted(false);
    setScore(0);
    setIsComplete(false);
    setAnsweredQuestions(new Set());
  };

  const getOptionClass = (index: number) => {
    const isSelected = selectedAnswers.includes(index);
    const isCorrect = currentQuestion.correctAnswers.includes(index);

    if (!hasSubmitted) {
      return cn(
        "p-4 rounded-lg border-2 cursor-pointer transition-all",
        isSelected 
          ? "border-accent bg-accent/10" 
          : "border-border hover:border-accent/50 hover:bg-secondary/50"
      );
    }

    if (isCorrect) {
      return "p-4 rounded-lg border-2 border-success bg-success/10";
    }

    if (isSelected && !isCorrect) {
      return "p-4 rounded-lg border-2 border-destructive bg-destructive/10";
    }

    return "p-4 rounded-lg border-2 border-border opacity-50";
  };

  if (isComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    const isPassing = percentage >= 70;

    return (
      <div className="bg-card rounded-xl border border-border p-6 md:p-8 animate-fade-in">
        <div className="text-center">
          <div className={cn(
            "h-20 w-20 rounded-full mx-auto mb-6 flex items-center justify-center",
            isPassing ? "bg-success/20" : "bg-warning/20"
          )}>
            {isPassing ? (
              <Trophy className="h-10 w-10 text-success" />
            ) : (
              <AlertCircle className="h-10 w-10 text-warning" />
            )}
          </div>

          <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
            {isPassing ? "Félicitations !" : "Continuez vos efforts !"}
          </h3>

          <p className="text-muted-foreground mb-6">
            {isPassing 
              ? "Vous avez réussi ce quiz avec succès."
              : "Révisez le contenu et réessayez pour améliorer votre score."
            }
          </p>

          <div className="bg-secondary/50 rounded-xl p-6 mb-6">
            <div className="text-4xl font-display font-bold text-foreground mb-2">
              {score}/{questions.length}
            </div>
            <div className="text-sm text-muted-foreground">
              {percentage}% de bonnes réponses
            </div>
            <Progress value={percentage} className="h-3 mt-4" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleRestart}
              variant="outline"
              className="gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Recommencer
            </Button>
            {onClose && (
              <Button onClick={onClose} className="btn-gold gap-2">
                Continuer
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl border border-border p-6 md:p-8 animate-fade-in">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-xl font-semibold text-foreground">
            {title}
          </h3>
          <span className="text-sm text-muted-foreground">
            Question {currentQuestionIndex + 1}/{questions.length}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question */}
      <div className="mb-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-semibold text-accent">
              {currentQuestionIndex + 1}
            </span>
          </div>
          <div>
            <p className="text-lg font-medium text-foreground">
              {currentQuestion.question}
            </p>
            {isMultipleChoice && (
              <p className="text-sm text-accent mt-1">
                (Plusieurs réponses possibles)
              </p>
            )}
          </div>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className={getOptionClass(index)}
              onClick={() => handleSelectAnswer(index)}
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  "h-6 w-6 rounded-full border-2 flex items-center justify-center flex-shrink-0",
                  selectedAnswers.includes(index) 
                    ? "border-accent bg-accent" 
                    : "border-muted-foreground/30"
                )}>
                  {hasSubmitted && currentQuestion.correctAnswers.includes(index) && (
                    <CheckCircle2 className="h-4 w-4 text-success" />
                  )}
                  {hasSubmitted && selectedAnswers.includes(index) && !currentQuestion.correctAnswers.includes(index) && (
                    <XCircle className="h-4 w-4 text-destructive" />
                  )}
                  {!hasSubmitted && selectedAnswers.includes(index) && (
                    <div className="h-2 w-2 rounded-full bg-white" />
                  )}
                </div>
                <span className={cn(
                  "text-sm",
                  hasSubmitted && currentQuestion.correctAnswers.includes(index)
                    ? "text-success font-medium"
                    : hasSubmitted && selectedAnswers.includes(index) && !currentQuestion.correctAnswers.includes(index)
                    ? "text-destructive"
                    : "text-foreground"
                )}>
                  {option}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Explanation */}
        {hasSubmitted && (
          <div className="mt-4 p-4 rounded-lg bg-secondary/50 border border-border animate-fade-in">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Explication :</strong>{" "}
              {currentQuestion.explanation}
            </p>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-between">
        <div className="text-sm text-muted-foreground">
          Score : {score}/{answeredQuestions.size}
        </div>
        <div className="flex gap-3">
          {!hasSubmitted ? (
            <Button 
              onClick={handleSubmit}
              disabled={selectedAnswers.length === 0}
              className="btn-gold"
            >
              Valider
            </Button>
          ) : (
            <Button onClick={handleNext} className="btn-gold gap-2">
              {currentQuestionIndex < questions.length - 1 ? "Suivant" : "Voir les résultats"}
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
