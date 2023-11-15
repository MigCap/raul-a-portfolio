import {defineType} from 'sanity'
import {allLanguagesRequiredValidation} from '../objects/validation/allLanguagesValidation'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  preview: {
    select: {
      title: 'title',
    },
    prepare: (_: any) => {
      return {
        title: 'Home Page'
      }
    },
  },
  fields: [
    {
      name: 'title',
      type: 'internationalizedArrayString',
      fieldset: 'title',
      ...allLanguagesRequiredValidation,
    },
    {
      name: 'description',
      type: 'internationalizedArrayString',
      fieldset: 'description',
      ...allLanguagesRequiredValidation,
    },
    {
      name: 'long_description',
      type: 'internationalizedArrayText',
      fieldset: 'description',
      ...allLanguagesRequiredValidation,
    },
    {
      name: 'imgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  fieldsets: [
    {
      name: 'title',
      options: {
        collapsible: true,
        collapsed: false,
        modal: {type: 'popover'},
      },
    },
    {
      name: 'description',
      options: {
        collapsible: true,
        collapsed: false,
        modal: {type: 'popover'},
      },
    }
  ],
})
