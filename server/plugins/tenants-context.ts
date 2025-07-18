export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('request', async (event) => {
        // Get the custom tenant client headers along with
        // the host header for dynamic request routing.
        const xTenantHostname = getRequestHeader(event, 'x-tenant-hostname');
        const hostHeader = getRequestHeader(event, 'host')
    })
})