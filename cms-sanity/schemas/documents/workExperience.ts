import {defineType} from 'sanity'

export default defineType({
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    {name: 'title', type: 'string'},
    {
      name: 'company',
      type: 'string',
    },
    {
      name: 'desc',
      type: 'string',
    },
  ],
})
