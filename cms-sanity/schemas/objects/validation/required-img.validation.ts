export const requiredImgValidation = {
    validation: (Rule: any) => Rule.custom((field: any) => {
        return !field?.asset || field._type !== 'image'
          ? {
            message: 'Please add image',
            paths: field
          }
          : true
      })
}
