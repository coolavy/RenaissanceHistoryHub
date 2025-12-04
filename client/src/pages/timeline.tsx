import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Palette, 
  Building2, 
  Lightbulb, 
  Crown,
  Church,
  Scroll,
  Printer
} from "lucide-react";

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  category: "art" | "science" | "politics" | "religion" | "culture";
  location: string;
  imageUrl?: string;
  rightsConnection?: string;
  responsibilitiesConnection?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: 1304,
    title: "Birth of Petrarch",
    description: "Francesco Petrarca, considered the father of humanism, is born. He would pioneer the revival of classical learning and emphasize the dignity of the individual.",
    category: "culture",
    location: "Arezzo, Italy",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Petrarch_by_Bargilla.jpg/440px-Petrarch_by_Bargilla.jpg",
    rightsConnection: "Petrarch championed the right to intellectual inquiry and the study of classical texts, asserting the individual's right to seek wisdom beyond medieval constraints.",
    responsibilitiesConnection: "He established the scholar's responsibility to preserve and transmit classical knowledge to future generations."
  },
  {
    year: 1397,
    title: "Medici Bank Founded",
    description: "Giovanni di Bicci de' Medici establishes the Medici Bank in Florence, beginning the family's rise to power and their role as major patrons of the arts.",
    category: "politics",
    location: "Florence, Italy",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Cosimo_di_Medici_%28Bronzino%29.jpg/440px-Cosimo_di_Medici_%28Bronzino%29.jpg",
    rightsConnection: "The Medici's wealth gave them the power to influence political rights and civic freedoms in Florence.",
    responsibilitiesConnection: "As the family gained wealth, they assumed responsibility for supporting artists, scholars, and public architecture."
  },
  {
    year: 1401,
    title: "Baptistery Doors Competition",
    description: "Florence holds a competition to design the bronze doors of the Baptistery. Ghiberti wins, marking a turning point in Renaissance art and competitive artistic patronage.",
    category: "art",
    location: "Florence, Italy",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Firenze.Baptistery.door02.JPG/440px-Firenze.Baptistery.door02.JPG",
    rightsConnection: "The open competition recognized artists' right to compete for commissions based on merit rather than guild connections alone.",
    responsibilitiesConnection: "Artists bore responsibility to serve the city's religious and civic institutions through their craft."
  },
  {
    year: 1436,
    title: "Brunelleschi's Dome Completed",
    description: "Filippo Brunelleschi completes the dome of Florence Cathedral, a masterpiece of engineering that symbolizes Renaissance innovation and civic pride.",
    category: "art",
    location: "Florence, Italy",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Florence_duomo_fc01.jpg/520px-Florence_duomo_fc01.jpg",
    rightsConnection: "Brunelleschi asserted his intellectual rights by keeping his construction methods secret, establishing the concept of intellectual property.",
    responsibilitiesConnection: "The dome represented the city's collective responsibility to complete a project spanning generations."
  },
  {
    year: 1440,
    title: "Gutenberg's Printing Press",
    description: "Johannes Gutenberg develops movable type printing, revolutionizing the spread of ideas and making books accessible beyond the clergy and nobility.",
    category: "science",
    location: "Mainz, Germany",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Printer_in_1568-ce.png/440px-Printer_in_1568-ce.png",
    rightsConnection: "The printing press democratized access to information, implicitly advancing the right to knowledge and literacy.",
    responsibilitiesConnection: "Publishers took on responsibility for what they printed, leading to debates about censorship and religious orthodoxy."
  },
  {
    year: 1453,
    title: "Fall of Constantinople",
    description: "The Ottoman conquest of Constantinople drives Greek scholars westward, accelerating the transfer of classical knowledge to Italy and Western Europe.",
    category: "politics",
    location: "Constantinople (Istanbul)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Siege_of_Constantinople.jpg/600px-Siege_of_Constantinople.jpg",
    rightsConnection: "Fleeing scholars exercised their right to seek refuge and continue their intellectual traditions in new lands.",
    responsibilitiesConnection: "Italian city-states assumed responsibility for welcoming and supporting these refugee scholars."
  },
  {
    year: 1469,
    title: "Lorenzo de' Medici Rises to Power",
    description: "Lorenzo 'the Magnificent' becomes de facto ruler of Florence, ushering in a golden age of artistic and intellectual patronage.",
    category: "politics",
    location: "Florence, Italy",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Lorenzo_de%27_Medici-ritratto.jpg/440px-Lorenzo_de%27_Medici-ritratto.jpg",
    rightsConnection: "While technically a citizen, Lorenzo exercised outsized political power, raising questions about the balance between individual rights and concentrated power.",
    responsibilitiesConnection: "He exemplified the Renaissance ideal of the patron's responsibility to support learning and the arts."
  },
  {
    year: 1485,
    title: "Birth of Venus Painted",
    description: "Sandro Botticelli completes 'The Birth of Venus,' one of the first large-scale paintings of a mythological nude since antiquity.",
    category: "art",
    location: "Florence, Italy",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/600px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
    rightsConnection: "The painting represented artistic freedom to depict classical subjects, expanding the acceptable range of artistic expression.",
    responsibilitiesConnection: "Artists navigated responsibility to patrons while pushing boundaries of traditional religious art."
  },
  {
    year: 1498,
    title: "Execution of Savonarola",
    description: "The Dominican friar Girolamo Savonarola is executed for heresy, ending his brief theocratic rule of Florence and its 'Bonfire of the Vanities.'",
    category: "religion",
    location: "Florence, Italy",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Savonarola.jpg/440px-Savonarola.jpg",
    rightsConnection: "His rise and fall highlighted tensions between religious authority, civic rights, and artistic freedom.",
    responsibilitiesConnection: "The episode demonstrated the Church's claimed responsibility to enforce orthodoxy and punish dissent."
  },
  {
    year: 1503,
    title: "Leonardo Begins the Mona Lisa",
    description: "Leonardo da Vinci begins work on the Mona Lisa, which would become the world's most famous painting and symbol of Renaissance artistic achievement.",
    category: "art",
    location: "Florence, Italy",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/400px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    rightsConnection: "Leonardo asserted his right to take years perfecting the work, keeping it in his possession rather than delivering to the patron.",
    responsibilitiesConnection: "The painting reflects the artist's responsibility to achieve perfection in their craft."
  },
  {
    year: 1508,
    title: "Michelangelo Begins Sistine Chapel",
    description: "Pope Julius II commissions Michelangelo to paint the ceiling of the Sistine Chapel, resulting in one of art history's greatest achievements.",
    category: "art",
    location: "Vatican City",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/640px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
    rightsConnection: "Michelangelo negotiated for artistic freedom in the design, asserting the artist's right to creative control.",
    responsibilitiesConnection: "The project exemplified the Church's responsibility to glorify God through magnificent art."
  },
  {
    year: 1513,
    title: "Machiavelli Writes 'The Prince'",
    description: "Niccolò Machiavelli completes 'The Prince,' a treatise on political power that would influence political thought for centuries.",
    category: "politics",
    location: "Florence, Italy",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Portrait_of_Niccol%C3%B2_Machiavelli_by_Santi_di_Tito.jpg/440px-Portrait_of_Niccol%C3%B2_Machiavelli_by_Santi_di_Tito.jpg",
    rightsConnection: "Machiavelli analyzed how rulers acquire and maintain rights to power, separating politics from morality.",
    responsibilitiesConnection: "He argued that rulers' primary responsibility is to the state's survival, not personal morality."
  },
  {
    year: 1517,
    title: "Luther's 95 Theses",
    description: "Martin Luther posts his 95 Theses, challenging Catholic Church practices and sparking the Protestant Reformation.",
    category: "religion",
    location: "Wittenberg, Germany",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Lucas_Cranach_d.%C3%84._-_Martin_Luther%2C_1528_%28Veste_Coburg%29.jpg/440px-Lucas_Cranach_d.%C3%84._-_Martin_Luther%2C_1528_%28Veste_Coburg%29.jpg",
    rightsConnection: "Luther claimed the right to challenge religious authority and advocated for individual interpretation of scripture.",
    responsibilitiesConnection: "He emphasized Christians' direct responsibility to God, bypassing Church intermediaries."
  },
  {
    year: 1543,
    title: "Copernicus Publishes Heliocentric Theory",
    description: "Nicolaus Copernicus publishes 'De revolutionibus,' proposing that Earth revolves around the Sun, challenging centuries of accepted knowledge.",
    category: "science",
    location: "Nuremberg, Germany",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Nikolaus_Kopernikus.jpg/440px-Nikolaus_Kopernikus.jpg",
    rightsConnection: "Copernicus exercised his right to publish controversial scientific findings, despite potential religious backlash.",
    responsibilitiesConnection: "He fulfilled his responsibility as a scholar to pursue and share truth, regardless of consequences."
  },
  {
    year: 1564,
    title: "Death of Michelangelo",
    description: "Michelangelo Buonarroti dies at 88, having created some of the greatest works of Western art including the David, Pietà, and Sistine Chapel.",
    category: "art",
    location: "Rome, Italy",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/%27David%27_by_Michelangelo_JBU0001.JPG/440px-%27David%27_by_Michelangelo_JBU0001.JPG",
    rightsConnection: "His career exemplified the Renaissance artist's hard-won right to be recognized as a creative genius rather than mere craftsman.",
    responsibilitiesConnection: "Michelangelo felt intense responsibility to use his God-given talents in service of beauty and faith."
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
  science: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  politics: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  religion: "bg-chart-4/10 text-chart-4 border-chart-4/20",
  culture: "bg-chart-5/10 text-chart-5 border-chart-5/20",
};

export default function Timeline() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">1304 - 1564</Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Renaissance Timeline
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trace the key events that shaped the Renaissance, from the birth of humanism 
            to the death of Michelangelo, and discover how each moment connected to the 
            evolving understanding of rights and responsibilities.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div 
                  key={event.year}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                  data-testid={`timeline-event-${event.year}`}
                >
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background md:-translate-x-1.5 z-10" />

                  <div className="hidden md:flex md:w-1/2 items-center justify-center">
                    <span className="font-serif text-2xl font-bold text-muted-foreground">
                      {event.year}
                    </span>
                  </div>

                  <div className="ml-10 md:ml-0 md:w-1/2">
                    <Card className="overflow-hidden">
                      {event.imageUrl && (
                        <div className="aspect-video relative overflow-hidden">
                          <img 
                            src={event.imageUrl}
                            alt={event.title}
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute top-2 left-2 md:hidden">
                            <Badge variant="secondary" className="font-serif font-bold">
                              {event.year}
                            </Badge>
                          </div>
                        </div>
                      )}
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <Badge 
                            variant="outline" 
                            className={categoryColors[event.category]}
                          >
                            {categoryIcons[event.category]}
                            <span className="ml-1 capitalize">{event.category}</span>
                          </Badge>
                          <span className="text-xs text-muted-foreground">{event.location}</span>
                        </div>
                        <CardTitle className="font-serif text-xl">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {event.description}
                        </p>
                        
                        {(event.rightsConnection || event.responsibilitiesConnection) && (
                          <div className="pt-3 border-t border-border space-y-3">
                            {event.rightsConnection && (
                              <div className="flex items-start gap-2">
                                <div className="p-1 rounded bg-primary/10 shrink-0 mt-0.5">
                                  <Scroll className="h-3 w-3 text-primary" />
                                </div>
                                <div>
                                  <p className="text-xs font-medium text-primary mb-0.5">Rights Connection</p>
                                  <p className="text-xs text-muted-foreground">{event.rightsConnection}</p>
                                </div>
                              </div>
                            )}
                            {event.responsibilitiesConnection && (
                              <div className="flex items-start gap-2">
                                <div className="p-1 rounded bg-accent/20 shrink-0 mt-0.5">
                                  <Building2 className="h-3 w-3 text-accent-foreground" />
                                </div>
                                <div>
                                  <p className="text-xs font-medium text-accent-foreground mb-0.5">Responsibilities Connection</p>
                                  <p className="text-xs text-muted-foreground">{event.responsibilitiesConnection}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
