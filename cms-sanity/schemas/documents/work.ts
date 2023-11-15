import {defineField, defineType} from 'sanity'
import {workPreview} from '../objects/workPreview'
import { allLanguagesRequiredValidation } from '../objects/validation/allLanguagesValidation'

export default defineType({
  name: 'works',
  title: 'Works',
  type: 'document',
  ...workPreview,
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'title',
      type: 'internationalizedArrayString',
      fieldset: 'title',
      ...allLanguagesRequiredValidation,
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'show_in_main_work_list',
      title: 'Show in main work list',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'internationalizedArrayString',
      fieldset: 'description',
      ...allLanguagesRequiredValidation,
    }),
    defineField({
      name: 'projectLink',
      title: 'Project Link',
      type: 'string',
      fieldset: 'content',
    }),
    defineField({
      name: 'codeLink',
      title: 'Code Link',
      type: 'string',
      fieldset: 'content',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'categories'}}],
      fieldset: 'content',
    }),
    defineField({
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // {
    //   name: 'tags',
    //   title: 'Tags',
    //   type: 'array',
    //   of: [
    //     {
    //       name: 'tag',
    //       title: 'Tag',
    //       type: 'string',
    //     },
    //   ],
    //   fieldset: 'content',
    // },
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
    },
    {
      name: 'content',
      title: 'Content',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
        // columns: 2, // Defines a grid for the fields and how many columns it should have
        modal: {type: 'popover'}, //Makes the modal type a popover
      },
    },
  ],
})
