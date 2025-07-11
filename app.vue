<template>
  <div>
    <h2>Hello Nuxt</h2>
    <button>Fetch</button>
    <p v-if="response">{{ response }}</p>
  </div>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig();
  // console.log('API Secret:', config.public.apiBase);
  const { data:response } = useAsyncData('fetchData', () => $fetch('/hello'));
</script>