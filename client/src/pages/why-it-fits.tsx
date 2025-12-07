import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Scale, 
  Palette, 
  BookOpen, 
  Landmark, 
  Users,
  Lightbulb,
  Quote
} from "lucide-react";

export default function WhyItFits() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">NHD 2025 Theme</Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Why the Renaissance Fits
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            How the Renaissance connects to the National History Day 2025 theme: 
            "Rights & Responsibilities in History"
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-serif text-2xl flex items-center gap-2">
                <Scale className="h-6 w-6 text-primary" />
                The Theme Connection
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                The Renaissance (1300-1600) represents one of history's most significant periods for 
                the development of ideas about individual rights and social responsibilities. During 
                this era, Europeans began rethinking fundamental questions: What rights do individuals 
                have? What do we owe to our communities, patrons, and institutions? The answers they 
                developed continue to shape our world today.
              </p>
            </CardContent>
          </Card>

          <h2 className="font-serif text-2xl font-bold mb-6">Key Theme Connections</h2>
          
          <div className="grid gap-6 mb-12">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Palette className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Artistic Freedom vs. Patronage</CardTitle>
                    <CardDescription>The balance between creative rights and obligations</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    Artists gained recognition as creative individuals with the right to personal vision
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    Patrons like the Medici bore responsibility to support arts and learning
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    Artists balanced creative freedom with obligations to commissioners
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Intellectual Inquiry vs. Religious Authority</CardTitle>
                    <CardDescription>The tension between knowledge and orthodoxy</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    Humanists claimed the right to study classical texts directly
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    Scientists like Copernicus navigated responsibility to Church teachings
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    The printing press raised questions about the right to spread ideas
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Landmark className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Civic Participation vs. Civic Duty</CardTitle>
                    <CardDescription>Rights and obligations of citizenship</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    Italian city-states developed republican ideals and citizen participation
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    Citizens bore responsibilities for taxes, military service, and public welfare
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    Wealthy families were expected to contribute to public good
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="font-serif flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                Why This Topic Matters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Renaissance laid the groundwork for modern ideas about individual rights and 
                social responsibility. Concepts developed during this period—artistic freedom, 
                intellectual inquiry, civic participation—continue to shape debates about the 
                balance between personal liberty and community obligation.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                By studying how Renaissance people navigated these tensions, we gain insight into 
                our own struggles to balance rights and responsibilities in the 21st century.
              </p>
            </CardContent>
          </Card>

          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <div className="flex items-start gap-3">
              <Quote className="h-6 w-6 text-primary shrink-0" />
              <div>
                <p className="font-serif italic text-lg mb-2">
                  "We have made thee neither of heaven nor of earth... so that with freedom 
                  of choice and with honor, thou mayest fashion thyself in whatever shape thou shalt prefer."
                </p>
                <p className="text-sm text-muted-foreground">
                  — Giovanni Pico della Mirandola, <em>Oration on the Dignity of Man</em> (1486)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
