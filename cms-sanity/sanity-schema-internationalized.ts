// import { InternationalizedArrayString, InternationalizedArrayText, InternationalizedArrayFormattedText } from "./sanity-schema-internationalized";

export type InternationalizedArrayString = Array<{
  _type: 'internationalizedArrayStringValue'
  _key: string
  value: string
}>

export type InternationalizedArrayText = Array<{
  _type: 'internationalizedArrayTextValue'
  _key: string
  value: string
}>

export type InternationalizedArrayFormattedText = Array<{
  _type: 'internationalizedArrayFormattedText'
  _key: string
  value: Array<{
    markDefs: []
    children: {text: string; _key: string; _type: string; marks: []}[]
    _type: string
    style: string
    _key: string
  }>
}>
