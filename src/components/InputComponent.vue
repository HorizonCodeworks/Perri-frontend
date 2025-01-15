<script setup lang="ts">
defineProps({
  title: String,
  color: {
    required: true,
    type: String,
  }
})
</script>

<template>
  <div>
    <q-btn
      flat rounded
      :color="color"
      :unelevated="true"
    >
      {{ title }}
    </q-btn>
  </div>
</template>
