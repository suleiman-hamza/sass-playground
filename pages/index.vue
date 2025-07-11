<template>
  <div>
    <h2>Hello Nuxt</h2>
    <button>Fetch</button>
    <p v-if="response">{{ response }}</p>
    <p>{{ pageKey }}</p>

    <div>
        <nuxt-link to="/worry">NEXT PAGEs</nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { $api } = useNuxtApp();
  const route = useRoute();
  const pageKey = computed(() => `page-${route.path.replace(/\//g, '-')}`)
  const { data:response } = useAsyncData('fetchData', () => $fetch('/hello'));
</script>