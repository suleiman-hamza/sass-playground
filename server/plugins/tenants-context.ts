export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('request', async (event) => {
        // Get the custom tenant client headers along with
        // the host header for dynamic request routing.
        const xTenantHostname = getRequestHeader(event, 'x-tenant-hostname');
        const hostHeader = getRequestHeader(event, 'host')

        const hostname = String(xTenantHostname || hostHeader || "").replace(/\/$/, '').split(':')[0] || ''
        const id = await useStorage('kv').getItem<string>(`tenant:id:${hostname}`);

        // Attach tenant data to the event context to make it
        // available to all server routes and middleware.
        event.context.tenant = { id, hostname }
    })
})