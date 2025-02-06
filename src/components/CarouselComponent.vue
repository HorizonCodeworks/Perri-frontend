<template>
  <div class="q-pa-md">
    <q-carousel v-model="slide" arrows animated height="650px">
      <q-carousel-slide name="first" img-src="img/Obra-jed1.jpeg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Inicio Piscina </div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide name="second" img-src="img/Obra-jed2.jpeg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Durante Piscina </div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide name="third" img-src="img/Obra-jed3.jpeg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Final Piscina </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const slide = ref('first') // Controle do carrossel
</script>

<style scoped>
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
