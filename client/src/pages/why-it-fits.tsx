import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Zap,
  BookOpen, 
  Users,
  Lightbulb,
  Quote,
  TrendingUp
} from "lucide-react";

export default function WhyItFits() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">NHD Theme</Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Why the Renaissance Fits the Reformation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            How the Renaissance movement directly enabled, shaped, and accelerated 
            the religious and intellectual revolution known as the Reformation
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <Card className="mb-8 border-primary/30 bg-primary/5">
            <CardHeader>
              <CardTitle className="font-serif text-2xl flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                The Direct Connection
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                The Renaissance (1300-1600) and the Reformation (1517 onwards) are inseparable historical movements. 
                Without the intellectual, technological, and cultural innovations of the Renaissance, the Reformation 
                could not have occurred. The Renaissance created the conditions, tools, and mindset that made it possible 
                for Martin Luther and other reformers to challenge the Church and transform Christianity forever.
              </p>
            </CardContent>
          </Card>

          <h2 className="font-serif text-2xl font-bold mb-6">How the Renaissance Enabled the Reformation</h2>
          
          <div className="grid gap-6 mb-12">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Humanism & Textual Criticism</CardTitle>
                    <CardDescription>Returning to original sources</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    Renaissance humanists developed techniques to study ancient texts in their original languages (Latin, Greek, Hebrew)
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    Scholars like Lorenzo Valla discovered errors in the Latin Vulgate Bible and Church documents
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    Martin Luther used this same textual approach to question Church teachings and argue "sola scriptura" (Scripture alone)
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    The scholarly framework of the Renaissance made theological challenge possible
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">The Printing Press</CardTitle>
                    <CardDescription>Technology that spread the Reformation</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    Johannes Gutenberg invented the printing press in 1440, during the early Renaissance
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    The Renaissance valued literacy, learning, and the dissemination of texts
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    When Martin Luther published his 95 Theses (1517), the printing press allowed them to spread across Europe in weeks
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    Without Renaissance printing technology, the Reformation would have remained a local dispute
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Intellectual Freedom & Questioning</CardTitle>
                    <CardDescription>A culture of challenge and debate</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    Renaissance thinkers celebrated reason, observation, and questioning of authority
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    Renaissance universities and patrons encouraged debate and intellectual experimentation
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    This culture created the intellectual confidence needed for religious reformers to challenge the Church
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    Luther, Calvin, and others came from Renaissance-educated backgrounds
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Individual Agency & Personal Conscience</CardTitle>
                    <CardDescription>Empowering the individual</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    Renaissance humanism placed unprecedented emphasis on individual potential and achievement
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    The Protestant Reformation emphasized "the priesthood of all believers" and individual reading of Scripture
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    This directly reflects Renaissance values of individual dignity and agency
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    Both movements empowered people to think and act for themselves
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary/5 border-primary/20 mb-8">
            <CardHeader>
              <CardTitle className="font-serif flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Reformation as Renaissance in Religious Form
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Reformation was essentially the Renaissance applied to theology and religion. Both movements shared 
                core values: returning to original sources (classical texts vs. Scripture), valuing individual judgment 
                over institutional authority, using new technologies to spread ideas, and celebrating human potential 
                and dignity.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Where the Renaissance transformed art, literature, and learning, the Reformation transformed faith, 
                church structure, and religious practice. Neither could have happened without the other.
              </p>
            </CardContent>
          </Card>

          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <div className="flex items-start gap-3">
              <Quote className="h-6 w-6 text-primary shrink-0" />
              <div>
                <p className="font-serif italic text-lg mb-2">
                  "Ad fontes" — "To the sources!"
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  The rallying cry of Renaissance humanists, equally adopted by Reformation scholars
                </p>
                <p className="text-xs text-muted-foreground">
                  This phrase encapsulates the shared commitment of both movements: to abandon 
                  intermediaries and authorities, returning directly to original texts and truths.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
