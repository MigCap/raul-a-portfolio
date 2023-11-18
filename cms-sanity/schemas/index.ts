import {
  userInfo,
  home,
  about,
  work,
  category,
  experience,
  workExperience,
  //   post,
  //   author,
  blockContent,
} from './documents'
import { ABOUT_PAGE_TITLE } from './documents/about'
import { HOME_PAGE_TITLE } from './documents/home'
import { USER_INFO_PAGE_TITLE } from './documents/userInfo'

const schemaTypes = [
  userInfo,
  home,
  about,
  work,
  category,
  experience,
  workExperience,
  //   post,
  //   author,
  blockContent,
]

export default schemaTypes;

export const myStructure = (S: any) =>
  S.list()
    .title('Raul de Diego - Portfolio')
    .items([
      S.listItem().title(USER_INFO_PAGE_TITLE).child(S.document().schemaType(userInfo.name).documentId(userInfo.name)),
      S.listItem()
      .title('Pages')
      .child(
            S.list().title('Pages')
            .items([
                S.listItem().title(HOME_PAGE_TITLE).child(S.document().schemaType(home.name).documentId(home.name)),
                S.listItem().title(ABOUT_PAGE_TITLE).child(S.document().schemaType(about.name).documentId(about.name)),
              ])
        ),
      ...S.documentTypeListItems().filter(
        (listItem: any) => ![userInfo.name, home.name, about.name, workExperience.name].includes(listItem.getId()),
      ),
    ])
