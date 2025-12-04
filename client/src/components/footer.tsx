import { Link } from "wouter";
import { BookOpen, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-semibold">Renaissance</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An educational exploration of the Renaissance era through the lens of 
              Rights and Responsibilities for National History Day 2025.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/timeline" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Timeline
              </Link>
              <Link href="/rights-responsibilities" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Rights & Responsibilities
              </Link>
              <Link href="/gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Gallery
              </Link>
              <Link href="/bibliography" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Bibliography
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4">Resources</h3>
            <nav className="flex flex-col gap-2">
              <a 
                href="https://nhd.org" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                National History Day <ExternalLink className="h-3 w-3" />
              </a>
              <Link href="/sources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Primary Sources
              </Link>
              <Link href="/process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Process Paper
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            National History Day 2025: Rights & Responsibilities in History
          </p>
          <p className="text-sm text-muted-foreground">
            Created for educational purposes
          </p>
        </div>
      </div>
    </footer>
  );
}
