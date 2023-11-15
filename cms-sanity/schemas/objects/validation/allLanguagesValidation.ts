export const allLanguagesRequiredValidation = {
    validation: (Rule: any) => Rule.custom((blocks: any[]) => {
        const emptyBlocks = (blocks || []).filter(block => !block.value)
        return blocks.some((t: any) => !t.value)
          ? {
            message: 'Please fill all languages',
            paths: emptyBlocks
          }
          : true
      })
}
