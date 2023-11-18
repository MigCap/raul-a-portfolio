import {defineType} from 'sanity'
import {requiredAllLanguagesValidation, requiredImgValidation} from '../objects/validation'

export const HOME_PAGE_TITLE = 'Home Page';

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
        title: HOME_PAGE_TITLE
      }
    },
  },
  fields: [
    {
      name: 'title',
      type: 'internationalizedArrayString',
      fieldset: 'title',
      ...requiredAllLanguagesValidation,
    },
    {
      name: 'description',
      type: 'internationalizedArrayString',
      fieldset: 'description',
      ...requiredAllLanguagesValidation,
    },
    {
      name: 'long_description',
      type: 'internationalizedArrayText',
      fieldset: 'description',
      ...requiredAllLanguagesValidation,
    },
    {
      name: 'imgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
      ...requiredImgValidation,
    },
  ],
  fieldsets: [
    {
      name: 'title',
      options: {
        collapsible: true,
        collapsed: true,
        modal: {type: 'popover'},
      },
    },
    {
      name: 'description',
      options: {
        collapsible: true,
        collapsed: true,
        modal: {type: 'popover'},
      },
    }
  ],
})
