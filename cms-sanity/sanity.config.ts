import {defineConfig, defineField} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemaTypes, {myStructure} from './schemas'
import {baseLanguage, supportedLanguages} from './schemas/objects/locale/localeStringType'
import { internationalizedArray } from 'sanity-plugin-internationalized-array'

export default defineConfig({
  name: 'default',
  title: 'raul-cms',
  projectId: 'ynv31bfd',
  dataset: 'production',
  plugins: [
    deskTool({
      structure: myStructure,
    }),
    visionTool(),
    internationalizedArray({
      languages: supportedLanguages,
      defaultLanguages: [baseLanguage?.id as string],
      fieldTypes: [
        'string',
        'text',
        defineField({
          name: 'formattedText',
          type: 'array',
          of: [{type: 'block'}],
        } as any),
      ],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
