import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Palette, 
  Building2, 
  ZoomIn,
  Calendar,
  MapPin,
  User
} from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  artist?: string;
  year?: number;
  description: string;
  imageUrl: string;
  category: "painting" | "sculpture" | "architecture";
  location?: string;
  themeConnection: string;
  imageCredit: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "The School of Athens",
    artist: "Raphael",
    year: 1511,
    description: "This fresco depicts the greatest philosophers of antiquity gathered together. It represents the Renaissance ideal of humanist learning.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
    category: "painting",
    location: "Vatican Museums",
    themeConnection: "Embodies the humanist right to intellectual inquiry and scholars' responsibility to preserve classical knowledge.",
    imageCredit: "Wikimedia Commons, Public Domain"
  },
  {
    id: "2",
    title: "David",
    artist: "Michelangelo",
    year: 1504,
    description: "This 17-foot marble statue represents David before his battle with Goliath. It symbolized Florentine civic virtue.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a0/%27David%27_by_Michelangelo_Fir_JBU002.jpg",
    category: "sculpture",
    location: "Galleria dell'Accademia, Florence",
    themeConnection: "A civic symbol representing Florence's right to self-governance and citizens' responsibility to defend their republic.",
    imageCredit: "Wikimedia Commons, Jörg Bittner Unna, CC BY 3.0"
  },
  {
    id: "3",
    title: "The Birth of Venus",
    artist: "Sandro Botticelli",
    year: 1485,
    description: "One of the first mythological nudes since antiquity, depicting Venus emerging from the sea.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
    category: "painting",
    location: "Uffizi Gallery, Florence",
    themeConnection: "Demonstrates artistic freedom to explore classical mythology while fulfilling responsibility to patrons.",
    imageCredit: "Wikimedia Commons, Google Art Project, Public Domain"
  },
  {
    id: "4",
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    year: 1519,
    description: "The world's most famous painting, demonstrating Leonardo's mastery of sfumato technique.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    category: "painting",
    location: "Louvre Museum, Paris",
    themeConnection: "Leonardo asserted his right to perfect his work over many years rather than quickly fulfilling a commission.",
    imageCredit: "Wikimedia Commons, C2RMF, Public Domain"
  },
  {
    id: "5",
    title: "Creation of Adam",
    artist: "Michelangelo",
    year: 1512,
    description: "Part of the Sistine Chapel ceiling, depicting God giving life to Adam.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
    category: "painting",
    location: "Sistine Chapel, Vatican City",
    themeConnection: "Represents artistic genius and the responsibilities artists bore to papal patrons.",
    imageCredit: "Wikimedia Commons, Public Domain"
  },
  {
    id: "6",
    title: "Florence Cathedral Dome",
    artist: "Filippo Brunelleschi",
    year: 1436,
    description: "The largest brick dome ever built, an engineering marvel that symbolizes Renaissance innovation.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/Florence_duomo_fc01.jpg",
    category: "architecture",
    location: "Florence, Italy",
    themeConnection: "Brunelleschi asserted intellectual property rights while fulfilling civic responsibility to complete the cathedral.",
    imageCredit: "Wikimedia Commons, Florian Hirzinger, CC BY-SA 3.0"
  }
];

const categoryInfo = {
  painting: { icon: <Palette className="h-4 w-4" />, label: "Painting" },
  sculpture: { icon: <User className="h-4 w-4" />, label: "Sculpture" },
  architecture: { icon: <Building2 className="h-4 w-4" />, label: "Architecture" },
};

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Visual Collection</Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Renaissance Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Masterpieces that define the Renaissance and connect to themes of 
            rights and responsibilities.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <Card 
                key={item.id} 
                className="group cursor-pointer overflow-hidden hover-elevate"
                onClick={() => setSelectedItem(item)}
                data-testid={`gallery-item-${item.id}`}
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                  <img 
                    src={item.imageUrl}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="w-full">
                      <ZoomIn className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-xs">
                      {categoryInfo[item.category].icon}
                      <span className="ml-1">{categoryInfo[item.category].label}</span>
                    </Badge>
                    {item.year && (
                      <span className="text-xs text-muted-foreground">{item.year}</span>
                    )}
                  </div>
                  <CardTitle className="font-serif text-lg">{item.title}</CardTitle>
                  {item.artist && (
                    <CardDescription>{item.artist}</CardDescription>
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedItem && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">
                    {categoryInfo[selectedItem.category].icon}
                    <span className="ml-1">{categoryInfo[selectedItem.category].label}</span>
                  </Badge>
                </div>
                <DialogTitle className="font-serif text-2xl">{selectedItem.title}</DialogTitle>
                <DialogDescription className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                  {selectedItem.artist && (
                    <span className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5" />
                      {selectedItem.artist}
                    </span>
                  )}
                  {selectedItem.year && (
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {selectedItem.year}
                    </span>
                  )}
                  {selectedItem.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {selectedItem.location}
                    </span>
                  )}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                <div className="aspect-video relative overflow-hidden rounded-lg mb-4 bg-muted">
                  <img 
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    className="object-contain w-full h-full"
                  />
                </div>
                <p className="text-xs text-muted-foreground mb-4">
                  Image: {selectedItem.imageCredit}
                </p>
                
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedItem.description}
                  </p>
                  
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">NHD Theme</Badge>
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedItem.themeConnection}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
