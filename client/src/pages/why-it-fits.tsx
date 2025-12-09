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

          <h2 className="font-serif text-2xl font-bold mb-6">Renaissance as a Reformation: Breaking from the Medieval Past</h2>
          
          <Card className="mb-8 border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center gap-2">
                <Scale className="h-5 w-5 text-amber-700" />
                What Changed: Medieval vs. Renaissance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-3 uppercase tracking-wide">Medieval Period</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-700 shrink-0">•</span>
                      <span>Art served religious purposes; artists were anonymous craftspeople</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-700 shrink-0">•</span>
                      <span>Knowledge came from Church authority and ancient texts (filtered through Church interpretation)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-700 shrink-0">•</span>
                      <span>Feudal hierarchies controlled participation; most people had fixed social roles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-700 shrink-0">•</span>
                      <span>Latin dominated learning; common people excluded from education</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-3 uppercase tracking-wide">Renaissance Period</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary shrink-0">✓</span>
                      <span>Artists became celebrated individuals with personal styles and reputations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary shrink-0">✓</span>
                      <span>Scholars studied classical texts directly; humanists developed critical reading methods</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary shrink-0">✓</span>
                      <span>City-states created new forms of civic participation and citizenship</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary shrink-0">✓</span>
                      <span>Printing press and vernacular languages made knowledge more accessible</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                Why "Renaissance" Means Reformation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                The word "Renaissance" literally means "rebirth"—and that's exactly what it was. Renaissance thinkers 
                believed they were reforming their society by returning to the best of classical antiquity (Greece and Rome), 
                which they saw as a lost golden age. They rejected what they saw as the ignorance and superstition of the 
                "Dark Ages" and "Middle Ages."
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                In this sense, the Renaissance was a <strong>reformation</strong> in the truest meaning of the word: 
                a fundamental re-formation of society, culture, and values. Like any reformation, it involved:
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Challenging established authority</strong> — Questioning medieval institutions and ways of thinking</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Returning to sources</strong> — Going back to classical texts rather than medieval interpretations</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Spreading new ideas</strong> — Using new technology (printing press) to reach more people</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Transforming society</strong> — Creating new roles, rights, and responsibilities for individuals</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="font-serif text-2xl font-bold mb-6 mt-12">Key Theme Connections</h2>
          
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
