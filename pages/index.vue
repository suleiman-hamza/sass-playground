<template>
  <div>
    <h2>Hello Nuxt</h2>
    <button>Fetch</button>
    <p v-if="response">{{ response }}</p>
    <p v-if="dumbo">{{ dumbo }}</p>
    <p>{{ pageKey }}</p>
    <p>{{ pageData }}</p>

    <div>
        <nuxt-link to="/worry">NEXT PAGEs</nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useApi } from '#imports';
  const { $api } = useNuxtApp();
  const route = useRoute();
  const pagePath = computed(() => encodeURIComponent(route.path))

  const { data: pageData } = await useApi(`/api/pages/${pagePath.value}`)
  const pageKey = computed(() => `page-${route.path.replace(/\//g, '-')}`)
  // trying fetch from server routes with server plugin logging a hook for the routes
  const { data:response } = useAsyncData('fetchData', () => $fetch('/hello'));
  const { data:dumbo } = useAsyncData('fetchD', () => $fetch('/chain'));
</script>