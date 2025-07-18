import type { UseFetchOptions } from 'nuxt/app';

export function useApi<T>(URL: string, options?: UseFetchOptions<T>) {
    
    return useFetch(URL, {
        ...options,
        $fetch: useNuxtApp().$api as typeof $fetch
    }) 
}