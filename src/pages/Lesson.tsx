import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  getLessonById, 
  getModuleByLessonId, 
  getNextLesson, 
  getPreviousLesson 
} from '@/data/courseData';
import { getQuizForLesson, hasLessonQuiz } from '@/data/quizData';
import { useProgress } from '@/hooks/useProgress';
import { useQuizProgress } from '@/hooks/useQuizProgress';
import { useAuth } from '@/hooks/useAuth';
import Quiz from '@/components/Quiz';
import { 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Circle,
  LogOut,
  Lightbulb,
  BookOpen,
  HelpCircle,
  Trophy
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Lesson = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const { isLessonComplete, markLessonComplete, markLessonIncomplete } = useProgress();
  const { saveQuizScore, getQuizScore, isQuizCompleted, getQuizPercentage } = useQuizProgress();
  const [showQuiz, setShowQuiz] = useState(false);

  const lesson = lessonId ? getLessonById(lessonId) : undefined;
  const module = lessonId ? getModuleByLessonId(lessonId) : undefined;
  const nextLesson = lessonId ? getNextLesson(lessonId) : null;
  const previousLesson = lessonId ? getPreviousLesson(lessonId) : null;
  const lessonQuiz = lessonId ? getQuizForLesson(lessonId) : undefined;
  const hasQuiz = lessonId ? hasLessonQuiz(lessonId) : false;

  if (!lesson || !module) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Leçon non trouvée
          </h2>
          <Link to="/dashboard" className="btn-primary">
            Retour au tableau de bord
          </Link>
        </div>
      </div>
    );
  }

  const isComplete = lessonId ? isLessonComplete(lessonId) : false;
  const quizId = `lesson-${lessonId}`;
  const quizCompleted = isQuizCompleted(quizId);
  const quizPercentage = getQuizPercentage(quizId);

  const handleToggleComplete = () => {
    if (!lessonId) return;
    
    if (isComplete) {
      markLessonIncomplete(lessonId);
    } else {
      markLessonComplete(lessonId);
    }
  };

  const handleSignOut = () => {
    signOut();
    navigate('/auth');
  };

  const handleNextLesson = () => {
    if (!lessonId) return;
    
    // Mark current lesson as complete if not already
    if (!isComplete) {
      markLessonComplete(lessonId);
    }
    
    if (nextLesson) {
      navigate(`/lesson/${nextLesson.id}`);
    } else {
      navigate(`/module/${module.id}`);
    }
  };

  const handleQuizComplete = (score: number, total: number) => {
    saveQuizScore(quizId, score, total);
  };

  // Get lesson index within module
  const lessonIndex = module.lessons.findIndex(l => l.id === lessonId);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link 
                to={`/module/${module.id}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="hidden sm:inline">{module.title}</span>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg hero-gradient flex items-center justify-center">
                <Award className="h-4 w-4 text-accent" />
              </div>
              <span className="font-display font-semibold text-foreground hidden sm:inline">
                PRINCE2 Academy
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Leçon {lessonIndex + 1}/{module.lessons.length}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSignOut}
                className="text-muted-foreground hover:text-foreground"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Lesson Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-2 text-sm text-accent mb-3">
            <BookOpen className="h-4 w-4" />
            <span>{module.title}</span>
          </div>
          <h1 className="font-display text-4xl font-semibold text-foreground mb-4">
            {lesson.title}
          </h1>
          
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleToggleComplete}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                isComplete 
                  ? 'bg-success/10 text-success border border-success/20 hover:bg-success/20' 
                  : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
              }`}
            >
              {isComplete ? (
                <>
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Leçon terminée</span>
                </>
              ) : (
                <>
                  <Circle className="h-5 w-5" />
                  <span>Marquer comme terminée</span>
                </>
              )}
            </button>

            {hasQuiz && quizCompleted && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent border border-accent/20">
                <Trophy className="h-5 w-5" />
                <span>Quiz : {quizPercentage}%</span>
              </div>
            )}
          </div>
        </div>

        {/* Lesson Content */}
        <div className="prose prose-lg max-w-none animate-fade-in" style={{ animationDelay: '100ms' }}>
          <div className="space-y-6">
            {lesson.content.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-foreground/90 leading-relaxed text-lg whitespace-pre-line"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key Points */}
          {lesson.keyPoints && lesson.keyPoints.length > 0 && (
            <div className="mt-10 p-6 rounded-xl bg-accent/10 border border-accent/20">
              <div className="flex items-center gap-2 text-accent mb-4">
                <Lightbulb className="h-5 w-5" />
                <h3 className="font-display text-xl font-semibold m-0">Points clés</h3>
              </div>
              <ul className="space-y-3 m-0 p-0 list-none">
                {lesson.keyPoints.map((point, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 text-foreground/90"
                  >
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Course Images/Slides */}
          {lesson.images && lesson.images.length > 0 && (
            <div className="mt-10">
              <div className="flex items-center gap-2 text-accent mb-6">
                <BookOpen className="h-5 w-5" />
                <h3 className="font-display text-xl font-semibold m-0">Supports de cours</h3>
              </div>
              <div className="space-y-6">
                {lesson.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="rounded-xl overflow-hidden border border-border shadow-lg"
                  >
                    <img 
                      src={image} 
                      alt={`Slide ${index + 1} - ${lesson.title}`}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quiz Section */}
        {hasQuiz && lessonQuiz && (
          <div className="mt-10 animate-fade-in" style={{ animationDelay: '150ms' }}>
            {!showQuiz ? (
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <HelpCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        Quiz de la leçon
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {lessonQuiz.questions.length} questions pour tester vos connaissances
                        {quizCompleted && ` • Dernier score : ${quizPercentage}%`}
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => setShowQuiz(true)}
                    className="btn-gold gap-2"
                  >
                    {quizCompleted ? 'Refaire le quiz' : 'Commencer'}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <Quiz
                title={`Quiz - ${lesson.title}`}
                questions={lessonQuiz.questions}
                onComplete={handleQuizComplete}
                onClose={() => setShowQuiz(false)}
              />
            )}
          </div>
        )}

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-border flex items-center justify-between animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div>
            {previousLesson ? (
              <Link to={`/lesson/${previousLesson.id}`}>
                <Button variant="outline" className="gap-2">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Précédent</span>
                </Button>
              </Link>
            ) : (
              <Link to={`/module/${module.id}`}>
                <Button variant="outline" className="gap-2">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Retour au module</span>
                </Button>
              </Link>
            )}
          </div>

          <Button 
            onClick={handleNextLesson}
            className="btn-gold gap-2"
          >
            {nextLesson ? (
              <>
                <span>Suivant</span>
                <ChevronRight className="h-4 w-4" />
              </>
            ) : (
              <>
                <span>Terminer le module</span>
                <CheckCircle2 className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>

        {/* Next Lesson Preview */}
        {nextLesson && (
          <div className="mt-6 p-4 rounded-lg bg-secondary/50 border border-border animate-fade-in" style={{ animationDelay: '300ms' }}>
            <p className="text-sm text-muted-foreground mb-1">Prochaine leçon</p>
            <p className="font-display font-semibold text-foreground">{nextLesson.title}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Lesson;
