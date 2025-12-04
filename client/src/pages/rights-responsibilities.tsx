import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Scale,
  Palette,
  BookOpen,
  Building2,
  Crown,
  Users,
  Church,
  Lightbulb,
  GraduationCap,
  Heart,
  Landmark,
  Quote
} from "lucide-react";

interface ThemeSection {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  rights: {
    title: string;
    description: string;
    examples: string[];
  }[];
  responsibilities: {
    title: string;
    description: string;
    examples: string[];
  }[];
  quote?: {
    text: string;
    author: string;
    source: string;
  };
}

const themeSections: ThemeSection[] = [
  {
    id: "artistic",
    title: "Artistic Expression",
    description: "The Renaissance transformed how society viewed artists and their creative freedom.",
    icon: <Palette className="h-5 w-5" />,
    rights: [
      {
        title: "Individual Creative Vision",
        description: "Renaissance artists increasingly asserted their right to personal artistic expression and interpretation.",
        examples: [
          "Michelangelo's insistence on his own design for the Sistine Chapel ceiling, rather than following the Pope's original plan",
          "Leonardo da Vinci's extensive experimentation with new techniques and subjects",
          "Artists signing their works prominently, claiming authorship and fame"
        ]
      },
      {
        title: "Professional Recognition",
        description: "Artists fought for recognition as intellectual creators rather than mere manual laborers.",
        examples: [
          "Vasari's 'Lives of the Artists' celebrated individual artistic genius",
          "Artists were increasingly welcomed at court as respected members of society",
          "The establishment of art academies that elevated artists' status"
        ]
      }
    ],
    responsibilities: [
      {
        title: "Serving Patrons",
        description: "Despite creative freedom, artists bore responsibility to fulfill commissions according to patrons' requirements.",
        examples: [
          "Meeting deadlines and specifications set by wealthy patrons",
          "Creating works that glorified patrons' families and political power",
          "Maintaining workshop standards and training apprentices"
        ]
      },
      {
        title: "Religious Orthodoxy",
        description: "Artists had to navigate religious expectations while pursuing creative expression.",
        examples: [
          "Religious subjects remained dominant in commissioned art",
          "The Church could censor or destroy works deemed inappropriate",
          "Artists like Botticelli destroyed some works during Savonarola's influence"
        ]
      }
    ],
    quote: {
      text: "The painter has the Universe in his mind and hands.",
      author: "Leonardo da Vinci",
      source: "Treatise on Painting"
    }
  },
  {
    id: "intellectual",
    title: "Intellectual Inquiry",
    description: "Humanist scholars championed new ways of thinking about knowledge and learning.",
    icon: <BookOpen className="h-5 w-5" />,
    rights: [
      {
        title: "Study of Classical Texts",
        description: "Humanists claimed the right to study Greek and Roman sources directly, without Church interpretation.",
        examples: [
          "Petrarch's recovery and study of Cicero's letters",
          "Greek scholars teaching ancient Greek language in Italian universities",
          "Translation of Plato's works directly from Greek"
        ]
      },
      {
        title: "Scientific Observation",
        description: "Scholars increasingly asserted the right to understand nature through direct observation.",
        examples: [
          "Leonardo's anatomical studies from direct dissection",
          "Copernicus's astronomical observations challenging geocentrism",
          "Vesalius's accurate anatomical drawings from human dissection"
        ]
      }
    ],
    responsibilities: [
      {
        title: "Preservation of Knowledge",
        description: "Scholars bore responsibility to collect, preserve, and transmit classical learning.",
        examples: [
          "Copying and cataloguing ancient manuscripts",
          "Establishing libraries like the Vatican Library and Laurentian Library",
          "Teaching the next generation of humanist scholars"
        ]
      },
      {
        title: "Civic Education",
        description: "Humanists felt responsible for educating citizens and rulers in virtue.",
        examples: [
          "Writing treatises on education and proper governance",
          "Serving as tutors to noble children",
          "Composing histories that taught moral lessons"
        ]
      }
    ],
    quote: {
      text: "In order to form good habits we must be made to feel that there is nothing more worthy of love and admiration than human beings.",
      author: "Giovanni Pico della Mirandola",
      source: "Oration on the Dignity of Man (1486)"
    }
  },
  {
    id: "civic",
    title: "Civic Participation",
    description: "Italian city-states experimented with republican governance and citizen involvement.",
    icon: <Landmark className="h-5 w-5" />,
    rights: [
      {
        title: "Political Participation",
        description: "Citizens in city-states like Florence had rights to vote and hold office.",
        examples: [
          "Florence's republican government with rotating offices",
          "Venice's Great Council where nobles voted on legislation",
          "Guild members participating in city governance"
        ]
      },
      {
        title: "Economic Freedom",
        description: "The Renaissance expanded economic rights for merchants and artisans.",
        examples: [
          "Guild systems protecting artisans' right to practice their trade",
          "Banking families like the Medici accumulating unprecedented wealth",
          "International trade rights negotiated between city-states"
        ]
      }
    ],
    responsibilities: [
      {
        title: "Military Service",
        description: "Citizens bore responsibility to defend their city-states.",
        examples: [
          "Militia systems requiring citizens to serve in defense",
          "Wealthy families funding condottieri (mercenary) companies",
          "Machiavelli's arguments for citizen armies over mercenaries"
        ]
      },
      {
        title: "Public Contribution",
        description: "Wealthy citizens were expected to contribute to the public good.",
        examples: [
          "Taxes and forced loans (prestanze) to fund city projects",
          "Commissioning public art and architecture",
          "Supporting hospitals, orphanages, and charitable institutions"
        ]
      }
    ],
    quote: {
      text: "A republic has greater vitality and enjoys good fortune longer than a principality, for it can adapt itself more easily to changing circumstances.",
      author: "Niccolò Machiavelli",
      source: "Discourses on Livy"
    }
  },
  {
    id: "patronage",
    title: "Patronage & Power",
    description: "The patronage system defined relationships between wealth, art, and social obligation.",
    icon: <Crown className="h-5 w-5" />,
    rights: [
      {
        title: "Display of Wealth",
        description: "Wealthy families claimed the right to demonstrate their status through art and architecture.",
        examples: [
          "The Medici Palace as a statement of family power",
          "Private chapels decorated by famous artists",
          "Commissioned portraits and family histories"
        ]
      },
      {
        title: "Cultural Leadership",
        description: "Patrons positioned themselves as cultural leaders and tastemakers.",
        examples: [
          "Lorenzo de' Medici's Platonic Academy",
          "Isabella d'Este's famous studiolo collection",
          "Pope Julius II's transformation of Rome"
        ]
      }
    ],
    responsibilities: [
      {
        title: "Supporting Artists and Scholars",
        description: "Patrons bore responsibility to support the arts and learning.",
        examples: [
          "The Medici family supporting Botticelli, Michelangelo, and many others",
          "Pope Nicholas V founding the Vatican Library",
          "Wealthy merchants funding public sculptures and buildings"
        ]
      },
      {
        title: "Public Welfare",
        description: "With great wealth came expectation of public generosity.",
        examples: [
          "Funding hospitals like the Ospedale degli Innocenti",
          "Providing grain during famines",
          "Building churches and public spaces for community use"
        ]
      }
    ],
    quote: {
      text: "I have only done what was my duty. All that I have expended has only been paid back to me, and all that I have spent has been spent for the honor of God and for the good of our city.",
      author: "Cosimo de' Medici",
      source: "Attributed, c. 1460"
    }
  },
  {
    id: "religious",
    title: "Religious Life",
    description: "The Renaissance period saw tensions between tradition and reform in religious matters.",
    icon: <Church className="h-5 w-5" />,
    rights: [
      {
        title: "Personal Piety",
        description: "Individuals increasingly sought personal religious expression and connection with the divine.",
        examples: [
          "Growth of lay confraternities for personal devotion",
          "Private devotional books and images",
          "The rise of individual conscience in religious matters"
        ]
      },
      {
        title: "Reform and Critique",
        description: "Scholars and reformers claimed the right to critique Church practices.",
        examples: [
          "Erasmus's satire of Church corruption in 'Praise of Folly'",
          "Luther's 95 Theses challenging indulgences",
          "Calls for vernacular translations of the Bible"
        ]
      }
    ],
    responsibilities: [
      {
        title: "Orthodoxy and Conformity",
        description: "Despite reform movements, there were expectations of religious conformity.",
        examples: [
          "Inquisition enforcing doctrinal orthodoxy",
          "Public participation in religious festivals and processions",
          "Tithes and donations to the Church"
        ]
      },
      {
        title: "Church Service",
        description: "Many saw religious service as a path of responsibility and honor.",
        examples: [
          "Noble families placing children in religious orders",
          "Patrons building and decorating churches",
          "Supporting monasteries and convents"
        ]
      }
    ],
    quote: {
      text: "When our Lord and Master Jesus Christ said 'Repent,' he intended that the entire life of believers should be repentance.",
      author: "Martin Luther",
      source: "95 Theses, Thesis 1 (1517)"
    }
  }
];

export default function RightsResponsibilities() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Scale className="h-6 w-6 text-primary" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Rights & Responsibilities
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore how Renaissance society balanced individual rights with collective 
            responsibilities across art, learning, governance, and faith.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="font-serif flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" />
                  Understanding Rights
                </CardTitle>
                <CardDescription>
                  In the Renaissance context
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Renaissance rights differed from modern concepts. They were often tied to 
                  social status, guild membership, or citizenship. The era saw an expansion 
                  of individual recognition—artists gained fame, scholars earned respect, 
                  and citizens participated in governance—but these rights remained limited 
                  to certain classes and primarily to men.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="font-serif flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Understanding Responsibilities
                </CardTitle>
                <CardDescription>
                  Obligations of the era
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Renaissance society was built on networks of obligation—patrons supported 
                  artists, citizens served their cities, and all were expected to honor God 
                  and Church. These responsibilities created the conditions for artistic and 
                  intellectual flourishing, but also constrained individual freedom in ways 
                  that modern observers might find surprising.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            {themeSections.map((section) => (
              <Card key={section.id} data-testid={`section-${section.id}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-md bg-primary/10">
                      {section.icon}
                    </div>
                    <div>
                      <CardTitle className="font-serif text-2xl">{section.title}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {section.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                          <Scale className="h-3 w-3 mr-1" />
                          Rights
                        </Badge>
                      </div>
                      <Accordion type="single" collapsible className="w-full">
                        {section.rights.map((right, idx) => (
                          <AccordionItem key={idx} value={`right-${idx}`}>
                            <AccordionTrigger className="text-left">
                              <span className="font-medium">{right.title}</span>
                            </AccordionTrigger>
                            <AccordionContent>
                              <p className="text-sm text-muted-foreground mb-3">
                                {right.description}
                              </p>
                              <div className="space-y-2">
                                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                                  Examples
                                </p>
                                <ul className="space-y-1.5">
                                  {right.examples.map((example, i) => (
                                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                      <span className="text-primary mt-1.5">•</span>
                                      {example}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline" className="bg-accent/10 text-accent-foreground border-accent/20">
                          <GraduationCap className="h-3 w-3 mr-1" />
                          Responsibilities
                        </Badge>
                      </div>
                      <Accordion type="single" collapsible className="w-full">
                        {section.responsibilities.map((resp, idx) => (
                          <AccordionItem key={idx} value={`resp-${idx}`}>
                            <AccordionTrigger className="text-left">
                              <span className="font-medium">{resp.title}</span>
                            </AccordionTrigger>
                            <AccordionContent>
                              <p className="text-sm text-muted-foreground mb-3">
                                {resp.description}
                              </p>
                              <div className="space-y-2">
                                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                                  Examples
                                </p>
                                <ul className="space-y-1.5">
                                  {resp.examples.map((example, i) => (
                                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                      <span className="text-accent-foreground mt-1.5">•</span>
                                      {example}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </div>

                  {section.quote && (
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex items-start gap-3 bg-muted/50 p-4 rounded-lg">
                        <Quote className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-serif italic text-foreground mb-2">
                            "{section.quote.text}"
                          </p>
                          <p className="text-sm text-muted-foreground">
                            — {section.quote.author}, <span className="italic">{section.quote.source}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
            The Enduring Legacy
          </h2>
          <p className="text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
            The Renaissance's exploration of rights and responsibilities laid groundwork 
            for later political philosophy. Ideas about individual dignity, civic participation, 
            and the relationship between freedom and obligation continue to shape how we 
            understand citizenship, creativity, and social responsibility today.
          </p>
        </div>
      </section>
    </div>
  );
}
