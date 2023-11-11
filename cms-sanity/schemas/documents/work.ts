import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'works',
  title: 'Works',
  type: 'document',
  fieldsets: [
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
  fields: [
    {
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      fieldset: 'content',
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'string',
      fieldset: 'content',
    },
    {
      name: 'codeLink',
      title: 'Code Link',
      type: 'string',
      fieldset: 'content',
    },
    {
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      fieldset: 'content',
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
})
