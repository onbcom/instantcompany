import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content', data: 'yaml' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        category: fields.text({ label: 'Category' }),
        publishDate: fields.date({ label: 'Publish Date' }),
        author: fields.text({ label: 'Author' }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
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
