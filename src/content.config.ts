import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern:"**/*.mdx",base:"./src/content/blog" }),
    schema: z.object({
        slug: z.string(),
        titre: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        pubDate: z.date(), 
        technologies: z.array(
            z.object({
                name: z.string(),
                iconUrl: z.string(),
                color: z.string(),
            })
        ), 
  }),
});

const formations = defineCollection({
    loader: glob({ pattern:"**/*.json", base:"./src/content/formations"}),
    schema: z.object({
        title: z.string(),
        school: z.string(),
        period: z.string(),
        description: z.string(),
    }),
});

const experiences = defineCollection({
    loader: glob({ pattern:"**/*.json",base:"./src/content/experiences"}),
    schema: z.object({
        title: z.string(),
        company: z.string(),
        period: z.string(),
        actions: z.array(z.string()),
    }),
});

export const collections = { blog, experiences, formations };