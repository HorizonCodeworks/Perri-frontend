<template>
  <q-page>
    <div class="text-h3 text-white q-mt-lg q-pa-md">Serviços</div>
    <section class="full-width bg-secondary row justify-around items-center q-pa-xl">
      <q-btn size="52px" round icon="directions" text-color="white" />
      <q-btn size="52px" round icon="directions" text-color="white" />
      <q-btn size="52px" round icon="directions" text-color="white" />
      <q-btn size="52px" round icon="directions" text-color="white" />
    </section>

    <main class="q-mt-xl q-mb-md">
      <div class="text-h3 text-white q-mt-lg q-mb-xl q-pa-md text-center">Portfólio</div>
      <section class="full-width row justify-around items-center flex-wrap q-md-lg">
        <CardComponent
          v-for="(i, index) in card_teste"
          :key="index"
          :title="i.title"
          :subtitle="i.subtitle"
        />
      </section>
    </main>
  </q-page>
</template>

<script setup lang="ts">
import CardComponent from 'src/components/Basic/CardComponent.vue'
import { card_teste } from './IndexConfigs/CardConfig'
</script>
