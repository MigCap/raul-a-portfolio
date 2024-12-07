import { defineType } from "sanity";
import { requiredAllLanguagesValidation } from "../objects/validation";

export default defineType({
  name: "categories",
  title: "Categories",
  type: "document",
  preview: {
    select: {
      title: "title",
      imgUrl: "imgUrl",
    },
    prepare: ({ title }: any) => {
      return {
        title: title[0].value,
      };
    },
  },
  fields: [
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc: any) => {
          return doc.title[0].value;
        },
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      type: "internationalizedArrayString",
      ...requiredAllLanguagesValidation,
    },
  ],
});
