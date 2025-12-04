import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Palette, 
  Building2, 
  Lightbulb, 
  ScrollText,
  X,
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
  category: "painting" | "sculpture" | "architecture" | "invention" | "manuscript";
  location?: string;
  themeConnection: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "The School of Athens",
    artist: "Raphael",
    year: 1511,
    description: "This fresco in the Vatican's Apostolic Palace depicts the greatest philosophers and scientists of antiquity, gathered in a grand architectural setting. It represents the Renaissance ideal of humanist learning and the revival of classical wisdom.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1280px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
    category: "painting",
    location: "Vatican Museums, Vatican City",
    themeConnection: "Embodies the humanist right to intellectual inquiry and the responsibility of scholars to preserve and transmit classical knowledge."
  },
  {
    id: "2",
    title: "David",
    artist: "Michelangelo",
    year: 1504,
    description: "This 17-foot marble statue represents the Biblical hero David before his battle with Goliath. Originally placed in the Piazza della Signoria, it symbolized Florentine civic virtue and the defense of civil liberties.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/%27David%27_by_Michelangelo_JBU0001.JPG/640px-%27David%27_by_Michelangelo_JBU0001.JPG",
    category: "sculpture",
    location: "Galleria dell'Accademia, Florence",
    themeConnection: "A civic symbol representing Florence's right to self-governance and citizens' responsibility to defend their republic."
  },
  {
    id: "3",
    title: "The Birth of Venus",
    artist: "Sandro Botticelli",
    year: 1485,
    description: "One of the first large-scale paintings of a mythological nude since antiquity, depicting the goddess Venus emerging from the sea. Commissioned by the Medici family, it represents the revival of classical themes in art.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/1280px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
    category: "painting",
    location: "Uffizi Gallery, Florence",
    themeConnection: "Demonstrates artistic freedom to explore classical mythology while fulfilling responsibility to wealthy patrons."
  },
  {
    id: "4",
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    year: 1519,
    description: "Perhaps the world's most famous painting, this portrait demonstrates Leonardo's mastery of sfumato technique and psychological depth. Leonardo kept the painting with him for years, continuously refining it.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    category: "painting",
    location: "Louvre Museum, Paris",
    themeConnection: "Leonardo asserted his right as an artist to perfect his work over many years, rather than quickly fulfilling a commission."
  },
  {
    id: "5",
    title: "Creation of Adam",
    artist: "Michelangelo",
    year: 1512,
    description: "Part of the Sistine Chapel ceiling, this iconic image depicts God giving life to Adam. Michelangelo spent four years painting the ceiling, often in physical discomfort.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/1280px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
    category: "painting",
    location: "Sistine Chapel, Vatican City",
    themeConnection: "Represents both artistic genius and the responsibilities artists bore to their papal patrons and religious institutions."
  },
  {
    id: "6",
    title: "Florence Cathedral Dome",
    artist: "Filippo Brunelleschi",
    year: 1436,
    description: "The dome of Santa Maria del Fiore was an engineering marvel—the largest brick dome ever built. Brunelleschi invented new construction techniques and kept his methods secret.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Florence_duomo_fc01.jpg/1024px-Florence_duomo_fc01.jpg",
    category: "architecture",
    location: "Florence, Italy",
    themeConnection: "Brunelleschi asserted intellectual property rights over his innovations while fulfilling civic responsibility to complete the cathedral."
  },
  {
    id: "7",
    title: "The Last Supper",
    artist: "Leonardo da Vinci",
    year: 1498,
    description: "This monumental mural depicts Jesus's final meal with his disciples. Leonardo's innovative technique and psychological depth revolutionized how the scene was portrayed.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg/1280px-%C3%9Altima_Cena_-_Da_Vinci_5.jpg",
    category: "painting",
    location: "Santa Maria delle Grazie, Milan",
    themeConnection: "A religious commission that gave Leonardo freedom to reimagine a sacred scene with unprecedented psychological complexity."
  },
  {
    id: "8",
    title: "Pietà",
    artist: "Michelangelo",
    year: 1499,
    description: "Carved when Michelangelo was only 24, this marble sculpture depicts Mary holding the body of Christ. It is the only work Michelangelo ever signed.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Michelangelo%27s_Piet%C3%A0%2C_St_Peter%27s_Basilica_%281498%E2%80%9399%29.jpg/800px-Michelangelo%27s_Piet%C3%A0%2C_St_Peter%27s_Basilica_%281498%E2%80%9399%29.jpg",
    category: "sculpture",
    location: "St. Peter's Basilica, Vatican City",
    themeConnection: "Michelangelo signed it to assert his right to recognition as the creator, a claim to individual fame unprecedented for sculptors."
  },
  {
    id: "9",
    title: "Printing Press",
    artist: "Johannes Gutenberg",
    year: 1440,
    description: "Gutenberg's invention of movable type printing revolutionized the spread of information, making books affordable and sparking an information revolution.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Printer_in_1568-ce.png/640px-Printer_in_1568-ce.png",
    category: "invention",
    location: "Mainz, Germany",
    themeConnection: "Democratized access to knowledge, implying a right to information, while creating new responsibilities about what to publish."
  },
  {
    id: "10",
    title: "St. Peter's Basilica",
    artist: "Multiple architects",
    year: 1626,
    description: "The largest church in the world, designed by Bramante, Michelangelo, and others. It represents the pinnacle of Renaissance and Baroque architecture and the power of the Catholic Church.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Petersdom_von_Engelsburg_gesehen.jpg/1024px-Petersdom_von_Engelsburg_gesehen.jpg",
    category: "architecture",
    location: "Vatican City",
    themeConnection: "A massive project funded by indulgences, raising questions about religious responsibility that sparked the Reformation."
  },
  {
    id: "11",
    title: "Primavera",
    artist: "Sandro Botticelli",
    year: 1482,
    description: "An allegorical painting depicting mythological figures in a garden, this work demonstrates the Renaissance fascination with classical mythology and Neo-Platonic philosophy.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Botticelli-primavera.jpg/1280px-Botticelli-primavera.jpg",
    category: "painting",
    location: "Uffizi Gallery, Florence",
    themeConnection: "Commissioned by the Medici, it shows how patrons supported art that explored classical themes and humanist philosophy."
  },
  {
    id: "12",
    title: "Vitruvian Man",
    artist: "Leonardo da Vinci",
    year: 1490,
    description: "This iconic drawing explores the ideal human proportions based on the writings of ancient Roman architect Vitruvius, embodying Renaissance humanism's focus on humanity's place in the cosmos.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg/800px-Da_Vinci_Vitruve_Luc_Viatour.jpg",
    category: "manuscript",
    location: "Gallerie dell'Accademia, Venice",
    themeConnection: "Represents the humanist belief in human dignity and the scholar's right to study both ancient texts and the natural world."
  }
];

const categoryInfo = {
  painting: { icon: <Palette className="h-4 w-4" />, label: "Paintings" },
  sculpture: { icon: <User className="h-4 w-4" />, label: "Sculptures" },
  architecture: { icon: <Building2 className="h-4 w-4" />, label: "Architecture" },
  invention: { icon: <Lightbulb className="h-4 w-4" />, label: "Inventions" },
  manuscript: { icon: <ScrollText className="h-4 w-4" />, label: "Manuscripts" },
};

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Visual Collection</Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Renaissance Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore masterpieces that define the Renaissance, from Michelangelo's sculptures 
            to Leonardo's paintings, and discover how each work connects to the theme of 
            rights and responsibilities.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <Tabs defaultValue="all" onValueChange={setActiveCategory} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="flex-wrap h-auto gap-1 p-1">
                <TabsTrigger value="all" className="flex items-center gap-1.5" data-testid="tab-all">
                  All Works
                </TabsTrigger>
                {Object.entries(categoryInfo).map(([key, { icon, label }]) => (
                  <TabsTrigger 
                    key={key} 
                    value={key} 
                    className="flex items-center gap-1.5"
                    data-testid={`tab-${key}`}
                  >
                    {icon}
                    <span className="hidden sm:inline">{label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={activeCategory} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <Card 
                    key={item.id} 
                    className="group cursor-pointer overflow-hidden hover-elevate"
                    onClick={() => setSelectedItem(item)}
                    data-testid={`gallery-item-${item.id}`}
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img 
                        src={item.imageUrl}
                        alt={item.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
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
                          <span className="ml-1 capitalize">{item.category}</span>
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
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedItem && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <Badge variant="outline">
                    {categoryInfo[selectedItem.category].icon}
                    <span className="ml-1 capitalize">{selectedItem.category}</span>
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
                <div className="aspect-video relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    className="object-contain w-full h-full bg-muted"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Description</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedItem.description}
                    </p>
                  </div>
                  
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">NHD Theme</Badge>
                      Connection to Rights & Responsibilities
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
