import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { courseModules } from '@/data/courseData';
import { getQuizForModule, hasModuleQuiz } from '@/data/quizData';
import { useProgress } from '@/hooks/useProgress';
import { useQuizProgress } from '@/hooks/useQuizProgress';
import { useAuth } from '@/hooks/useAuth';
import Quiz from '@/components/Quiz';
import { 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Shield, 
  Layers, 
  GitBranch, 
  Target,
  CheckCircle2,
  LogOut,
  HelpCircle,
  Trophy,
  PlayCircle,
  ClipboardList,
  Package,
  Users,
  Scale
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="h-6 w-6" />,
  Shield: <Shield className="h-6 w-6" />,
  Layers: <Layers className="h-6 w-6" />,
  GitBranch: <GitBranch className="h-6 w-6" />,
  Target: <Target className="h-6 w-6" />,
  Award: <Award className="h-6 w-6" />,
  PlayCircle: <PlayCircle className="h-6 w-6" />,
  ClipboardList: <ClipboardList className="h-6 w-6" />,
  Package: <Package className="h-6 w-6" />,
  Users: <Users className="h-6 w-6" />,
  Scale: <Scale className="h-6 w-6" />,
};

const Module = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const { isLessonComplete, getModuleProgress } = useProgress();
  const { saveQuizScore, isQuizCompleted, getQuizPercentage } = useQuizProgress();
  const [showQuiz, setShowQuiz] = useState(false);

  const module = courseModules.find(m => m.id === moduleId);
  const moduleQuiz = moduleId ? getQuizForModule(moduleId) : undefined;
  const hasQuiz = moduleId ? hasModuleQuiz(moduleId) : false;

  if (!module) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Module non trouvé
          </h2>
          <Link to="/dashboard" className="btn-primary">
            Retour au tableau de bord
          </Link>
        </div>
      </div>
    );
  }

  const moduleProgress = getModuleProgress(module.lessons.map(l => l.id));
  const quizId = `module-${moduleId}`;
  const quizCompleted = isQuizCompleted(quizId);
  const quizPercentage = getQuizPercentage(quizId);

  const handleSignOut = () => {
    signOut();
    navigate('/auth');
  };

  const handleQuizComplete = (score: number, total: number) => {
    saveQuizScore(quizId, score, total);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link 
                to="/dashboard" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="hidden sm:inline">Tableau de bord</span>
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

      <main className="container mx-auto px-4 py-8">
        {/* Module Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-14 w-14 rounded-xl hero-gradient flex items-center justify-center text-accent">
              {iconMap[module.icon] || <BookOpen className="h-7 w-7" />}
            </div>
            <div>
              <h1 className="font-display text-3xl font-semibold text-foreground">
                {module.title}
              </h1>
              <p className="text-muted-foreground">{module.lessons.length} leçons</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            {module.description}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 max-w-md">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Progression du module</span>
                <span className="font-semibold text-foreground">{moduleProgress}%</span>
              </div>
              <Progress value={moduleProgress} className="h-3" />
            </div>
            {hasQuiz && quizCompleted && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent border border-accent/20">
                <Trophy className="h-5 w-5" />
                <span className="font-medium">Quiz : {quizPercentage}%</span>
              </div>
            )}
          </div>
        </div>

        {/* Lessons List */}
        <div className="space-y-4">
          {module.lessons.map((lesson, index) => {
            const isComplete = isLessonComplete(lesson.id);
            
            return (
              <Link
                key={lesson.id}
                to={`/lesson/${lesson.id}`}
                className={`block p-5 rounded-xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in ${
                  isComplete 
                    ? 'border-l-4 border-l-success border-success/20 bg-success/5' 
                    : 'border-border bg-card hover:border-accent/50'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                    isComplete 
                      ? 'bg-success text-success-foreground' 
                      : 'bg-secondary text-muted-foreground'
                  }`}>
                    {isComplete ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : (
                      <span className="font-semibold">{index + 1}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary">
                      {lesson.title}
                    </h3>
                    {lesson.keyPoints && (
                      <p className="text-sm text-muted-foreground mt-1 truncate">
                        {lesson.keyPoints.slice(0, 2).join(' • ')}
                      </p>
                    )}
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Module Quiz Section */}
        {hasQuiz && moduleQuiz && (
          <div className="mt-10 animate-fade-in">
            {!showQuiz ? (
              <div className="p-6 rounded-xl bg-card border-2 border-accent/30 hero-gradient-light">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                      <HelpCircle className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        Quiz récapitulatif du module
                      </h3>
                      <p className="text-muted-foreground">
                        {moduleQuiz.questions.length} questions pour valider vos acquis
                        {quizCompleted && ` • Dernier score : ${quizPercentage}%`}
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => setShowQuiz(true)}
                    className="btn-gold gap-2 px-6"
                    size="lg"
                  >
                    {quizCompleted ? 'Refaire le quiz' : 'Passer le quiz'}
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            ) : (
              <Quiz
                title={moduleQuiz.title}
                questions={moduleQuiz.questions}
                onComplete={handleQuizComplete}
                onClose={() => setShowQuiz(false)}
              />
            )}
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link to="/dashboard">
            <Button variant="outline" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Retour
            </Button>
          </Link>
          {module.lessons.length > 0 && (
            <Link to={`/lesson/${module.lessons[0].id}`}>
              <Button className="btn-gold gap-2">
                Commencer
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </main>
    </div>
  );
};

export default Module;
