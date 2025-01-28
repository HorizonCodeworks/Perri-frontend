<template>
  <q-card class="my-card bg-secondary text-white">
    <q-card-section>
      <q-img :src="img || 'https://picsum.photos/500/300'" />
    </q-card-section>
    <q-card-section>
      <div class="text-h4 text-center q-pa-md">{{ title }}</div>
      <div class="text-subtitle1 q-pa-sm">{{ subtitle }}</div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
defineProps({
  img: {
    type: String,
    required: false,
  },
  title: String,
  subtitle: String,
})
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  min-width: 350px
  min-height: 450px
  max-width: 250px
  max-height: 350px
</style>
