export const workPreview = {
    preview: {
        select: {
          title: 'title',
          imgUrl: 'imgUrl'
        },
        prepare: ({title, imgUrl}: any) => {
          return {
            title: title[0].value,
            media: imgUrl
          }
        }
      }
}
