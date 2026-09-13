import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Long-form guides live in src/content/guides/<slug>.md. They are English
 * only and rendered at /guides/<slug>/. Calculator configs reference them by
 * slug in their `guides` array to build the "Further reading" block.
 */
const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    /** Short label for cards and the index page */
    summary: z.string(),
    category: z.enum(["raid", "surveillance", "cloud", "general"]),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    /** English calculator slugs this guide pairs with */
    calculators: z.array(z.string()).default([]),
    /** Rough reading time, minutes */
    readingMinutes: z.number().int().positive(),
  }),
});

export const collections = { guides };
