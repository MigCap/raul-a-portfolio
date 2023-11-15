import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes, myStructure} from './schemas'
import {baseLanguage, supportedLanguages} from './schemas/objects/localeStringType'
import { internationalizedArray } from 'sanity-plugin-internationalized-array'
// import {documentInternationalization} from '@sanity/document-internationalization'

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
      fieldTypes: ['string', 'text'],
    }),
    // documentInternationalization({
    //   // Required configuration
    //   supportedLanguages,
    //   schemaTypes: ['works'],
    //   // Optional
    //   // Customizes the name of the language field
    //   languageField: `language` // defaults to "language"
    // }),
  ],
  schema: {
    types: schemaTypes,
  },
})
