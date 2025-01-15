<template>
  <div class="service-item">
    <div class="icon">
      <img :src="icon" :alt="altText" />
    </div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    default: 'Ícone',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>


<style scoped>
.service-item {
  background-color: rgba(255, 255, 255, 0.1); /* Fundo semitransparente */
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-item:hover {
  transform: scale(1.05);
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4);
}

.icon {
  margin-bottom: 15px;
}

.icon img {
  width: 50px;
  height: 50px;
}

h3 {
  margin: 10px 0;
  font-size: 1.5rem;
  color: #ffd700; /* Dourado */
}

p {
  font-size: 1rem;
  line-height: 1.5;
}
</style>
