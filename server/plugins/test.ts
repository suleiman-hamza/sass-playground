export default defineNitroPlugin((nitro) => {
    // This plugin is used to test the server-side functionality
    // It can be used to test server-side logic, database connections, etc.
    nitro.hooks.hook('request', (event)=> {
        console.log('Request hook for nitro plugin', event.path)
    })
})