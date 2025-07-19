export default defineNuxtPlugin({
    name: 'tenant-theme',
    async setup() {
        const { data:tenantConfig } = await useApi('/api/config')

        useHeadSafe({
            // Add a `data-theme` attribute to the root <html> element
            htmlAttrs: { 'data-theme': tenantConfig.value?.theme?.name || 'default' },
        })
    }
})