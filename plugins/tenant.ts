export default defineNuxtPlugin((nuxtApp) => {
    const requestHeader = useRequestHeaders();
    const requestUrl = useRequestURL();

    console.log('Request Headers:', requestHeader);
    console.log('Request URL:', requestUrl.port);

    const api = $fetch.create({
        onRequest({ request, options }) {
            options.headers = {
                ...options.headers,
                ...requestHeader,
                ...{'x-tenant-hostname': requestUrl.hostname}
            };
        }
    })

    return {
        provide: {
            api
        }
    }
})