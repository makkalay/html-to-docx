
export default defineEventHandler(async (event) => {
    // Get the template from server assets
    const content = await useStorage('assets:templates').getItemRaw('test.docx') // 'assets:server:templates'
    console.log('------>', content)
})
