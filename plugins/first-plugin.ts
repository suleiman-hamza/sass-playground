export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            // This is a simple plugin that provides a function to the Nuxt app
            greet: (name: string) => {
                return `Hello, ${name}! Welcome to Nuxt!`;
            }
        }
    }
})