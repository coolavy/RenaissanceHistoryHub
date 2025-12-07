import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Palette, 
  Building2, 
  Lightbulb, 
  Crown,
  Church,
  Scroll
} from "lucide-react";

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  category: "art" | "science" | "politics" | "religion" | "culture";
  location: string;
  rightsConnection?: string;
  responsibilitiesConnection?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: 1304,
    title: "Birth of Petrarch",
    description: "Francesco Petrarca, the father of humanism, is born. He pioneered the revival of classical learning.",
    category: "culture",
    location: "Arezzo, Italy",
    rightsConnection: "Championed the right to intellectual inquiry beyond medieval constraints.",
    responsibilitiesConnection: "Established scholars' responsibility to preserve classical knowledge."
  },
  {
    year: 1397,
    title: "Medici Bank Founded",
    description: "Giovanni de' Medici establishes the Medici Bank, beginning the family's rise as major art patrons.",
    category: "politics",
    location: "Florence, Italy",
    rightsConnection: "Wealth gave the Medici power to influence civic freedoms in Florence.",
    responsibilitiesConnection: "They assumed responsibility for supporting artists and scholars."
  },
  {
    year: 1436,
    title: "Brunelleschi's Dome Completed",
    description: "Filippo Brunelleschi completes Florence Cathedral's dome, a masterpiece of Renaissance engineering.",
    category: "art",
    location: "Florence, Italy",
    rightsConnection: "Brunelleschi kept his methods secret, establishing intellectual property concepts.",
    responsibilitiesConnection: "The dome represented civic responsibility to complete a multi-generational project."
  },
  {
    year: 1440,
    title: "Gutenberg's Printing Press",
    description: "Johannes Gutenberg develops movable type printing, revolutionizing the spread of ideas.",
    category: "science",
    location: "Mainz, Germany",
    rightsConnection: "Democratized access to information and the right to knowledge.",
    responsibilitiesConnection: "Publishers took on responsibility for what they printed."
  },
  {
    year: 1469,
    title: "Lorenzo de' Medici Rises",
    description: "Lorenzo 'the Magnificent' becomes ruler of Florence, ushering in a golden age of patronage.",
    category: "politics",
    location: "Florence, Italy",
    rightsConnection: "Raised questions about individual power vs. civic rights.",
    responsibilitiesConnection: "Exemplified the patron's responsibility to support arts and learning."
  },
  {
    year: 1485,
    title: "Birth of Venus Painted",
    description: "Botticelli completes 'The Birth of Venus,' one of the first mythological nudes since antiquity.",
    category: "art",
    location: "Florence, Italy",
    rightsConnection: "Represented artistic freedom to depict classical subjects.",
    responsibilitiesConnection: "Artists balanced creative vision with patron expectations."
  },
  {
    year: 1504,
    title: "Michelangelo's David Unveiled",
    description: "The 17-foot marble statue is unveiled in Florence, symbolizing civic virtue and liberty.",
    category: "art",
    location: "Florence, Italy",
    rightsConnection: "A symbol of Florence's right to self-governance.",
    responsibilitiesConnection: "Citizens' responsibility to defend their republic."
  },
  {
    year: 1508,
    title: "Sistine Chapel Ceiling Begun",
    description: "Pope Julius II commissions Michelangelo to paint the Sistine Chapel ceiling.",
    category: "art",
    location: "Vatican City",
    rightsConnection: "Michelangelo negotiated for artistic freedom in the design.",
    responsibilitiesConnection: "The Church's responsibility to glorify God through art."
  },
  {
    year: 1513,
    title: "Machiavelli Writes 'The Prince'",
    description: "Niccolò Machiavelli completes his influential treatise on political power.",
    category: "politics",
    location: "Florence, Italy",
    rightsConnection: "Analyzed how rulers acquire and maintain power.",
    responsibilitiesConnection: "Argued rulers' primary responsibility is state survival."
  },
  {
    year: 1517,
    title: "Luther's 95 Theses",
    description: "Martin Luther challenges Church practices, sparking the Protestant Reformation.",
    category: "religion",
    location: "Wittenberg, Germany",
    rightsConnection: "Claimed the right to challenge religious authority.",
    responsibilitiesConnection: "Emphasized Christians' direct responsibility to God."
  }
];

const categoryIcons: Record<string, React.ReactNode> = {
  art: <Palette className="h-4 w-4" />,
  science: <Lightbulb className="h-4 w-4" />,
  politics: <Crown className="h-4 w-4" />,
  religion: <Church className="h-4 w-4" />,
  culture: <BookOpen className="h-4 w-4" />,
};

const categoryColors: Record<string, string> = {
  art: "bg-primary/10 text-primary border-primary/20",
  science: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  politics: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  religion: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  culture: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
};

export default function Timeline() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">1304 - 1517</Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Renaissance Timeline
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key events that shaped the Renaissance and transformed ideas about 
            rights and responsibilities.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-8">
              {timelineEvents.map((event) => (
                <div 
                  key={event.year}
                  className="relative pl-12 md:pl-20"
                  data-testid={`timeline-event-${event.year}`}
                >
                  <div className="absolute left-2 md:left-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
                  
                  <div className="absolute left-10 md:left-16 top-0 text-sm font-bold text-primary">
                    {event.year}
                  </div>

                  <Card className="mt-6">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <Badge variant="outline" className={categoryColors[event.category]}>
                          {categoryIcons[event.category]}
                          <span className="ml-1 capitalize">{event.category}</span>
                        </Badge>
                        <span className="text-xs text-muted-foreground">{event.location}</span>
                      </div>
                      <CardTitle className="font-serif text-lg">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        {event.description}
                      </p>
                      
                      <div className="pt-3 border-t border-border grid sm:grid-cols-2 gap-3">
                        {event.rightsConnection && (
                          <div className="flex items-start gap-2">
                            <div className="p-1 rounded bg-primary/10 shrink-0 mt-0.5">
                              <Scroll className="h-3 w-3 text-primary" />
                            </div>
                            <div>
                              <p className="text-xs font-medium text-primary mb-0.5">Rights</p>
                              <p className="text-xs text-muted-foreground">{event.rightsConnection}</p>
                            </div>
                          </div>
                        )}
                        {event.responsibilitiesConnection && (
                          <div className="flex items-start gap-2">
                            <div className="p-1 rounded bg-accent/20 shrink-0 mt-0.5">
                              <Building2 className="h-3 w-3" />
                            </div>
                            <div>
                              <p className="text-xs font-medium mb-0.5">Responsibilities</p>
                              <p className="text-xs text-muted-foreground">{event.responsibilitiesConnection}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
