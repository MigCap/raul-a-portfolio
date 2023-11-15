import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
// import {documentInternationalization} from '@sanity/document-internationalization'
import {schemaTypes} from './schemas'
import {baseLanguage, supportedLanguages} from './schemas/objects/localeStringType'
import { internationalizedArray } from 'sanity-plugin-internationalized-array'

export default defineConfig({
  name: 'default',
  title: 'raul-cms',

  projectId: 'ynv31bfd',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    // documentInternationalization({
    //   // Required configuration
    //   supportedLanguages,
    //   schemaTypes: ['works'],
    //   // Optional
    //   // Customizes the name of the language field
    //   languageField: `language` // defaults to "language"
    // }),
    internationalizedArray({
      languages: supportedLanguages,
      defaultLanguages: [baseLanguage?.id as string],
      fieldTypes: ['string', 'text'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
