export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event);
    return 'Hello from server'
})