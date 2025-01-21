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
  background: black; /* Fundo */
  color: white; /* Cor do texto */
  border: 2px solid white; /* Contorno */
  border-radius: 50px; /* Bordas menos arredondadas */
  padding: 10px 16px; /* Espaçamento interno mais ajustado */
  font-size: 14px; /* Texto proporcional */
  font-weight: bold; /* Deixa o texto mais destacado */
  cursor: pointer;
  text-align: center;
  min-width: 120px; /* Define uma largura mínima */
  max-width: 200px; /* Define uma largura máxima */
  transition: all 0.3s ease; /* Animações suaves */
}

/* Efeito hover */
.button-style:hover {
  color: black;
  border-color: black;
  background-color: white; /* Cor de fundo ao passar o mouse */
  opacity: 0.8; /* Transparência no hover */
}

/* Efeito ativo */
.button-style:active {
  transform: scale(0.95); /* Redução ao clicar */
}
</style>
