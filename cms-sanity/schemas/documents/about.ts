import { defineType } from "sanity";
import {requiredAllLanguagesValidation, requiredImgValidation} from '../objects/validation'

export const ABOUT_PAGE_TITLE = 'About Page';

export default defineType({
    name:'about',
    title:'About',
    type: 'document',
    preview: {
        select: {
          title: 'title',
        },
        prepare: (_: any) => {
          return {
            title: ABOUT_PAGE_TITLE
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
        // {
        //   name: 'background',
        //   type: 'internationalizedArrayText',
        //   ...requiredAllLanguagesValidation,
        // },
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
