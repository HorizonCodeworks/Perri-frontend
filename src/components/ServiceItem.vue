<template>
  <div
    class="service-card"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <!-- Ícone centralizado em um círculo -->
    <div class="icon">
      <img :src="icon" :alt="title" />
    </div>
    <!-- Título do card -->
    <p class="title">{{ title }}</p>

    <!-- Conteúdo exibido ao passar o mouse -->
    <div class="hover-content" v-if="hover">
      <div class="details">
        <p class="description">{{ description }}</p>
        <img :src="image" :alt="title" class="details-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceCard",
  props: {
    icon: {
      type: String,
      default: "path/to/default-icon.png",
    },
    title: {
      type: String,
      default: "Título Padrão",
    },
    description: {
      type: String,
      default: "Descrição padrão para o serviço.",
    },
    image: {
      type: String,
      default: "path/to/default-image.jpg",
    },
  },
  data() {
    return {
      hover: false, // Controle do estado de hover
    };
  },
};
</script>

<style scoped>
/* Estilo do card principal */
.service-card {
  width: 150px; /* Largura do card */
  color: white; /* Cor do texto */
  border-radius: 50%; /* Formato circular */
  text-align: center; /* Centraliza o conteúdo */
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* Efeito de hover no card */
.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

/* Estilo do ícone no centro */
.icon {
  width: 80px;
  height: 80px;
  background: #232222; /* Fundo do círculo do ícone */
  border-radius: 50%; /* Deixa o fundo circular */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.icon img {
  width: 50%; /* Ícone ocupa metade do círculo */
  height: 50%;
  object-fit: contain;
}

/* Título abaixo do ícone */
.title {
  font-size: 0.9rem; /* Tamanho do texto */
  margin: 5px 0 0;

}

/* Conteúdo adicional exibido no hover */
.hover-content {
  position: absolute;
  top: 100%; /* Aparece abaixo do card */
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8); /* Fundo escuro */
  border-radius: 10px;
  padding: 10px;
  width: 180px; /* Largura do conteúdo */
  text-align: left;
  z-index: 10;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
}

/* Descrição do hover */
.description {
  font-size: 0.8rem; /* Tamanho do texto da descrição */
  color: #ddd; /* Cor do texto */
}

/* Imagem adicional exibida no hover */
.details-image {
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
}
</style>
