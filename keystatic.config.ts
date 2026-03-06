import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    stories: collection({
      label: 'Success Stories',
      slugField: 'title',
      path: 'src/content/stories/*',
      format: { contentField: 'content', data: 'yaml' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        industry: fields.text({ label: 'Industry' }),
        founderName: fields.text({ label: 'Founder Name' }),
        quote: fields.text({ label: 'Quote', multiline: true }),
        content: fields.markdoc({ label: 'Body' }),
      },
    }),
    guides: collection({
      label: 'Business Guides',
      slugField: 'title',
      path: 'src/content/guides/*',
      format: { contentField: 'content', data: 'yaml' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        category: fields.text({ label: 'Category' }),
        metaDescription: fields.text({ label: 'Meta Description', multiline: true }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});
