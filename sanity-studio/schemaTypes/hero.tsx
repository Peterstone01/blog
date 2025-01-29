import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero image',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      type: 'image',
      title: 'Hero image',
    }),
  ],
})
