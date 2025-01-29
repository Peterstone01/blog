import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})

// export default {
//   name: 'category',
//   type: 'document',
//   title: 'Categories',
//   fields: [
//     {
//       name: 'name',
//       type: 'string',
//       title: 'Categories',
//     },
//   ],
// }
