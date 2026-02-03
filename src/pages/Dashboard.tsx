import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useProgress } from '@/hooks/useProgress';
import { getModulesByDay, getTotalLessonsCountByDay, getLessonsByDay } from '@/data/courseData';
import { 
  Award, 
  BookOpen, 
  Shield, 
  Layers, 
  GitBranch, 
  Target, 
  ChevronRight,
  LogOut,
  CheckCircle2,
  FileText,
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

const Dashboard = () => {
  const { signOut } = useAuth();
  const { getModuleProgress, completedLessons } = useProgress();
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState<1 | 2>(1);

  const handleSignOut = () => {
    signOut();
    navigate('/auth');
  };

  // Filtrer les modules par jour sélectionné
  const filteredModules = getModulesByDay(selectedDay);
  const dayLessons = getLessonsByDay(selectedDay);
  const totalLessonsForDay = getTotalLessonsCountByDay(selectedDay);
  const completedInDay = dayLessons.filter(l => completedLessons.has(l.id)).length;
  const dayProgress = totalLessonsForDay > 0 ? Math.round((completedInDay / totalLessonsForDay) * 100) : 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg hero-gradient flex items-center justify-center">
              <img src="/NP1.png" alt="Logo" className=" text-accent" />
              </div>
              <div>
                <h1 className="font-display text-xl font-semibold text-foreground">
                  PRINCE2 Academy
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSignOut}
                className="text-muted-foreground hover:text-foreground"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <h2 className="font-display text-3xl font-semibold text-foreground mb-2">
            Bienvenue, Apprenant 👋
          </h2>
          <p className="text-muted-foreground text-lg">
            Continuez votre formation PRINCE2 Foundation
          </p>
        </div>

        {/* Day Selector */}
        <div className="mb-8 flex gap-4 animate-fade-in">
          <Button
            onClick={() => setSelectedDay(1)}
            variant={selectedDay === 1 ? "default" : "outline"}
            className={`flex-1 md:flex-none py-6 px-8 text-lg font-semibold transition-all ${
              selectedDay === 1 
                ? 'hero-gradient text-white border-0 shadow-lg' 
                : 'hover:border-accent'
            }`}
          >
            <BookOpen className="h-5 w-5 mr-2" />
            Jour 1 - Foundation
          </Button>
          <Button
            onClick={() => setSelectedDay(2)}
            variant={selectedDay === 2 ? "default" : "outline"}
            className={`flex-1 md:flex-none py-6 px-8 text-lg font-semibold transition-all ${
              selectedDay === 2 
                ? 'hero-gradient text-white border-0 shadow-lg' 
                : 'hover:border-accent'
            }`}
          >
            <Target className="h-5 w-5 mr-2" />
            Jour 2 - Approfondissement
          </Button>
        </div>

        {/* Progress Overview */}
        <div className="mb-10 p-6 rounded-xl hero-gradient text-white animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-2">
                Progression Jour {selectedDay}
              </h3>
              <p className="text-white/80">
                {completedInDay} leçons terminées sur {totalLessonsForDay}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex-1 min-w-[200px]">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white/80">Progression du jour</span>
                  <span className="font-semibold">{dayProgress}%</span>
                </div>
                <Progress value={dayProgress} className="h-3 bg-white/20" />
              </div>
              <div className="hidden md:flex items-center justify-center h-20 w-20 rounded-full border-4 border-accent bg-accent/20">
                <span className="font-display text-2xl font-bold">{dayProgress}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access - Memo Cards */}
        <Link
          to="/fiches-memo"
          className="mb-8 p-6 rounded-xl bg-card border border-border hover:border-accent transition-all duration-300 flex items-center justify-between group animate-fade-in"
        >
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                Fiches Mémo PRINCE2
              </h3>
              <p className="text-muted-foreground text-sm">
                7 Principes • 7 Thèmes • 7 Processus
              </p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
        </Link>

        {/* Modules Grid */}
        <div className="mb-6">
          <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
            Modules Jour {selectedDay}
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredModules.map((module, index) => {
            const moduleProgress = getModuleProgress(module.lessons.map(l => l.id));
            const completedInModule = module.lessons.filter(l => 
              completedLessons.has(l.id)
            ).length;

            return (
              <Link
                key={module.id}
                to={`/module/${module.id}`}
                className="lesson-card group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    {iconMap[module.icon] || <BookOpen className="h-6 w-6" />}
                  </div>
                  {moduleProgress === 100 && (
                    <div className="flex items-center gap-1 text-success text-sm">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Terminé</span>
                    </div>
                  )}
                </div>

                <h4 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {module.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {module.description}
                </p>

                <div className="mt-auto">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">
                      {completedInModule}/{module.lessons.length} leçons
                    </span>
                    <span className="font-medium text-foreground">{moduleProgress}%</span>
                  </div>
                  <Progress value={moduleProgress} className="h-2" />
                </div>

                <div className="flex items-center justify-end mt-4 text-sm text-accent font-medium">
                  <span className="group-hover:mr-2 transition-all">
                    {moduleProgress === 0 ? 'Commencer' : 'Continuer'}
                  </span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
