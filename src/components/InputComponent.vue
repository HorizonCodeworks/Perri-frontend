<template>
  <div class="custom-btn">
    <button class="button-style" :style="{ backgroundColor: color }">
      {{ title }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
/* Contêiner do botão para centralização ou margens extras */
.custom-btn {
  display: inline-block;
}

/* Estilos do botão */
.button-style {
  border-color: white;
  background: black;
  border-radius: 50px; /* Arredondamento das bordas */
  padding: 5px; /* Ajuste de espaçamento interno */
  font-size: 16px; /* Tamanho da fonte */
  color: white; /* Cor do texto */
  cursor: pointer;
  height: auto;
  transition: all 0.3s ease; /* Suavização para interações */
}

/* Efeito hover */
.button-style:hover {
  opacity: 0.8; /* Transparência no hover */
}

/* Efeito ativo */
.button-style:active {
  transform: scale(0.95); /* Redução ao clicar */
}
</style>
