import {defineType} from 'sanity'
import {requiredAllLanguagesValidation, requiredImgValidation} from '../objects/validation'
import {getCodegenConfig} from '../objects/codegen/getCodegenConfig'

export const ABOUT_PAGE_TITLE = 'About Page'

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  preview: {
    select: {
      title: "title",
    },
    prepare: (_: any) => {
      return {
        title: ABOUT_PAGE_TITLE,
      };
    },
  },
  fields: [
    {
      name: "title",
      type: "internationalizedArrayString",
      fieldset: "title",
      ...requiredAllLanguagesValidation,
      ...getCodegenConfig(),
    },
    {
      name: "description",
      type: "internationalizedArrayString",
      fieldset: "description",
      ...requiredAllLanguagesValidation,
      ...getCodegenConfig(),
    },
    {
      name: "long_description",
      type: "internationalizedArrayText",
      fieldset: "description",
      ...requiredAllLanguagesValidation,
      ...getCodegenConfig(),
    },
    {
      name: "background",
      type: "internationalizedArrayFormattedText",
      fieldset: "background",
      ...requiredAllLanguagesValidation,
      ...getCodegenConfig(),
    },
    {
      name: "education",
      type: "internationalizedArrayFormattedText",
      fieldset: "education",
      ...requiredAllLanguagesValidation,
      ...getCodegenConfig(),
    },
    {
      name: "skills",
      type: "internationalizedArrayFormattedText",
      fieldset: "skills",
      ...requiredAllLanguagesValidation,
      ...getCodegenConfig(),
    },
    {
      name: "imgUrl",
      type: "image",
      options: {
        hotspot: true,
      },
      ...requiredImgValidation,
      ...getCodegenConfig(),
    },
  ],
  fieldsets: [
    {
      name: "title",
      options: {
        collapsible: true,
        collapsed: true,
        modal: { type: "popover" },
      },
    },
    {
      name: "description",
      options: {
        collapsible: true,
        collapsed: true,
        modal: { type: "popover" },
      },
    },
    {
      name: "background",
      options: {
        collapsible: true,
        collapsed: true,
        modal: { type: "popover" },
      },
    },
    {
      name: "education",
      options: {
        collapsible: true,
        collapsed: true,
        modal: { type: "popover" },
      },
    },
    {
      name: "skills",
      options: {
        collapsible: true,
        collapsed: true,
        modal: { type: "popover" },
      },
    },
  ],
});
