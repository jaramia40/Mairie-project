import { z, defineCollection } from 'astro:content';

const actualites = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    categorie: z.enum(['travaux', 'conseil', 'info', 'evenement']),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    extrait: z.string().max(160),
    publie: z.boolean().default(true),
  }),
});

const alertes = defineCollection({
  schema: z.object({
    actif: z.boolean(),
    type: z.enum(['meteo', 'travaux', 'coupure']),
    message: z.string(),
    dateDebut: z.date().optional(),
    dateFin: z.date().optional(),
  }),
});

const associations = defineCollection({
  schema: z.object({
    nom: z.string(),
    description: z.string(),
    contact: z.string().optional(),
    email: z.string().email().optional(),
    actif: z.boolean().default(true),
  }),
});

const documents = defineCollection({
  schema: z.object({
    titre: z.string(),
    date: z.date(),
    annee: z.number(),
    fichier: z.string(),
    taille: z.string().optional(),
  }),
});

const agenda = defineCollection({
  schema: z.object({
    titre: z.string(),
    date: z.date(),
    heure: z.string(),
    lieu: z.string(),
    description: z.string(),
    image: z.string().optional(),
    publie: z.boolean().default(true),
  }),
});

export const collections = { actualites, alertes, associations, documents, agenda };
