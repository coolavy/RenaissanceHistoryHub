import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, Globe, FileText, Film, Image } from "lucide-react";

interface BibEntry {
  id: string;
  type: "book" | "website" | "primary" | "documentary" | "image";
  citation: string;
}

const bibliography: BibEntry[] = [
  {
    id: "1",
    type: "book",
    citation:
      "Burckhardt, Jacob. The Civilization of the Renaissance in Italy. Penguin Classics, 2004.",
  },
  {
    id: "2",
    type: "book",
    citation:
      "King, Ross. Brunelleschi's Dome: How a Renaissance Genius Reinvented Architecture. Bloomsbury, 2000.",
  },
  {
    id: "3",
    type: "primary",
    citation:
      "Vasari, Giorgio. Lives of the Artists. Trans. Julia Conaway Bondanella. Oxford University Press, 2008.",
  },
  {
    id: "4",
    type: "website",
    citation:
      'National History Day. "Rights & Responsibilities in History." NHD, 2024, nhd.org/en/contest/theme/.',
  },
  {
    id: "5",
    type: "website",
    citation:
      'The Metropolitan Museum of Art. "Renaissance Art." Heilbrunn Timeline of Art History, metmuseum.org.',
  },
  {
    id: "6",
    type: "primary",
    citation:
      "Pico della Mirandola, Giovanni. Oration on the Dignity of Man. 1486.",
  },
  {
    id: "7",
    type: "primary",
    citation: "Machiavelli, Niccolò. The Prince. 1513.",
  },
  {
    id: "8",
    type: "documentary",
    citation: '"The Medici: Godfathers of the Renaissance." PBS, 2004.',
  },
  {
    id: "9",
    type: "book",
    citation:
      "Strathern, Paul. The Medici: Power, Money, and Ambition in the Italian Renaissance. Pegasus Books, 2016.",
  },
  {
    id: "10",
    type: "image",
    citation:
      'Raphael. "The School of Athens." 1511. Wikimedia Commons, Public Domain. commons.wikimedia.org.',
  },
  {
    id: "11",
    type: "image",
    citation:
      'Michelangelo. "David." 1504. Photo by Jörg Bittner Unna. Wikimedia Commons, CC BY 3.0.',
  },
  {
    id: "13",
    type: "image",
    citation:
      'Leonardo da Vinci. "Mona Lisa." c. 1503-1519. C2RMF. Wikimedia Commons, Public Domain.',
  },
  {
    id: "14",
    type: "image",
    citation:
      'Michelangelo. "Creation of Adam." 1512. Wikimedia Commons, Public Domain.',
  },
];

const typeInfo: Record<string, { icon: React.ReactNode; label: string }> = {
  book: { icon: <Book className="h-4 w-4" />, label: "Book" },
  website: { icon: <Globe className="h-4 w-4" />, label: "Website" },
  primary: { icon: <FileText className="h-4 w-4" />, label: "Primary Source" },
  documentary: { icon: <Film className="h-4 w-4" />, label: "Documentary" },
  image: { icon: <Image className="h-4 w-4" />, label: "Image" },
};

export default function Bibliography() {
  const groupedEntries = {
    books: bibliography.filter((e) => e.type === "book"),
    primary: bibliography.filter((e) => e.type === "primary"),
    websites: bibliography.filter((e) => e.type === "website"),
    documentaries: bibliography.filter((e) => e.type === "documentary"),
    images: bibliography.filter((e) => e.type === "image"),
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">
            Works Cited
          </Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Bibliography
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sources and images used in this National History Day project.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 space-y-8">
          {groupedEntries.books.length > 0 && (
            <div>
              <h2 className="font-serif text-xl font-semibold mb-4 flex items-center gap-2">
                <Book className="h-5 w-5 text-primary" />
                Books
              </h2>
              <div className="space-y-2">
                {groupedEntries.books.map((entry) => (
                  <Card key={entry.id}>
                    <CardContent className="py-3">
                      <p className="text-sm leading-relaxed">
                        {entry.citation}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {groupedEntries.primary.length > 0 && (
            <div>
              <h2 className="font-serif text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Primary Sources
              </h2>
              <div className="space-y-2">
                {groupedEntries.primary.map((entry) => (
                  <Card key={entry.id}>
                    <CardContent className="py-3">
                      <p className="text-sm leading-relaxed">
                        {entry.citation}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {groupedEntries.websites.length > 0 && (
            <div>
              <h2 className="font-serif text-xl font-semibold mb-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Websites
              </h2>
              <div className="space-y-2">
                {groupedEntries.websites.map((entry) => (
                  <Card key={entry.id}>
                    <CardContent className="py-3">
                      <p className="text-sm leading-relaxed">
                        {entry.citation}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {groupedEntries.documentaries.length > 0 && (
            <div>
              <h2 className="font-serif text-xl font-semibold mb-4 flex items-center gap-2">
                <Film className="h-5 w-5 text-primary" />
                Documentaries
              </h2>
              <div className="space-y-2">
                {groupedEntries.documentaries.map((entry) => (
                  <Card key={entry.id}>
                    <CardContent className="py-3">
                      <p className="text-sm leading-relaxed">
                        {entry.citation}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {groupedEntries.images.length > 0 && (
            <div>
              <h2 className="font-serif text-xl font-semibold mb-4 flex items-center gap-2">
                <Image className="h-5 w-5 text-primary" />
                Images
              </h2>
              <div className="space-y-2">
                {groupedEntries.images.map((entry) => (
                  <Card key={entry.id}>
                    <CardContent className="py-3">
                      <p className="text-sm leading-relaxed">
                        {entry.citation}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
