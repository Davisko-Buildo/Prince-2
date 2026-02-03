import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { 
  Award, 
  ArrowLeft,
  Shield,
  Layers,
  GitBranch,
  Target,
  Users,
  FileText,
  CheckSquare,
  TrendingUp,
  RefreshCw,
  BarChart3,
  Lightbulb,
  BookOpen,
  PlayCircle,
  Pause,
  Flag,
  ClipboardCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const principles = [
  {
    id: 1,
    title: "Justification continue pour l'entreprise",
    icon: Target,
    description: "Un projet PRINCE2 doit avoir une justification commerciale valable qui est documentée et approuvée.",
    keyPoints: [
      "Le Cas d'Affaire doit rester valide tout au long du projet",
      "Les bénéfices attendus doivent justifier les coûts et risques",
      "Le projet est arrêté si la justification n'est plus valide"
    ]
  },
  {
    id: 2,
    title: "Tirer les leçons de l'expérience",
    icon: Lightbulb,
    description: "Les équipes projet doivent chercher, enregistrer et agir sur les leçons tirées de projets précédents.",
    keyPoints: [
      "Consulter les leçons des projets antérieurs au démarrage",
      "Documenter les leçons apprises tout au long du projet",
      "Transmettre les leçons à la clôture du projet"
    ]
  },
  {
    id: 3,
    title: "Définition des rôles et responsabilités",
    icon: Users,
    description: "Un projet PRINCE2 doit avoir des rôles et responsabilités clairement définis dans une structure d'organisation.",
    keyPoints: [
      "Structure à trois niveaux : Direction, Management, Livraison",
      "Représentation des intérêts : Entreprise, Utilisateur, Fournisseur",
      "Responsabilités claires et sans ambiguïté"
    ]
  },
  {
    id: 4,
    title: "Management par séquences",
    icon: Layers,
    description: "Un projet PRINCE2 est planifié, suivi et contrôlé séquence par séquence.",
    keyPoints: [
      "Le projet est divisé en séquences de management",
      "Minimum 2 séquences : Initialisation + au moins 1 séquence de livraison",
      "Décision de continuation à chaque limite de séquence"
    ]
  },
  {
    id: 5,
    title: "Management par exception",
    icon: TrendingUp,
    description: "Un projet PRINCE2 définit des tolérances pour chaque objectif afin d'établir les limites de l'autorité déléguée.",
    keyPoints: [
      "Tolérances définies pour les 6 objectifs de performance",
      "Escalade uniquement si les tolérances sont dépassées",
      "Efficacité du management optimisée"
    ]
  },
  {
    id: 6,
    title: "Focalisation produit",
    icon: CheckSquare,
    description: "Un projet PRINCE2 est centré sur la définition et la livraison de produits, en particulier leurs exigences de qualité.",
    keyPoints: [
      "Les produits sont clairement définis avant construction",
      "Descriptions de produit avec critères de qualité",
      "Focalisation sur les livrables, pas sur les activités"
    ]
  },
  {
    id: 7,
    title: "Adaptation à l'environnement du projet",
    icon: RefreshCw,
    description: "PRINCE2 doit être adapté pour convenir à l'environnement, la taille, la complexité et le risque du projet.",
    keyPoints: [
      "Adapter les thèmes et processus au contexte",
      "Adapter la terminologie à l'organisation",
      "Intégration avec les méthodes et procédures existantes"
    ]
  }
];

const themes = [
  {
    id: 1,
    title: "Cas d'Affaire",
    icon: FileText,
    question: "Pourquoi ?",
    description: "Établit les mécanismes pour juger si le projet est souhaitable, viable et réalisable.",
    keyPoints: [
      "Justifie le démarrage et la poursuite du projet",
      "Documente les bénéfices, coûts et risques",
      "Revu à chaque limite de séquence"
    ]
  },
  {
    id: 2,
    title: "Organisation",
    icon: Users,
    question: "Qui ?",
    description: "Décrit les rôles et responsabilités de l'équipe de management de projet.",
    keyPoints: [
      "Comité de Pilotage au niveau Direction",
      "Chef de Projet au niveau Management",
      "Chef d'Équipe au niveau Livraison"
    ]
  },
  {
    id: 3,
    title: "Qualité",
    icon: CheckSquare,
    question: "Quoi ?",
    description: "Définit les moyens par lesquels le projet vérifiera que les produits sont adaptés à leur usage.",
    keyPoints: [
      "Descriptions de Produit avec critères qualité",
      "Registre Qualité pour suivre les activités",
      "Revues et tests planifiés"
    ]
  },
  {
    id: 4,
    title: "Plans",
    icon: BookOpen,
    question: "Comment, combien, quand ?",
    description: "Décrit les étapes requises pour développer des plans et les techniques PRINCE2 à appliquer.",
    keyPoints: [
      "3 niveaux de plan : Projet, Séquence, Équipe",
      "Planification basée sur les produits",
      "Plans d'Exception si nécessaire"
    ]
  },
  {
    id: 5,
    title: "Risque",
    icon: Shield,
    question: "Et si ?",
    description: "Identifie, évalue et contrôle l'incertitude pour améliorer la capacité de réussite du projet.",
    keyPoints: [
      "Menaces (risques négatifs) et Opportunités (risques positifs)",
      "Registre des Risques maintenu à jour",
      "Stratégies de réponse définies"
    ]
  },
  {
    id: 6,
    title: "Changement",
    icon: RefreshCw,
    question: "Quel est l'impact ?",
    description: "Décrit comment le Chef de Projet gère les incidences et les changements.",
    keyPoints: [
      "Incidences : problèmes, requêtes de changement, hors spécification",
      "Procédure de contrôle des changements",
      "Autorité de Changement désignée"
    ]
  },
  {
    id: 7,
    title: "Progression",
    icon: BarChart3,
    question: "Où en sommes-nous ?",
    description: "Examine la viabilité continue des plans et détermine si le projet doit continuer.",
    keyPoints: [
      "Suivi de l'avancement par rapport aux plans",
      "Rapports de progression réguliers",
      "Contrôles aux limites de séquence"
    ]
  }
];

const processes = [
  {
    id: 1,
    acronym: "EP",
    title: "Élaborer le Projet",
    icon: PlayCircle,
    phase: "Pré-projet",
    description: "S'assurer que les prérequis au démarrage du projet sont en place.",
    outputs: [
      "Exposé du Projet",
      "Équipe de management de projet provisoire",
      "Approche de management du projet provisoire",
      "Plan de Séquence d'Initialisation"
    ]
  },
  {
    id: 2,
    acronym: "DP",
    title: "Diriger le Projet",
    icon: Target,
    phase: "Tout au long du projet",
    description: "Permettre au Comité de Pilotage de prendre les décisions clés et d'exercer un contrôle global.",
    outputs: [
      "Autorisation d'initier le projet",
      "Autorisation du projet",
      "Autorisation des Plans de Séquence",
      "Orientation ad hoc"
    ]
  },
  {
    id: 3,
    acronym: "IP",
    title: "Initialiser le Projet",
    icon: Flag,
    phase: "Séquence d'initialisation",
    description: "Établir des fondations solides pour le projet.",
    outputs: [
      "Documentation d'Initialisation du Projet (DIP)",
      "Plan de Projet",
      "Stratégies (Risque, Qualité, Communication, Configuration)",
      "Registres initiaux"
    ]
  },
  {
    id: 4,
    acronym: "CS",
    title: "Contrôler une Séquence",
    icon: ClipboardCheck,
    phase: "Séquences de livraison",
    description: "Attribuer le travail, surveiller la progression, traiter les incidences et rendre compte.",
    outputs: [
      "Lots de Travaux autorisés",
      "Registres mis à jour (Risques, Incidences, Qualité)",
      "Rapports de Progression",
      "Actions correctives"
    ]
  },
  {
    id: 5,
    acronym: "LP",
    title: "Gérer la Livraison des Produits",
    icon: CheckSquare,
    phase: "Séquences de livraison",
    description: "Contrôler le lien entre le Chef de Projet et le(s) Chef(s) d'Équipe.",
    outputs: [
      "Lots de Travaux acceptés",
      "Produits livrés et approuvés",
      "Rapports de point de contrôle",
      "Registre Qualité mis à jour"
    ]
  },
  {
    id: 6,
    acronym: "LS",
    title: "Gérer une Limite de Séquence",
    icon: Pause,
    phase: "Fin de chaque séquence",
    description: "Permettre au Comité de Pilotage de revoir la séquence actuelle et d'approuver la suivante.",
    outputs: [
      "Plan de Séquence suivante",
      "Rapport de Fin de Séquence",
      "Cas d'Affaire mis à jour",
      "Plan de Projet mis à jour"
    ]
  },
  {
    id: 7,
    acronym: "CP",
    title: "Clore le Projet",
    icon: Flag,
    phase: "Clôture",
    description: "Fournir un point fixe pour confirmer l'acceptation du produit et la fin du projet.",
    outputs: [
      "Rapport de Fin de Projet",
      "Rapport sur les Leçons",
      "Produits remis à l'exploitation",
      "Recommandations de suivi"
    ]
  }
];

const MemoCards = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/dashboard">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Tableau de bord</span>
                </Button>
              </Link>
              <div className="h-10 w-10 rounded-lg hero-gradient flex items-center justify-center">
                <Award className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h1 className="font-display text-xl font-semibold text-foreground">
                  Fiches Mémo PRINCE2
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="mb-8 animate-fade-in">
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">
            Récapitulatif PRINCE2
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Retrouvez ici les 7 Principes, 7 Thèmes et 7 Processus de PRINCE2 sous forme de fiches mémo 
            pour réviser rapidement avant votre examen Foundation.
          </p>
        </div>

        {/* Tabs for Principles, Themes, Processes */}
        <Tabs defaultValue="principles" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="principles" className="gap-2">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">7 Principes</span>
              <span className="sm:hidden">Principes</span>
            </TabsTrigger>
            <TabsTrigger value="themes" className="gap-2">
              <Layers className="h-4 w-4" />
              <span className="hidden sm:inline">7 Thèmes</span>
              <span className="sm:hidden">Thèmes</span>
            </TabsTrigger>
            <TabsTrigger value="processes" className="gap-2">
              <GitBranch className="h-4 w-4" />
              <span className="hidden sm:inline">7 Processus</span>
              <span className="sm:hidden">Processus</span>
            </TabsTrigger>
          </TabsList>

          {/* Principles Tab */}
          <TabsContent value="principles" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <div
                    key={principle.id}
                    className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                          Principe {principle.id}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
                          {principle.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {principle.description}
                    </p>
                    <ul className="space-y-2">
                      {principle.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckSquare className="h-4 w-4 text-success shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          {/* Themes Tab */}
          <TabsContent value="themes" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {themes.map((theme, index) => {
                const Icon = theme.icon;
                return (
                  <div
                    key={theme.id}
                    className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center text-primary shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                          Thème {theme.id}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
                          {theme.title}
                        </h3>
                      </div>
                    </div>
                    <div className="mb-3 inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                      {theme.question}
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {theme.description}
                    </p>
                    <ul className="space-y-2">
                      {theme.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckSquare className="h-4 w-4 text-success shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          {/* Processes Tab */}
          <TabsContent value="processes" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {processes.map((process, index) => {
                const Icon = process.icon;
                return (
                  <div
                    key={process.id}
                    className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-12 w-12 rounded-lg hero-gradient flex items-center justify-center text-white shrink-0">
                        <span className="font-display font-bold text-sm">{process.acronym}</span>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                          Processus {process.id}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
                          {process.title}
                        </h3>
                      </div>
                    </div>
                    <div className="mb-3 inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {process.phase}
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {process.description}
                    </p>
                    <div className="border-t border-border pt-4">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Livrables clés
                      </p>
                      <ul className="space-y-1">
                        {process.outputs.map((output, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-accent">•</span>
                            <span className="text-foreground/80">{output}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default MemoCards;
