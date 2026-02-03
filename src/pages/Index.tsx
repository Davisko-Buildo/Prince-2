import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Award, ArrowRight, Loader2 } from 'lucide-react';
import heroImage from '@/assets/hero-prince2.jpg';

const Index = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // If user is logged in, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        
        <div className="relative container mx-auto px-4 py-12">
          <div className="max-w-2xl">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8 animate-fade-in">
              <div className="h-14 w-14 rounded-xl hero-gradient flex items-center justify-center">
                <img src="/NP1.png" alt="Logo" className=" text-accent" />
              </div>
              <div>
                <h1 className="font-display text-2xl font-semibold text-foreground">
                  PRINCE2 Academy
                </h1>
                <p className="text-sm text-muted-foreground">Formation académique</p>
              </div>
            </div>

            {/* Main Content */}
            <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="badge-gold mb-6">
                Certification reconnue mondialement
              </div>
              
              <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Maîtrisez la gestion de projet avec{' '}
                <span className="text-accent">PRINCE2</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Préparez-vous à l'examen PRINCE2 Foundation avec notre plateforme interactive. 
                Apprenez les 7 principes, 7 thèmes et 7 processus qui font de PRINCE2 
                la méthode de gestion de projet la plus utilisée au monde.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="text-2xl font-display font-bold text-accent mb-1">7</div>
                  <div className="text-sm text-muted-foreground">Principes</div>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="text-2xl font-display font-bold text-accent mb-1">7</div>
                  <div className="text-sm text-muted-foreground">Thèmes</div>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="text-2xl font-display font-bold text-accent mb-1">7</div>
                  <div className="text-sm text-muted-foreground">Processus</div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth" className="btn-gold text-lg px-8 py-4">
                  Commencer la formation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/auth" 
                  className="btn-primary text-lg px-8 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Se connecter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
