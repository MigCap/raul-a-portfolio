export function getCodegenConfig(overWrite = { required: true }) {
    return {
        codegen: {
            ...overWrite
        }
    }
}
