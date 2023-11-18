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
