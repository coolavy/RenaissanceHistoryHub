import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, Globe, FileText, Film } from "lucide-react";

interface BibEntry {
  id: string;
  type: "book" | "website" | "primary" | "documentary";
  citation: string;
}

const bibliography: BibEntry[] = [
  {
    id: "1",
    type: "book",
    citation: "Burckhardt, Jacob. The Civilization of the Renaissance in Italy. Penguin Classics, 2004."
  },
  {
    id: "2",
    type: "book",
    citation: "King, Ross. Brunelleschi's Dome: How a Renaissance Genius Reinvented Architecture. Bloomsbury, 2000."
  },
  {
    id: "3",
    type: "primary",
    citation: "Vasari, Giorgio. Lives of the Artists. Trans. Julia Conaway Bondanella. Oxford University Press, 2008."
  },
  {
    id: "4",
    type: "website",
    citation: "National History Day. \"Rights & Responsibilities in History.\" NHD, 2024, nhd.org/en/contest/theme/."
  },
  {
    id: "5",
    type: "website",
    citation: "The Metropolitan Museum of Art. \"Renaissance Art.\" Heilbrunn Timeline of Art History, metmuseum.org."
  },
  {
    id: "6",
    type: "primary",
    citation: "Pico della Mirandola, Giovanni. Oration on the Dignity of Man. 1486."
  },
  {
    id: "7",
    type: "primary",
    citation: "Machiavelli, Niccolò. The Prince. 1513."
  },
  {
    id: "8",
    type: "documentary",
    citation: "\"The Medici: Godfathers of the Renaissance.\" PBS, 2004."
  },
  {
    id: "9",
    type: "book",
    citation: "Strathern, Paul. The Medici: Power, Money, and Ambition in the Italian Renaissance. Pegasus Books, 2016."
  },
  {
    id: "10",
    type: "website",
    citation: "Wikimedia Commons. Renaissance Art Collection. commons.wikimedia.org."
  }
];

const typeInfo: Record<string, { icon: React.ReactNode; label: string }> = {
  book: { icon: <Book className="h-4 w-4" />, label: "Book" },
  website: { icon: <Globe className="h-4 w-4" />, label: "Website" },
  primary: { icon: <FileText className="h-4 w-4" />, label: "Primary Source" },
  documentary: { icon: <Film className="h-4 w-4" />, label: "Documentary" },
};

export default function Bibliography() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Works Cited</Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Bibliography
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sources consulted in researching this National History Day project.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-3">
            {bibliography.map((entry) => (
              <Card key={entry.id} data-testid={`bib-entry-${entry.id}`}>
                <CardContent className="py-4">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="shrink-0 mt-0.5">
                      {typeInfo[entry.type].icon}
                    </Badge>
                    <p className="text-sm leading-relaxed">{entry.citation}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
