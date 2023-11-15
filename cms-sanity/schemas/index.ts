import {
  home,
  work,
  category,
  experience,
  workExperience,
  //   post,
  //   author,
  blockContent,
} from './documents'

export const schemaTypes = [
  home,
  work,
  category,
  experience,
  workExperience,
  //   post,
  //   author,
  blockContent,
]

export const myStructure = (S: any) =>
  S.list()
    .title('Raul de Diego - Portfolio')
    .items([
      S.listItem()
      .title('Pages')
      .child(
            S.list().title('Pages')
            .items([
                S.listItem().title('Home Page').child(S.document().schemaType('home').documentId('home')),
              ])
        ),
      

      ...S.documentTypeListItems().filter(
        (listItem: any) => !['home', 'workExperience'].includes(listItem.getId()),
      ),
    ])
