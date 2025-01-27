<template>
  <q-page>
    <section class="full-width">
      <q-parallax src="https://picsum.photos/500/300">
        <div class="text-h1 text-white text-weight-bold">{{ currentService?.title }}</div>
      </q-parallax>
    </section>
    <main class="text-white">
      <div class="text-h5 text-weight-bold q-pa-md">{{ currentService?.title }}</div>
      <div class="q-pa-md">
        <div class="text-body1">{{ currentService?.subtitle }}</div>
      </div>
    </main>
  </q-page>
</template>

<script lang="ts" setup>
// import type { ICard } from 'src/interfaces/ICard'
import { card_teste } from './IndexConfigs/CardConfig'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const currentService = ref<any>(null)

onMounted(() => {
  const item = card_teste.find((item) => item.id == route.params.id)
  currentService.value = item || null
  console.log(item?.id)
})
</script>

<style></style>
