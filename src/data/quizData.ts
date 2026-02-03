// Types pour les quiz
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswers: number[]; // Index des bonnes réponses (plusieurs possibles)
  explanation: string;
}

export interface LessonQuiz {
  lessonId: string;
  questions: QuizQuestion[];
}

export interface ModuleQuiz {
  moduleId: string;
  title: string;
  questions: QuizQuestion[];
}

// Quiz par leçon - Jour 1
export const lessonQuizzes: LessonQuiz[] = [
  // Module Introduction
  {
    lessonId: "intro-1",
    questions: [
      {
        id: "intro-1-q1",
        question: "Quels sont les objectifs de la formation PRINCE2 Foundation ?",
        options: [
          "Connaître le contexte de PRINCE2",
          "Apprendre à coder en JavaScript",
          "Passer l'examen de certification PRINCE2 Foundation",
          "Comprendre PRINCE2 et ses composantes essentielles"
        ],
        correctAnswers: [0, 2, 3],
        explanation: "La formation PRINCE2 Foundation vise à vous faire connaître le contexte de PRINCE2, passer l'examen de certification et comprendre les composantes essentielles."
      },
      {
        id: "intro-1-q2",
        question: "PRINCE2 est une méthodologie reconnue :",
        options: [
          "Uniquement en France",
          "En Europe seulement",
          "Mondialement",
          "Dans les pays anglophones uniquement"
        ],
        correctAnswers: [2],
        explanation: "PRINCE2 est une certification reconnue mondialement et utilisée dans plus de 150 pays."
      }
    ]
  },
  {
    lessonId: "intro-2",
    questions: [
      {
        id: "intro-2-q1",
        question: "Quels sont les deux impératifs que les entreprises doivent équilibrer ?",
        options: [
          "Préserver les opérations actuelles",
          "Maximiser les profits à court terme",
          "Transformer les opérations pour survivre et rivaliser",
          "Réduire les effectifs"
        ],
        correctAnswers: [0, 2],
        explanation: "Les entreprises doivent équilibrer la préservation des opérations actuelles et leur transformation pour rester compétitives."
      },
      {
        id: "intro-2-q2",
        question: "Les projets sont importants car ils permettent :",
        options: [
          "D'introduire des changements dans les organisations",
          "De maintenir le statu quo",
          "D'éviter toute transformation",
          "De gérer le changement organisationnel"
        ],
        correctAnswers: [0, 3],
        explanation: "Les projets sont le véhicule du changement organisationnel et permettent aux entreprises de se transformer."
      }
    ]
  },
  {
    lessonId: "intro-3",
    questions: [
      {
        id: "intro-3-q1",
        question: "Selon PRINCE2, un projet est :",
        options: [
          "Une organisation permanente",
          "Une organisation temporaire",
          "Créé pour livrer des produits d'entreprise",
          "Indépendant du Cas d'Affaire"
        ],
        correctAnswers: [1, 2],
        explanation: "Un projet PRINCE2 est une organisation temporaire créée pour livrer des produits conformément au Cas d'Affaire."
      }
    ]
  },
  {
    lessonId: "intro-4",
    questions: [
      {
        id: "intro-4-q1",
        question: "Quelles sont les caractéristiques d'un projet selon PRINCE2 ?",
        options: [
          "Changement",
          "Permanent",
          "Temporaire",
          "Incertitude",
          "Unique"
        ],
        correctAnswers: [0, 2, 3, 4],
        explanation: "Les projets se caractérisent par le changement, leur nature temporaire, l'incertitude et leur unicité."
      }
    ]
  },
  {
    lessonId: "intro-5",
    questions: [
      {
        id: "intro-5-q1",
        question: "Quelles sont les raisons courantes d'échec des projets ?",
        options: [
          "Chefs de projet inexpérimentés",
          "Manque d'une finalité clairement définie",
          "Trop de documentation",
          "Manque de contrôle de progression"
        ],
        correctAnswers: [0, 1, 3],
        explanation: "L'inexpérience, le manque de clarté des objectifs et l'absence de contrôle sont des causes majeures d'échec."
      }
    ]
  },
  // Module Processus
  {
    lessonId: "process-1",
    questions: [
      {
        id: "process-1-q1",
        question: "Combien de processus composent PRINCE2 ?",
        options: ["5", "6", "7", "8"],
        correctAnswers: [2],
        explanation: "PRINCE2 comprend 7 processus qui couvrent tout le cycle de vie du projet."
      },
      {
        id: "process-1-q2",
        question: "Les processus PRINCE2 décrivent :",
        options: [
          "Les activités à réaliser",
          "Les responsabilités de chaque rôle",
          "Le flux du projet du début à la fin",
          "Uniquement la phase de clôture"
        ],
        correctAnswers: [0, 1, 2],
        explanation: "Les processus décrivent les activités, les responsabilités et le flux complet du projet."
      }
    ]
  },
  {
    lessonId: "process-2",
    questions: [
      {
        id: "process-2-q1",
        question: "Que produit le processus Élaborer le Projet (EP) ?",
        options: [
          "L'Exposé du Projet",
          "Le Plan de Projet final",
          "L'équipe de management provisoire",
          "Le Rapport de Fin de Projet"
        ],
        correctAnswers: [0, 2],
        explanation: "EP produit l'Exposé du Projet et l'équipe de management de projet provisoire."
      }
    ]
  },
  {
    lessonId: "process-3",
    questions: [
      {
        id: "process-3-q1",
        question: "Le processus Diriger le Projet (DP) est utilisé par :",
        options: [
          "Le Chef de Projet",
          "Le Comité de Pilotage",
          "Les Chefs d'Équipe",
          "L'Assurance Projet"
        ],
        correctAnswers: [1],
        explanation: "DP est le processus utilisé par le Comité de Pilotage pour exercer son contrôle global."
      }
    ]
  },
  // Module Thèmes
  {
    lessonId: "themes-1",
    questions: [
      {
        id: "themes-1-q1",
        question: "Combien de thèmes composent PRINCE2 ?",
        options: ["5", "6", "7", "8"],
        correctAnswers: [2],
        explanation: "PRINCE2 comprend 7 thèmes qui doivent être appliqués de manière continue."
      },
      {
        id: "themes-1-q2",
        question: "Les thèmes PRINCE2 répondent à des questions clés telles que :",
        options: [
          "Pourquoi ?",
          "Qui ?",
          "Où se trouve le bureau ?",
          "Quoi ?"
        ],
        correctAnswers: [0, 1, 3],
        explanation: "Les thèmes répondent à Pourquoi (Cas d'Affaire), Qui (Organisation), Quoi (Qualité), etc."
      }
    ]
  },
  {
    lessonId: "themes-2",
    questions: [
      {
        id: "themes-2-q1",
        question: "Le thème Cas d'Affaire répond à quelle question ?",
        options: ["Qui ?", "Pourquoi ?", "Quand ?", "Comment ?"],
        correctAnswers: [1],
        explanation: "Le Cas d'Affaire répond à la question 'Pourquoi ?' - pourquoi le projet est-il justifié."
      },
      {
        id: "themes-2-q2",
        question: "Le Cas d'Affaire doit être revu :",
        options: [
          "Uniquement au début du projet",
          "À chaque limite de séquence",
          "À la fin du projet seulement",
          "Jamais après approbation"
        ],
        correctAnswers: [1],
        explanation: "Le Cas d'Affaire est revu à chaque limite de séquence pour vérifier sa validité continue."
      }
    ]
  },
  // Module Principes
  {
    lessonId: "principles-1",
    questions: [
      {
        id: "principles-1-q1",
        question: "Combien de principes guident PRINCE2 ?",
        options: ["5", "6", "7", "8"],
        correctAnswers: [2],
        explanation: "PRINCE2 repose sur 7 principes directeurs qui constituent sa philosophie."
      },
      {
        id: "principles-1-q2",
        question: "Les principes PRINCE2 sont :",
        options: [
          "Optionnels selon le projet",
          "Universels et obligatoires",
          "Adaptables selon les besoins",
          "Applicables à tout type de projet"
        ],
        correctAnswers: [1, 3],
        explanation: "Les 7 principes sont universels, obligatoires et applicables à tout type de projet."
      }
    ]
  },
  {
    lessonId: "principles-2",
    questions: [
      {
        id: "principles-2-q1",
        question: "Le principe 'Justification continue pour l'entreprise' signifie que :",
        options: [
          "Le projet doit avoir un Cas d'Affaire valable",
          "Le projet peut continuer sans justification",
          "La justification est vérifiée uniquement au début",
          "Le projet est arrêté si la justification n'est plus valide"
        ],
        correctAnswers: [0, 3],
        explanation: "Le projet doit maintenir une justification valable tout au long de son cycle de vie."
      }
    ]
  }
];

// Quiz récapitulatifs par module - Jour 1
export const moduleQuizzes: ModuleQuiz[] = [
  {
    moduleId: "introduction",
    title: "Quiz - Introduction à PRINCE2",
    questions: [
      {
        id: "intro-mod-q1",
        question: "Selon PRINCE2, un projet est une organisation :",
        options: [
          "Permanente avec des objectifs fixes",
          "Temporaire créée pour livrer des produits",
          "Sans date de fin définie",
          "Alignée avec un Cas d'Affaire convenu"
        ],
        correctAnswers: [1, 3],
        explanation: "Un projet PRINCE2 est temporaire et aligné avec le Cas d'Affaire."
      },
      {
        id: "intro-mod-q2",
        question: "Quelles caractéristiques définissent un projet ?",
        options: [
          "Changement",
          "Routine quotidienne",
          "Temporaire",
          "Unique",
          "Incertitude"
        ],
        correctAnswers: [0, 2, 3, 4],
        explanation: "Un projet se caractérise par le changement, sa nature temporaire, son unicité et l'incertitude."
      },
      {
        id: "intro-mod-q3",
        question: "PRINCE2 signifie :",
        options: [
          "Projects IN Controlled Environments",
          "Professional Resource IN Controlled Environments",
          "Program IN Controlled Execution",
          "C'est un acronyme sans signification"
        ],
        correctAnswers: [0],
        explanation: "PRINCE2 = PRojects IN Controlled Environments (Projets dans des Environnements Contrôlés)."
      },
      {
        id: "intro-mod-q4",
        question: "Quelles sont les causes courantes d'échec des projets ?",
        options: [
          "Manque de méthodologie",
          "Chefs de projet inexpérimentés",
          "Trop de contrôle qualité",
          "Finalité mal définie",
          "Absence de suivi de progression"
        ],
        correctAnswers: [0, 1, 3, 4],
        explanation: "L'échec vient souvent du manque de méthode, d'expérience, de clarté et de suivi."
      },
      {
        id: "intro-mod-q5",
        question: "Pourquoi les projets sont-ils importants pour les organisations ?",
        options: [
          "Ils maintiennent le statu quo",
          "Ils permettent d'introduire des changements",
          "Ils aident à transformer les opérations",
          "Ils permettent de rivaliser avec les concurrents"
        ],
        correctAnswers: [1, 2, 3],
        explanation: "Les projets sont le véhicule du changement et de la transformation organisationnelle."
      },
      {
        id: "intro-mod-q6",
        question: "La structure PRINCE2 comprend :",
        options: [
          "7 Principes",
          "7 Thèmes",
          "7 Processus",
          "5 Niveaux de management",
          "4 Phases obligatoires"
        ],
        correctAnswers: [0, 1, 2],
        explanation: "PRINCE2 est structuré autour de 7 Principes, 7 Thèmes et 7 Processus."
      }
    ]
  },
  {
    moduleId: "processes",
    title: "Quiz - Les Processus PRINCE2",
    questions: [
      {
        id: "proc-mod-q1",
        question: "Quels processus font partie de PRINCE2 ?",
        options: [
          "Élaborer le Projet (EP)",
          "Diriger le Projet (DP)",
          "Initialiser le Projet (IP)",
          "Planifier les Ressources (PR)",
          "Contrôler une Séquence (CS)"
        ],
        correctAnswers: [0, 1, 2, 4],
        explanation: "EP, DP, IP et CS font partie des 7 processus PRINCE2. PR n'existe pas."
      },
      {
        id: "proc-mod-q2",
        question: "Le processus Diriger le Projet (DP) est utilisé par :",
        options: [
          "Le Chef de Projet",
          "Le Comité de Pilotage",
          "Les Chefs d'Équipe",
          "L'Assurance Qualité"
        ],
        correctAnswers: [1],
        explanation: "DP est le processus du Comité de Pilotage pour exercer son contrôle global."
      },
      {
        id: "proc-mod-q3",
        question: "Que produit le processus Initialiser le Projet (IP) ?",
        options: [
          "L'Exposé du Projet",
          "La Documentation d'Initialisation du Projet (DIP)",
          "Le Plan de Projet",
          "Les stratégies de gestion",
          "Le Rapport de Fin de Projet"
        ],
        correctAnswers: [1, 2, 3],
        explanation: "IP produit la DIP, le Plan de Projet et les différentes stratégies."
      },
      {
        id: "proc-mod-q4",
        question: "Le processus Gérer une Limite de Séquence (LS) permet de :",
        options: [
          "Revoir la séquence actuelle",
          "Approuver la séquence suivante",
          "Clore définitivement le projet",
          "Mettre à jour le Cas d'Affaire"
        ],
        correctAnswers: [0, 1, 3],
        explanation: "LS permet de revoir, approuver et mettre à jour les plans et le Cas d'Affaire."
      },
      {
        id: "proc-mod-q5",
        question: "Quel processus est utilisé pendant toute la durée du projet ?",
        options: [
          "Élaborer le Projet (EP)",
          "Diriger le Projet (DP)",
          "Initialiser le Projet (IP)",
          "Clore le Projet (CP)"
        ],
        correctAnswers: [1],
        explanation: "Diriger le Projet (DP) s'étend sur toute la durée du projet."
      }
    ]
  },
  {
    moduleId: "themes",
    title: "Quiz - Les Thèmes PRINCE2",
    questions: [
      {
        id: "themes-mod-q1",
        question: "Quels sont les 7 thèmes de PRINCE2 ?",
        options: [
          "Cas d'Affaire",
          "Organisation",
          "Budget",
          "Qualité",
          "Plans",
          "Risque",
          "Changement",
          "Progression"
        ],
        correctAnswers: [0, 1, 3, 4, 5, 6, 7],
        explanation: "Les 7 thèmes sont : Cas d'Affaire, Organisation, Qualité, Plans, Risque, Changement, Progression."
      },
      {
        id: "themes-mod-q2",
        question: "Le thème Cas d'Affaire répond à la question :",
        options: ["Qui ?", "Pourquoi ?", "Quand ?", "Comment ?"],
        correctAnswers: [1],
        explanation: "Le Cas d'Affaire répond à 'Pourquoi ?' - la justification du projet."
      },
      {
        id: "themes-mod-q3",
        question: "Le thème Organisation répond à la question :",
        options: ["Qui ?", "Pourquoi ?", "Quand ?", "Quoi ?"],
        correctAnswers: [0],
        explanation: "Organisation répond à 'Qui ?' - les rôles et responsabilités."
      },
      {
        id: "themes-mod-q4",
        question: "Quelles affirmations sur le thème Risque sont vraies ?",
        options: [
          "Il traite des menaces uniquement",
          "Il identifie les opportunités également",
          "Le Registre des Risques doit être maintenu",
          "Les risques sont évalués une seule fois"
        ],
        correctAnswers: [1, 2],
        explanation: "Le thème Risque traite menaces ET opportunités, avec un registre maintenu à jour."
      },
      {
        id: "themes-mod-q5",
        question: "Le thème Plans répond aux questions :",
        options: [
          "Comment ?",
          "Combien ?",
          "Quand ?",
          "Pourquoi ?",
          "Où ?"
        ],
        correctAnswers: [0, 1, 2],
        explanation: "Plans répond à Comment, Combien et Quand réaliser le projet."
      }
    ]
  },
  {
    moduleId: "principles",
    title: "Quiz - Les Principes PRINCE2",
    questions: [
      {
        id: "princ-mod-q1",
        question: "Combien de principes guident PRINCE2 ?",
        options: ["5", "6", "7", "8"],
        correctAnswers: [2],
        explanation: "PRINCE2 repose sur 7 principes directeurs obligatoires."
      },
      {
        id: "princ-mod-q2",
        question: "Quels sont les principes de PRINCE2 ?",
        options: [
          "Justification continue pour l'entreprise",
          "Maximisation des profits",
          "Tirer les leçons de l'expérience",
          "Définition des rôles et responsabilités",
          "Management par séquences"
        ],
        correctAnswers: [0, 2, 3, 4],
        explanation: "Les principes incluent la justification continue, les leçons, les rôles et le management par séquences."
      },
      {
        id: "princ-mod-q3",
        question: "Le principe 'Management par exception' signifie :",
        options: [
          "Des tolérances sont définies pour chaque objectif",
          "Seules les exceptions sont gérées",
          "L'escalade se fait uniquement si les tolérances sont dépassées",
          "Le Chef de Projet gère tout seul"
        ],
        correctAnswers: [0, 2],
        explanation: "Le management par exception utilise des tolérances et l'escalade en cas de dépassement."
      },
      {
        id: "princ-mod-q4",
        question: "Le principe 'Focalisation produit' implique que :",
        options: [
          "Les produits sont définis avant construction",
          "L'accent est mis sur les activités",
          "Les critères de qualité sont spécifiés",
          "Seul le résultat final compte"
        ],
        correctAnswers: [0, 2],
        explanation: "La focalisation produit met l'accent sur la définition des produits et leurs critères qualité."
      },
      {
        id: "princ-mod-q5",
        question: "Le principe 'Adaptation' signifie que PRINCE2 doit être :",
        options: [
          "Appliqué sans modification",
          "Adapté à l'environnement du projet",
          "Personnalisé selon la taille et complexité",
          "Utilisé uniquement pour les grands projets"
        ],
        correctAnswers: [1, 2],
        explanation: "PRINCE2 doit être adapté au contexte, à la taille et à la complexité du projet."
      }
    ]
  },
  {
    moduleId: "organisation",
    title: "Quiz - Organisation du Projet",
    questions: [
      {
        id: "org-mod-q1",
        question: "Les trois niveaux de management dans PRINCE2 sont :",
        options: [
          "Direction",
          "Exécution",
          "Management",
          "Livraison",
          "Supervision"
        ],
        correctAnswers: [0, 2, 3],
        explanation: "Les 3 niveaux sont : Direction, Management et Livraison."
      },
      {
        id: "org-mod-q2",
        question: "Le Comité de Pilotage représente :",
        options: [
          "Les intérêts de l'Entreprise",
          "Les intérêts des Utilisateurs",
          "Les intérêts des Fournisseurs",
          "Les intérêts des concurrents"
        ],
        correctAnswers: [0, 1, 2],
        explanation: "Le Comité de Pilotage représente l'Entreprise, les Utilisateurs et les Fournisseurs."
      },
      {
        id: "org-mod-q3",
        question: "Le rôle de l'Exécutif est de :",
        options: [
          "Présider le Comité de Pilotage",
          "Gérer le projet au quotidien",
          "S'assurer que le projet reste justifié",
          "Réaliser les produits du projet"
        ],
        correctAnswers: [0, 2],
        explanation: "L'Exécutif préside le Comité et s'assure de la justification continue du projet."
      },
      {
        id: "org-mod-q4",
        question: "Le Chef de Projet est responsable de :",
        options: [
          "La gestion quotidienne du projet",
          "L'approbation du Cas d'Affaire",
          "La production des plans",
          "La livraison des produits dans les tolérances"
        ],
        correctAnswers: [0, 2, 3],
        explanation: "Le Chef de Projet gère le quotidien, produit les plans et livre dans les tolérances."
      }
    ]
  }
];

// Quiz Jour 2
export const moduleQuizzesJour2: ModuleQuiz[] = [
  {
    moduleId: "ip-process",
    title: "Quiz - Initialiser le Projet (IP)",
    questions: [
      {
        id: "ip-mod-q1",
        question: "Quel est l'objectif principal du processus Initialiser le Projet ?",
        options: [
          "Démarrer immédiatement la production",
          "Établir des fondations solides pour le projet",
          "Clore le projet rapidement",
          "Créer la Documentation d'Initialisation du Projet"
        ],
        correctAnswers: [1, 3],
        explanation: "IP vise à établir des fondations solides et à créer la DIP."
      },
      {
        id: "ip-mod-q2",
        question: "Quelles stratégies sont créées pendant IP ?",
        options: [
          "Stratégie de Gestion des Risques",
          "Stratégie de Gestion de la Qualité",
          "Stratégie de Marketing",
          "Stratégie de Gestion de la Communication",
          "Stratégie de Gestion de la Configuration"
        ],
        correctAnswers: [0, 1, 3, 4],
        explanation: "Les 4 stratégies PRINCE2 sont : Risques, Qualité, Communication et Configuration."
      },
      {
        id: "ip-mod-q3",
        question: "La Documentation d'Initialisation du Projet (DIP) contient :",
        options: [
          "Le Cas d'Affaire détaillé",
          "Le Plan de Projet",
          "Les stratégies de gestion",
          "Le Rapport de Fin de Projet",
          "Les descriptions de produit"
        ],
        correctAnswers: [0, 1, 2, 4],
        explanation: "La DIP contient le Cas d'Affaire, le Plan de Projet, les stratégies et descriptions de produit."
      },
      {
        id: "ip-mod-q4",
        question: "Qui approuve la DIP ?",
        options: [
          "Le Chef de Projet",
          "Le Comité de Pilotage",
          "Le Chef d'Équipe",
          "L'Assurance Qualité"
        ],
        correctAnswers: [1],
        explanation: "Le Comité de Pilotage approuve la DIP avant de démarrer les séquences de livraison."
      },
      {
        id: "ip-mod-q5",
        question: "Quels registres sont créés pendant IP ?",
        options: [
          "Registre des Risques",
          "Registre des Incidences",
          "Registre Qualité",
          "Registre des Ventes",
          "Journal du Projet"
        ],
        correctAnswers: [0, 1, 2, 4],
        explanation: "IP crée les registres des Risques, Incidences, Qualité et le Journal du Projet."
      }
    ]
  },
  {
    moduleId: "plans-theme",
    title: "Quiz - Thème Plans",
    questions: [
      {
        id: "plans-mod-q1",
        question: "Quels sont les trois niveaux de plans dans PRINCE2 ?",
        options: [
          "Plan de Projet",
          "Plan Stratégique",
          "Plan de Séquence",
          "Plan d'Équipe",
          "Plan Marketing"
        ],
        correctAnswers: [0, 2, 3],
        explanation: "Les 3 niveaux sont : Plan de Projet, Plan de Séquence et Plan d'Équipe."
      },
      {
        id: "plans-mod-q2",
        question: "Le Plan de Projet couvre :",
        options: [
          "La durée totale du projet",
          "Une seule séquence",
          "Un Lot de Travaux",
          "La vue d'ensemble du projet"
        ],
        correctAnswers: [0, 3],
        explanation: "Le Plan de Projet couvre la durée totale et donne une vue d'ensemble."
      },
      {
        id: "plans-mod-q3",
        question: "Le Plan de Séquence est créé par :",
        options: [
          "Le Comité de Pilotage",
          "Le Chef de Projet",
          "Le Chef d'Équipe",
          "L'Exécutif"
        ],
        correctAnswers: [1],
        explanation: "Le Chef de Projet crée le Plan de Séquence."
      },
      {
        id: "plans-mod-q4",
        question: "Un Plan d'Exception est utilisé quand :",
        options: [
          "Tout se passe bien",
          "Les tolérances sont dépassées ou vont l'être",
          "Le projet est terminé",
          "Une déviation significative est prévue"
        ],
        correctAnswers: [1, 3],
        explanation: "Le Plan d'Exception remplace le plan actuel en cas de dépassement des tolérances."
      },
      {
        id: "plans-mod-q5",
        question: "La planification PRINCE2 est basée sur :",
        options: [
          "Les activités",
          "Les produits",
          "Les ressources humaines",
          "Les livrables à produire"
        ],
        correctAnswers: [1, 3],
        explanation: "PRINCE2 utilise la planification basée sur les produits (livrables)."
      }
    ]
  },
  {
    moduleId: "product-planning",
    title: "Quiz - Planification Basée sur le Produit",
    questions: [
      {
        id: "pbp-mod-q1",
        question: "La planification basée sur le produit comprend :",
        options: [
          "La Description de Produit du Projet",
          "Le Diagramme de Flux des Produits",
          "Le Budget prévisionnel",
          "La Structure de Décomposition des Produits",
          "Les Descriptions de Produit"
        ],
        correctAnswers: [0, 1, 3, 4],
        explanation: "Elle comprend la Description de Produit du Projet, le diagramme de flux, la SDP et les descriptions de produit."
      },
      {
        id: "pbp-mod-q2",
        question: "La Structure de Décomposition des Produits (SDP) permet de :",
        options: [
          "Identifier tous les produits à livrer",
          "Hiérarchiser les produits",
          "Calculer le budget",
          "Montrer les dépendances entre produits"
        ],
        correctAnswers: [0, 1],
        explanation: "La SDP identifie et hiérarchise tous les produits du projet."
      },
      {
        id: "pbp-mod-q3",
        question: "Le Diagramme de Flux des Produits montre :",
        options: [
          "L'ordre de création des produits",
          "Les dépendances entre les produits",
          "Les coûts de chaque produit",
          "Les produits externes nécessaires"
        ],
        correctAnswers: [0, 1, 3],
        explanation: "Le diagramme montre l'ordre, les dépendances et les produits externes."
      },
      {
        id: "pbp-mod-q4",
        question: "Une Description de Produit contient :",
        options: [
          "Le titre et l'identifiant du produit",
          "Les critères qualité",
          "Le coût estimé",
          "La méthode de qualité",
          "Les responsabilités"
        ],
        correctAnswers: [0, 1, 3, 4],
        explanation: "Une Description de Produit contient l'identifiant, les critères qualité, la méthode et les responsabilités."
      },
      {
        id: "pbp-mod-q5",
        question: "Quels sont les avantages de la planification basée sur le produit ?",
        options: [
          "Clarté sur ce qui doit être livré",
          "Meilleure estimation des ressources",
          "Réduction des coûts automatique",
          "Identification claire des dépendances",
          "Critères de qualité définis à l'avance"
        ],
        correctAnswers: [0, 1, 3, 4],
        explanation: "Cette approche apporte clarté, meilleure estimation, identification des dépendances et qualité définie."
      }
    ]
  }
];

// Fonctions utilitaires
export const getQuizForLesson = (lessonId: string): LessonQuiz | undefined => {
  return lessonQuizzes.find(q => q.lessonId === lessonId);
};

export const getQuizForModule = (moduleId: string): ModuleQuiz | undefined => {
  return [...moduleQuizzes, ...moduleQuizzesJour2].find(q => q.moduleId === moduleId);
};

export const hasLessonQuiz = (lessonId: string): boolean => {
  return lessonQuizzes.some(q => q.lessonId === lessonId);
};

export const hasModuleQuiz = (moduleId: string): boolean => {
  return [...moduleQuizzes, ...moduleQuizzesJour2].some(q => q.moduleId === moduleId);
};
