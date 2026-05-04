import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'jaramia40',
      name: 'Mairie-project',
    },
  },
  ui: {
    brand: { name: "Mairie d'Artassenx" },
  },
  collections: {
    actualites: collection({
      label: '📰 Actualités',
      slugField: 'title',
      path: 'src/content/actualites/*',
      format: { frontmatter: 'yaml' },
      schema: {
        title: fields.slug({ name: { label: 'Titre' } }),
        date: fields.date({ label: 'Date' }),
        categorie: fields.select({
          label: 'Catégorie',
          options: [
            { label: 'Travaux', value: 'travaux' },
            { label: 'Conseil', value: 'conseil' },
            { label: 'Info', value: 'info' },
            { label: 'Événement', value: 'evenement' },
          ],
          defaultValue: 'info',
        }),
        image: fields.image({
          label: 'Image',
          directory: 'public/images/uploads',
          publicPath: '/images/uploads',
        }),
        imageAlt: fields.text({ label: 'Texte alternatif image' }),
        extrait: fields.text({ label: 'Extrait (160 car. max)' }),
        publie: fields.checkbox({ label: 'Publié ?', defaultValue: true }),
      },
    }),

    agenda: collection({
      label: '📅 Agenda',
      slugField: 'titre',
      path: 'src/content/agenda/*',
      format: { frontmatter: 'yaml' },
      schema: {
        titre: fields.slug({ name: { label: 'Titre' } }),
        date: fields.date({ label: 'Date' }),
        heure: fields.text({ label: 'Heure (ex: 14h00 ou 14h00–16h00)' }),
        lieu: fields.text({ label: 'Lieu' }),
        description: fields.text({ label: 'Description', multiline: true }),
        image: fields.image({
          label: 'Image',
          directory: 'public/images/uploads',
          publicPath: '/images/uploads',
        }),
        publie: fields.checkbox({ label: 'Publié ?', defaultValue: true }),
      },
    }),

    associations: collection({
      label: '🤝 Associations',
      slugField: 'nom',
      path: 'src/content/associations/*',
      format: { frontmatter: 'yaml' },
      schema: {
        nom: fields.slug({ name: { label: 'Nom' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        contact: fields.text({ label: 'Téléphone' }),
        email: fields.text({ label: 'Email' }),
        actif: fields.checkbox({ label: 'Active ?', defaultValue: true }),
      },
    }),

    documents: collection({
      label: '📄 Comptes-rendus / Documents',
      slugField: 'titre',
      path: 'src/content/documents/*',
      format: { frontmatter: 'yaml' },
      schema: {
        titre: fields.slug({ name: { label: 'Titre' } }),
        date: fields.date({ label: 'Date de séance' }),
        annee: fields.integer({ label: 'Année' }),
        fichier: fields.file({
          label: 'Fichier PDF',
          directory: 'public/documents',
          publicPath: '/documents',
        }),
        taille: fields.text({ label: 'Taille (ex: 2.4 Mo)' }),
      },
    }),
  },

  singletons: {
    alerte: singleton({
      label: '🚨 Alerte urgente',
      path: 'src/content/alertes/active',
      format: { frontmatter: 'yaml' },
      schema: {
        actif: fields.checkbox({ label: 'Alerte active ?', defaultValue: false }),
        type: fields.select({
          label: 'Type',
          options: [
            { label: 'Météo', value: 'meteo' },
            { label: 'Travaux', value: 'travaux' },
            { label: 'Coupure', value: 'coupure' },
          ],
          defaultValue: 'meteo',
        }),
        message: fields.text({ label: 'Message' }),
      },
    }),
  },
});
