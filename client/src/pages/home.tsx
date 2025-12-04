import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Image as ImageIcon, 
  FileText, 
  Scale, 
  Lightbulb, 
  Users, 
  Palette, 
  Building2,
  ScrollText,
  ArrowRight,
  Sparkles,
  BookOpen,
  GraduationCap,
  Landmark
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/2560px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <Badge 
            variant="secondary" 
            className="mb-6 text-sm font-medium bg-white/10 text-white border-white/20 backdrop-blur-sm"
          >
            National History Day 2025
          </Badge>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            The Renaissance
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-4 font-serif italic">
            Rights & Responsibilities in History
          </p>
          
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Explore how the rebirth of classical learning from 1300-1600 transformed ideas 
            about individual rights, artistic freedom, and civic responsibility across Europe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/timeline">
              <Button 
                size="lg" 
                className="w-full sm:w-auto backdrop-blur-sm"
                data-testid="button-explore-timeline"
              >
                <Clock className="mr-2 h-4 w-4" />
                Explore Timeline
              </Button>
            </Link>
            <Link href="/gallery">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto bg-white/10 text-white border-white/30 backdrop-blur-sm"
                data-testid="button-view-gallery"
              >
                <ImageIcon className="mr-2 h-4 w-4" />
                View Gallery
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">NHD 2025 Theme</Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Connecting to the Theme
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              The Renaissance marked a pivotal shift in how individuals and societies 
              understood their rights and responsibilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Scale className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-2xl">Rights in the Renaissance</CardTitle>
                </div>
                <CardDescription className="text-base">
                  The era expanded notions of individual rights and freedoms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Palette className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Artistic Freedom</h4>
                    <p className="text-sm text-muted-foreground">
                      Artists gained recognition as creative individuals rather than anonymous craftsmen, 
                      claiming the right to personal artistic vision and expression.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Intellectual Inquiry</h4>
                    <p className="text-sm text-muted-foreground">
                      Humanists championed the right to question tradition, study classical texts, 
                      and pursue knowledge through reason and observation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Civic Participation</h4>
                    <p className="text-sm text-muted-foreground">
                      Italian city-states developed republican ideals, expanding citizens' rights 
                      to participate in governance and public life.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-md bg-accent/10">
                    <ScrollText className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <CardTitle className="font-serif text-2xl">Responsibilities of the Era</CardTitle>
                </div>
                <CardDescription className="text-base">
                  With new rights came corresponding obligations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-5 w-5 text-accent-foreground mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Patronage Obligations</h4>
                    <p className="text-sm text-muted-foreground">
                      Wealthy families like the Medici accepted responsibility to support arts and 
                      learning, funding artists, scholars, and public works.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Landmark className="h-5 w-5 text-accent-foreground mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Civic Duty</h4>
                    <p className="text-sm text-muted-foreground">
                      Citizens bore responsibility for the welfare of their city-states through 
                      taxes, military service, and participation in civic institutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-accent-foreground mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Religious Orthodoxy</h4>
                    <p className="text-sm text-muted-foreground">
                      Despite intellectual freedom, artists and scholars navigated responsibilities 
                      to religious institutions that commissioned and censored their work.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/rights-responsibilities">
              <Button variant="outline" size="lg" data-testid="button-explore-theme">
                Explore Theme in Depth
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center p-6">
              <p className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">300+</p>
              <p className="text-sm md:text-base text-muted-foreground">Years of Transformation</p>
              <p className="text-xs text-muted-foreground mt-1">1300-1600</p>
            </div>
            <div className="text-center p-6">
              <p className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">12</p>
              <p className="text-sm md:text-base text-muted-foreground">Major European Centers</p>
              <p className="text-xs text-muted-foreground mt-1">Florence, Rome, Venice & more</p>
            </div>
            <div className="text-center p-6">
              <p className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">100s</p>
              <p className="text-sm md:text-base text-muted-foreground">Revolutionary Artists</p>
              <p className="text-xs text-muted-foreground mt-1">Da Vinci, Michelangelo & more</p>
            </div>
            <div className="text-center p-6">
              <p className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">1440</p>
              <p className="text-sm md:text-base text-muted-foreground">Printing Press Invented</p>
              <p className="text-xs text-muted-foreground mt-1">By Johannes Gutenberg</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Explore the Renaissance
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dive deeper into this transformative period through our curated collections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="group hover-elevate overflow-visible">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
                  alt="Mona Lisa by Leonardo da Vinci"
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="h-4 w-4 text-primary" />
                  <Badge variant="secondary" className="text-xs">Interactive</Badge>
                </div>
                <CardTitle className="font-serif">Timeline</CardTitle>
                <CardDescription>
                  Journey through key events from 1300 to 1600, from Petrarch's humanism 
                  to the height of the High Renaissance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/timeline">
                  <Button variant="ghost" className="w-full group/btn" data-testid="link-timeline">
                    Explore Timeline
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover-elevate overflow-visible">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/1280px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg"
                  alt="Creation of Adam by Michelangelo"
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="h-4 w-4 text-primary" />
                  <Badge variant="secondary" className="text-xs">Historical</Badge>
                </div>
                <CardTitle className="font-serif">Primary Sources</CardTitle>
                <CardDescription>
                  Read original texts from Renaissance thinkers, artists, and leaders 
                  that shaped ideas about rights and duties.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/sources">
                  <Button variant="ghost" className="w-full group/btn" data-testid="link-sources">
                    View Sources
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover-elevate overflow-visible">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/1280px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg"
                  alt="The Birth of Venus by Sandro Botticelli"
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <ImageIcon className="h-4 w-4 text-primary" />
                  <Badge variant="secondary" className="text-xs">Visual</Badge>
                </div>
                <CardTitle className="font-serif">Art Gallery</CardTitle>
                <CardDescription>
                  Discover masterpieces that embody Renaissance ideals of beauty, 
                  humanism, and the balance of rights and responsibilities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/gallery">
                  <Button variant="ghost" className="w-full group/btn" data-testid="link-gallery">
                    Browse Gallery
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <Sparkles className="h-10 w-10 mx-auto mb-6 opacity-80" />
          <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl italic mb-6 leading-relaxed">
            "Every painter paints himself."
          </blockquote>
          <p className="text-primary-foreground/80 mb-2">
            Cosimo de' Medici, quoting an Italian proverb
          </p>
          <p className="text-sm text-primary-foreground/60">
            Reflecting the Renaissance belief that artistic creation was an expression 
            of individual identity and rights.
          </p>
        </div>
      </section>
    </div>
  );
}
