# Design Guidelines: Renaissance - National History Day 2025

## Design Approach

**Reference-Based Approach**: Drawing inspiration from premier museum websites (The Met, Louvre Digital, British Museum) and educational platforms (Khan Academy, Smithsonian Learning Lab). The design balances scholarly credibility with visual richness appropriate for Renaissance content while maintaining modern web standards for educational accessibility.

**Core Principle**: Create an immersive educational experience that honors the Renaissance's artistic legacy while clearly connecting to the NHD 2025 theme "Rights & Responsibilities in History."

---

## Typography System

**Primary Font**: Crimson Text (Google Fonts) - Elegant serif for headings and scholarly content
**Secondary Font**: Inter (Google Fonts) - Clean sans-serif for body text and UI elements

**Hierarchy**:
- Page Titles: text-5xl md:text-6xl font-serif font-bold
- Section Headings: text-3xl md:text-4xl font-serif font-semibold
- Subsections: text-2xl font-serif font-medium
- Body Text: text-base md:text-lg font-sans leading-relaxed
- Captions/Metadata: text-sm font-sans
- Navigation: text-sm md:text-base font-sans font-medium tracking-wide uppercase

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm (e.g., p-8, gap-12, my-16)

**Container Structure**:
- Full-width sections with inner max-w-7xl mx-auto px-6 md:px-8
- Content-focused sections: max-w-4xl mx-auto
- Reading content: max-w-prose mx-auto

**Grid Patterns**:
- Timeline: Single column with alternating left/right content
- Gallery: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Rights/Responsibilities comparison: grid-cols-1 lg:grid-cols-2
- Primary sources: grid-cols-1 md:grid-cols-2

---

## Component Library

### Navigation
Top navigation bar with:
- Logo/site title (left): "Renaissance: Rights & Responsibilities"
- Main menu (center): Home, Timeline, Rights & Responsibilities, Gallery, Sources, Bibliography, Process
- NHD 2025 badge (right): "National History Day 2025"
- Sticky on scroll with subtle backdrop blur

### Homepage Components

**Hero Section** (h-screen or min-h-[600px]):
- Large hero image: Famous Renaissance artwork (e.g., School of Athens, Sistine Chapel detail)
- Overlay gradient for text readability
- Centered content with backdrop-blur-sm background for buttons
- Headline + subtitle + dual CTA buttons (Explore Timeline, View Gallery)

**Theme Connection Section** (py-20):
- Split layout (lg:grid-cols-2)
- Left: "Rights in the Renaissance" with icon list
- Right: "Responsibilities in the Renaissance" with icon list
- Rich text descriptions connecting to NHD theme

**Quick Stats Section** (py-16):
- 4-column grid (grid-cols-2 lg:grid-cols-4)
- Key facts: Time period, Countries, Artists, Innovations
- Large numbers with small labels

**Featured Content Preview** (py-20):
- 3-card grid showcasing Timeline, Primary Sources, Gallery
- Each card: image, heading, description, "Explore" link

### Timeline Page
- Vertical timeline with alternating content blocks
- Date markers with connecting vertical line
- Each entry: image thumbnail, title, description, expandable details
- Spans 1300-1600 with major Renaissance milestones

### Rights & Responsibilities Page
- Dual-column comparison layout
- Accordion sections for each topic area:
  - Artistic Freedom vs. Patronage Obligations
  - Intellectual Inquiry vs. Religious Orthodoxy
  - Civic Participation vs. Civic Duty
- Primary source quotes integrated throughout
- Connection callouts to NHD theme in highlighted boxes

### Gallery Page
- Masonry-style or grid layout for artwork
- Lightbox modal for enlarged views
- Filters: Art, Architecture, Inventions, Manuscripts
- Each item: image, title, artist, date, historical context
- Descriptive captions connecting to rights/responsibilities

### Primary Sources Page
- Document cards with scan/image previews
- Original text + modern translation side-by-side
- Analysis section connecting to theme
- Download/citation buttons

### Bibliography & Process Paper
- Clean, academic formatting
- MLA/Chicago style citations
- Process paper in article format with embedded images
- Research journey narrative with photos/screenshots

### Footer
- 3-column layout: About NHD, Site Navigation, Resources
- Copyright and creation credits
- Social sharing for educational purposes

---

## Iconography
**Icon Library**: Heroicons (outline style via CDN)
- Navigation: Academic cap, Clock, Document, Photo, Book
- Rights/Responsibilities: Balance scale, Lightbulb, Users, Shield
- Actions: Arrow right, External link, Download, Search

---

## Images

**Required Images**:

1. **Hero Image**: High-resolution Renaissance masterpiece (School of Athens, Creation of Adam, or Primavera) - full-width, height 100vh or min-h-[600px]

2. **Timeline Images**: 10-15 thumbnail images (400x300px) for key events - portraits of figures, architectural landmarks, artwork details

3. **Gallery Section**: 20-30 high-quality images organized by category:
   - Renaissance paintings (Botticelli, da Vinci, Michelangelo, Raphael)
   - Architecture (Florence Cathedral, St. Peter's Basilica)
   - Inventions (printing press, scientific instruments)
   - Manuscripts (illuminated texts)

4. **Primary Sources**: 5-8 document scans/images - historical manuscripts, letters, treatises

5. **Rights & Responsibilities Sections**: 6-8 supporting images illustrating concepts (patrons with artists, printing workshops, civic assemblies)

6. **Process Paper**: Research photos, screenshots of resources, workspace documentation

**Image Treatment**: All images use subtle drop shadows (shadow-lg), rounded corners (rounded-lg), and hover transforms (hover:scale-105 transition-transform) in gallery contexts.

---

## Animations & Interactions

**Minimal, Purposeful Motion**:
- Smooth scrolling for anchor links
- Fade-in on scroll for timeline entries (intersection observer)
- Image hover scales in gallery (scale-105)
- Accordion smooth expand/collapse
- Navigation sticky behavior with subtle shadow on scroll

**No distracting animations** - focus on content accessibility and scholarly presentation.

---

## Accessibility Standards
- WCAG AA compliant contrast ratios throughout
- All images have descriptive alt text
- Keyboard navigation for all interactive elements
- Focus indicators on all focusable elements (ring-2 ring-offset-2)
- Semantic HTML5 elements (article, section, nav, aside)
- Skip-to-content link for navigation