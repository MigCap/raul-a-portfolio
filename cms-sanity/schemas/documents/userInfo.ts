import {defineType} from 'sanity'
import {requiredImgValidation} from '../objects/validation'

export const USER_INFO_PAGE_TITLE = 'User Info';

export default defineType({
  name: 'user_info',
  title: 'User Info',
  type: 'document',
  preview: {
    select: {
      title: 'name',
    },
    prepare: (_: any) => {
      return {
        title: USER_INFO_PAGE_TITLE
      }
    },
  },
  fields: [
    {
      name: 'name',
      type: 'string',
      fieldset: 'userInformation'
    },
    {
      name: 'fullName',
      type: 'string',
      fieldset: 'userInformation'
    },
    {
      name: 'mainEmail',
      title: 'Main Mail',
      type: 'string',
      fieldset: 'userInformation'
    },
    {
      name: 'contactEmail',
      title: 'Contact Mail',
      type: 'string',
      fieldset: 'userInformation'
    },
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
      name: 'userInformation',
      options: {
        collapsible: false,
        columns: 2,
      },
    }
  ],
})
