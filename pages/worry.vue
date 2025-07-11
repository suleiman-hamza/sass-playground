<script setup lang="ts">
const route = useRoute();
const pageKey = computed(() => `page-${route.path.replace(/\//g, '-')}`)
const { data: response } = await useAsyncData('fetchData', () => $fetch('/hello'));
</script>

<template>
    <h2>Hello dont worry, Tenants</h2>
    <p>{{ pageKey }}</p>
    <!-- <button @click="handlefetch">Fetch from Hello route</button> -->
    <p>{{ response }}</p>
    <NuxtLink to="/">Back Home</NuxtLink>
</template>