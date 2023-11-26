import {defineField, defineType} from 'sanity'
import { requiredAllLanguagesValidation } from '../objects/validation'

export default defineType({
  name: 'categories',
  title: 'Categories',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      imgUrl: 'imgUrl',
    },
    prepare: ({title}: any) => {
      return {
        title: title[0].value
      }
    },
  },
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc: any) => {
          return doc.title[0].value
        },
        maxLength: 96,

      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'title',
      type: 'internationalizedArrayString',
      ...requiredAllLanguagesValidation,
    }),
    // defineField({
    //   name: 'description',
    //   title: 'Description',
    //   type: 'text',
    // }),
  ],
})
