import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().max(170),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.enum(['card-values', 'collecting-guides', 'how-to', 'buying-selling', 'sets']),
    tags: z.array(z.string()).default([]),
    faq: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .default([]),
  }),
});

export const collections = { blog };
