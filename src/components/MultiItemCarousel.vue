<template>
  <div class="carousel">
    <div class="carousel-wrapper">
      <div
        class="carousel-track"
        :style="{ transform: `translateX(-${currentIndex * itemWidth}px)` }"
      >
        <div v-for="(item, index) in items" :key="index" class="carousel-item">
          {{ item }}
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <button @click="prev" class="nav-button">Prev</button>
    <button @click="next" class="nav-button">Next</button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
// defineProps({
//   items: {
//     require: true,
//     type: Array<any>
//   }
// })
const items = ref(['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5', 'Slide 6'])
const currentIndex = ref(0)
const visibleItems = ref(3)

const itemWidth = computed(() => {
  return 100 / visibleItems.value
})
const maxIndex = computed(() => {
  return items.value.length - visibleItems.value
})

const next = (): void => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++
  }
}

const prev = (): void => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
</script>

<style>
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  margin: auto;
}

.carousel-wrapper {
  display: flex;
  width: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.carousel-item {
  flex: 0 0 calc(100% / 3);
  text-align: center;
  background: #f0f0f0;
  padding: 20px;
  border: 1px solid #ddd;
  box-sizing: border-box;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.nav-button:hover {
  background: #0056b3;
}

.nav-button:first-of-type {
  left: 10px;
}

.nav-button:last-of-type {
  right: 10px;
}
</style>
