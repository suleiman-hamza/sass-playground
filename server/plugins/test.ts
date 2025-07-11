export default defineNitroPlugin((nitroApp) => {
    // This plugin is used to test the server-side functionality
    // It can be used to test server-side logic, database connections, etc.
    console.log('Nitro Plugin', nitroApp);
})