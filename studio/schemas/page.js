export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'text',
      title: 'Page Text',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      manufactor: 'manufactor.title',
    },
  },
}
