import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, Globe, FileText, Film } from "lucide-react";

interface BibEntry {
  id: string;
  type: "book" | "website" | "primary" | "documentary";
  citation: string;
  annotation?: string;
}

const bibliography: BibEntry[] = [
  {
    id: "1",
    type: "book",
    citation: "Burckhardt, Jacob. The Civilization of the Renaissance in Italy. Penguin Classics, 2004.",
    annotation: "A foundational text that shaped how historians understand the Renaissance as a distinct cultural period."
  },
  {
    id: "2",
    type: "book",
    citation: "King, Ross. Brunelleschi's Dome: How a Renaissance Genius Reinvented Architecture. Bloomsbury, 2000.",
    annotation: "Details the construction of Florence's cathedral dome and Brunelleschi's innovative techniques."
  },
  {
    id: "3",
    type: "book",
    citation: "Vasari, Giorgio. Lives of the Artists. Trans. Julia Conaway Bondanella. Oxford University Press, 2008.",
    annotation: "Primary source biography of Renaissance artists, establishing art history as a discipline."
  },
  {
    id: "4",
    type: "website",
    citation: "National History Day. \"Rights & Responsibilities in History.\" NHD, 2024, nhd.org/en/contest/theme/.",
    annotation: "Official NHD 2025 theme book providing guidance on connecting topics to the annual theme."
  },
  {
    id: "5",
    type: "website",
    citation: "The Metropolitan Museum of Art. \"Renaissance Art.\" Heilbrunn Timeline of Art History, metmuseum.org.",
    annotation: "Comprehensive resource on Renaissance artworks with high-quality images and scholarly analysis."
  },
  {
    id: "6",
    type: "primary",
    citation: "Pico della Mirandola, Giovanni. Oration on the Dignity of Man. 1486.",
    annotation: "The 'manifesto of the Renaissance' arguing for human free will and self-determination."
  },
  {
    id: "7",
    type: "primary",
    citation: "Machiavelli, Niccolò. The Prince. 1513.",
    annotation: "Influential political treatise examining the relationship between power and morality."
  },
  {
    id: "8",
    type: "documentary",
    citation: "\"The Medici: Godfathers of the Renaissance.\" PBS, 2004.",
    annotation: "Documentary exploring the Medici family's role as patrons of Renaissance art and politics."
  }
];

const typeInfo = {
  book: { icon: <Book className="h-4 w-4" />, label: "Books" },
  website: { icon: <Globe className="h-4 w-4" />, label: "Websites" },
  primary: { icon: <FileText className="h-4 w-4" />, label: "Primary Sources" },
  documentary: { icon: <Film className="h-4 w-4" />, label: "Documentaries" },
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
          <div className="space-y-4">
            {bibliography.map((entry) => (
              <Card key={entry.id} data-testid={`bib-entry-${entry.id}`}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="shrink-0 mt-0.5">
                      {typeInfo[entry.type].icon}
                    </Badge>
                    <div>
                      <p className="text-sm leading-relaxed mb-2">{entry.citation}</p>
                      {entry.annotation && (
                        <p className="text-sm text-muted-foreground italic">
                          {entry.annotation}
                        </p>
                      )}
                    </div>
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
