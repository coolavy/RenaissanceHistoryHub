import { z } from "zod";

// Timeline Event Schema
export const timelineEventSchema = z.object({
  id: z.string(),
  year: z.number(),
  title: z.string(),
  description: z.string(),
  category: z.enum(["art", "science", "politics", "religion", "culture"]),
  location: z.string(),
  imageUrl: z.string().optional(),
  rightsConnection: z.string().optional(),
  responsibilitiesConnection: z.string().optional(),
});

export type TimelineEvent = z.infer<typeof timelineEventSchema>;
export type InsertTimelineEvent = Omit<TimelineEvent, "id">;

// Gallery Item Schema
export const galleryItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  artist: z.string().optional(),
  year: z.number().optional(),
  description: z.string(),
  imageUrl: z.string(),
  category: z.enum(["painting", "sculpture", "architecture", "invention", "manuscript"]),
  themeConnection: z.string(),
});

export type GalleryItem = z.infer<typeof galleryItemSchema>;
export type InsertGalleryItem = Omit<GalleryItem, "id">;

// Primary Source Schema
export const primarySourceSchema = z.object({
  id: z.string(),
  title: z.string(),
  author: z.string(),
  year: z.number(),
  originalText: z.string(),
  modernTranslation: z.string().optional(),
  analysis: z.string(),
  themeConnection: z.string(),
  sourceType: z.enum(["letter", "treatise", "decree", "artwork", "speech"]),
  imageUrl: z.string().optional(),
});

export type PrimarySource = z.infer<typeof primarySourceSchema>;
export type InsertPrimarySource = Omit<PrimarySource, "id">;

// Bibliography Entry Schema
export const bibliographyEntrySchema = z.object({
  id: z.string(),
  type: z.enum(["book", "article", "website", "primary", "documentary"]),
  authors: z.array(z.string()),
  title: z.string(),
  publisher: z.string().optional(),
  year: z.number().optional(),
  url: z.string().optional(),
  accessDate: z.string().optional(),
  pages: z.string().optional(),
  annotation: z.string().optional(),
});

export type BibliographyEntry = z.infer<typeof bibliographyEntrySchema>;
export type InsertBibliographyEntry = Omit<BibliographyEntry, "id">;

// Rights and Responsibilities Content
export const rightsResponsibilitiesSchema = z.object({
  id: z.string(),
  category: z.string(),
  rights: z.array(z.object({
    title: z.string(),
    description: z.string(),
    examples: z.array(z.string()),
  })),
  responsibilities: z.array(z.object({
    title: z.string(),
    description: z.string(),
    examples: z.array(z.string()),
  })),
  primarySourceQuote: z.string().optional(),
  primarySourceAuthor: z.string().optional(),
});

export type RightsResponsibilities = z.infer<typeof rightsResponsibilitiesSchema>;

// Keep the users table for the template
import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
