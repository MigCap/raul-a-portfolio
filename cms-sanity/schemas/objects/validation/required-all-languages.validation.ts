export const requiredAllLanguagesValidation = {
    validation: (Rule: any) => Rule.custom((blocks: any[]) => {
        const emptyBlocks = (blocks || []).filter(block => !block.value)
        return blocks.some((t: any) => !t.value) || blocks.length < 4
          ? {
            message: 'Please fill all languages',
            paths: emptyBlocks
          }
          : true
      })
}
