import { defineType } from "sanity";
import {
  requiredAllLanguagesValidation,
  requiredImgValidation,
} from "../objects/validation";
import { getCodegenConfig } from "../objects/codegen/getCodegenConfig";

export default defineType({
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "ImgUrl",
      type: "image",
      options: {
        hotspot: true,
      },
      ...requiredImgValidation,
      ...getCodegenConfig(),
    },
    {
      name: "description",
      type: "internationalizedArrayText",
      fieldset: "description",
      ...requiredAllLanguagesValidation,
    },
  ],
  fieldsets: [
    {
      name: "description",
      options: {
        collapsible: true,
        collapsed: false,
        modal: { type: "popover" },
      },
    },
  ],
});
