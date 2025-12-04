import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText,
  ScrollText,
  Quote,
  Calendar,
  User,
  Lightbulb,
  Scale
} from "lucide-react";

interface PrimarySource {
  id: string;
  title: string;
  author: string;
  year: number;
  originalText: string;
  modernTranslation?: string;
  analysis: string;
  themeConnection: string;
  sourceType: "letter" | "treatise" | "decree" | "artwork" | "speech";
}

const primarySources: PrimarySource[] = [
  {
    id: "1",
    title: "Oration on the Dignity of Man",
    author: "Giovanni Pico della Mirandola",
    year: 1486,
    originalText: "We have made thee neither of heaven nor of earth, neither mortal nor immortal, so that with freedom of choice and with honor, as though the maker and molder of thyself, thou mayest fashion thyself in whatever shape thou shalt prefer.",
    modernTranslation: "We have not given you a fixed place or form, nor any special function, so that according to your own desire and judgment, you may have and possess whatever place, form, and functions you yourself shall desire.",
    analysis: "This passage is often called the 'manifesto of the Renaissance.' Pico argues that humans are unique among all creatures because God gave them the freedom to shape their own nature. Unlike angels or animals, humans can choose to rise toward the divine or sink to the level of beasts. This represents a dramatic shift from medieval thinking, which emphasized humanity's fixed place in a cosmic hierarchy.",
    themeConnection: "Pico articulates a radical notion of human rights—the right to self-determination and self-creation. But this freedom comes with profound responsibility: humans must actively choose their path, and bear the consequences of their choices.",
    sourceType: "treatise"
  },
  {
    id: "2",
    title: "The Prince",
    author: "Niccolò Machiavelli",
    year: 1513,
    originalText: "It is better to be feared than loved, if you cannot be both... For love is preserved by the link of obligation which, owing to the baseness of men, is broken at every opportunity for their advantage; but fear preserves you by a dread of punishment which never fails.",
    modernTranslation: "If a ruler has to choose between being loved and being feared, it is safer to be feared. Love is held by a chain of obligation, which people will break whenever it benefits them. Fear, however, comes from the threat of punishment, which people never forget.",
    analysis: "Machiavelli's most controversial work separates political effectiveness from personal morality. Written during his exile from Florence, it reflects his experience watching Italian states fall to foreign powers. He argues that a ruler's primary responsibility is the survival and strength of the state, even if this requires actions that would be wrong in private life.",
    themeConnection: "Machiavelli explores the tensions between a ruler's rights to power and responsibilities to the state. He suggests that traditional morality may conflict with effective governance, raising questions about whether rulers have different ethical responsibilities than ordinary citizens.",
    sourceType: "treatise"
  },
  {
    id: "3",
    title: "Letter to Posterity",
    author: "Francesco Petrarca (Petrarch)",
    year: 1351,
    originalText: "I have always possessed an extreme contempt for wealth; not that riches are not desirable in themselves, but because I hate the anxiety and care which are invariably associated with them... I have taken more pleasure in a well-balanced mind and a sound body than in all the gold in the world.",
    modernTranslation: "I have always deeply despised money—not because wealth is bad in itself, but because I hate the worry and effort that comes with it. I find more satisfaction in a calm mind and healthy body than in all the treasure on earth.",
    analysis: "Petrarch, often called the 'Father of Humanism,' wrote this autobiographical letter to introduce himself to future generations. It demonstrates the Renaissance interest in individual personality and self-reflection, a departure from medieval texts that focused on universal truths rather than personal experience.",
    themeConnection: "Petrarch claims the right to be remembered as an individual, not just as an anonymous scholar. He also reflects on responsibilities—to use his learning for good, to maintain virtue despite temptations, and to set an example for future generations.",
    sourceType: "letter"
  },
  {
    id: "4",
    title: "95 Theses",
    author: "Martin Luther",
    year: 1517,
    originalText: "Thesis 1: When our Lord and Master Jesus Christ said 'Repent,' he intended that the entire life of believers should be repentance. Thesis 32: Those who believe that indulgences make them certain of their own salvation will be eternally damned, together with their teachers.",
    modernTranslation: "When Jesus said 'Repent,' he meant that Christians should spend their whole lives in repentance, not just buy a pardon. Anyone who believes that buying an indulgence guarantees salvation is doomed to damnation—along with those who taught them this lie.",
    analysis: "Luther's 95 Theses, posted on the door of Wittenberg Castle Church, challenged the Catholic Church's sale of indulgences. Though he intended to start an academic debate, the printing press spread his ideas rapidly across Europe, igniting the Protestant Reformation and permanently dividing Western Christianity.",
    themeConnection: "Luther claimed the right of individuals to challenge religious authority based on Scripture. But he also emphasized Christians' responsibility to maintain true faith and the Church's duty not to exploit believers through false promises of salvation.",
    sourceType: "treatise"
  },
  {
    id: "5",
    title: "Lives of the Artists",
    author: "Giorgio Vasari",
    year: 1550,
    originalText: "I can say with truth that the art of design has been most fortunate in Leonardo da Vinci, who possessed a sublimity and vigor surpassing all other artists, and a nobility of action that made him beloved by all who knew him.",
    modernTranslation: "I can honestly say that the art of design was incredibly fortunate to have Leonardo da Vinci, whose genius and energy exceeded all other artists, and whose noble character made everyone who met him love him.",
    analysis: "Vasari's work was the first systematic biographical history of artists, establishing the idea of art history as a progression toward perfection (culminating in Michelangelo). His approach transformed how society viewed artists—not as craftsmen but as creative geniuses worthy of individual fame.",
    themeConnection: "Vasari's work affirms artists' right to individual recognition and fame. It also establishes the responsibility of art historians to document and evaluate artistic achievement, creating a framework for understanding art that continues today.",
    sourceType: "treatise"
  },
  {
    id: "6",
    title: "Letter to Lorenzo de' Medici",
    author: "Niccolò Machiavelli",
    year: 1513,
    originalText: "Desiring to present myself to Your Magnificence with some token of my devotion to you, I have not found among my belongings anything that I hold more dear or value more highly than my knowledge of the actions of great men.",
    modernTranslation: "Wanting to show my dedication to you, I looked through everything I own and found nothing more valuable to offer than my understanding of how great leaders act, which I learned through years of experience and study.",
    analysis: "This dedicatory letter to 'The Prince' reveals the complex relationship between Renaissance intellectuals and patrons. Machiavelli, exiled and desperate to return to politics, offers his expertise as a gift to curry favor with Florence's new ruler.",
    themeConnection: "The letter illustrates the patron-client relationship central to Renaissance culture: intellectuals had the right to seek patronage, while patrons bore responsibility to support learning. It also shows the vulnerability of scholars dependent on powerful patrons.",
    sourceType: "letter"
  },
  {
    id: "7",
    title: "De revolutionibus orbium coelestium (Preface)",
    author: "Nicolaus Copernicus",
    year: 1543,
    originalText: "I can easily conceive, most Holy Father, that as soon as some people learn that in this book... I ascribe certain motions to the Earth, they will cry out that I must be immediately repudiated together with this opinion.",
    modernTranslation: "I can easily imagine, Holy Father, that when people learn that in this book I claim the Earth moves, they will immediately condemn me and my theory.",
    analysis: "Copernicus dedicated his revolutionary work to Pope Paul III, hoping papal authority would protect it from criticism. The cautious preface reflects the dangerous position of scholars whose findings contradicted established Church teachings.",
    themeConnection: "Copernicus exercised his right to publish scientific findings, but carefully navigated his responsibility to religious authorities. His work raises questions about the relationship between scientific truth and institutional power.",
    sourceType: "treatise"
  },
  {
    id: "8",
    title: "On the Fabric of the Human Body (Dedication)",
    author: "Andreas Vesalius",
    year: 1543,
    originalText: "I have ventured to investigate the structure of the human body from the body itself... I have dared to be the first to depict the human body in pictures.",
    modernTranslation: "I have boldly studied the structure of the human body by examining actual bodies, not just reading ancient texts. I am the first to include accurate anatomical illustrations.",
    analysis: "Vesalius revolutionized anatomy by performing dissections himself rather than relying on ancient texts. His detailed illustrations, based on direct observation, corrected many errors in the traditional teachings of Galen.",
    themeConnection: "Vesalius claimed the scholar's right to challenge ancient authorities through direct observation. He also fulfilled his responsibility as a physician to seek accurate knowledge for the benefit of medical practice.",
    sourceType: "treatise"
  }
];

const sourceTypeInfo = {
  letter: { icon: <FileText className="h-4 w-4" />, label: "Letters" },
  treatise: { icon: <ScrollText className="h-4 w-4" />, label: "Treatises" },
  decree: { icon: <Scale className="h-4 w-4" />, label: "Decrees" },
  artwork: { icon: <Lightbulb className="h-4 w-4" />, label: "Artworks" },
  speech: { icon: <Quote className="h-4 w-4" />, label: "Speeches" },
};

export default function Sources() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Historical Documents</Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Primary Sources
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read original texts from Renaissance thinkers, artists, and leaders. 
            These primary sources reveal how people of the era understood their rights 
            and responsibilities.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-8">
            {primarySources.map((source) => (
              <Card key={source.id} data-testid={`source-${source.id}`}>
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge variant="outline">
                      {sourceTypeInfo[source.sourceType]?.icon}
                      <span className="ml-1 capitalize">{source.sourceType}</span>
                    </Badge>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {source.year}
                    </span>
                  </div>
                  <CardTitle className="font-serif text-2xl">{source.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1.5 text-base">
                    <User className="h-4 w-4" />
                    {source.author}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg border border-border">
                      <h4 className="text-sm font-medium mb-2 text-muted-foreground uppercase tracking-wide">
                        Original Text
                      </h4>
                      <blockquote className="font-serif italic text-foreground leading-relaxed">
                        "{source.originalText}"
                      </blockquote>
                    </div>
                    
                    {source.modernTranslation && (
                      <div className="p-4 bg-card rounded-lg border border-border">
                        <h4 className="text-sm font-medium mb-2 text-muted-foreground uppercase tracking-wide">
                          Modern Interpretation
                        </h4>
                        <p className="text-foreground leading-relaxed">
                          "{source.modernTranslation}"
                        </p>
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      Historical Analysis
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {source.analysis}
                    </p>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Scale className="h-4 w-4 text-primary" />
                      Connection to Rights & Responsibilities
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {source.themeConnection}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
            About Primary Sources
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Primary sources are original materials from the time period being studied. 
            They give us direct insight into how people thought, felt, and understood 
            their world. By reading these texts, we can hear Renaissance voices speaking 
            directly to us across the centuries.
          </p>
        </div>
      </section>
    </div>
  );
}
