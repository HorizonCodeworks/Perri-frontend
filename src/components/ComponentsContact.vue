<template>
  <q-page class="flex flex-center column bg-black text-white">
    <h2 class="q-mb-xl dynamic-text">Conheça nossos meios Digitais</h2>
    <div class="row justify-center q-gutter-md">
      <q-card
        v-for="(social, index) in socials"
        :key="index"
        class="q-pa-md col-6 col-sm-4 col-md-w2 text-center social-card"
        clickable
        flat
        @click="openLink(social.link)"
      >
        <q-icon :name="social.icon" size="3rem" />
        <q-card-section>
          <div class="text-h6">{{ social.name }}</div>
          <div class="text-caption">{{ social.description }}</div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const socials = ref([
  {
    name: 'WhatsApp',
    icon: 'mdi-whatsapp',
    description: 'Entre em contato conosco para esclarecer dúvidas e tirar suas dúvidas.',
    link: 'https://wa.me/5511954226136?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.%20Poderia%20me%20ajudar%20com%20mais%20detalhes?'
  },
  {
    name: 'Instagram',
    icon: 'mdi-instagram',
    description: 'Entre em contato conosco pelo Instagram para acompanhar todos os nossos serviços.',
    link: 'https://www.instagram.com/perri_engenharia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
  },
  {
    name: 'Facebook',
    icon: 'mdi-facebook',
    description: 'Pelo Facebook, você também pode nos contatar para saber mais sobre nossos serviços.',
    link: 'https://www.facebook.com/perri.engenharia?locale=pt_BR'
  },
  {
    name: 'YouTube',
    icon: 'mdi-youtube',
    description: 'Pelo YouTube, você poderá acompanhar nossos vídeos com frequência.',
    link: 'https://www.youtube.com/@PerriConstrucao'
  }
]);

const openLink = (url: string) => {
  window.open(url, '_blank');
};
</script>

<style scoped>
.social-card {
  background: #e0e0e0;
  color: black;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer; /* Garante que pareça clicável */
}

.social-card:hover {
  transform: scale(1.05);
  border-color: #007bff;
  box-shadow: 0 4px 10px rgba(0, 123, 255, 0.4);
}

/* Responsividade do texto "Conheça nossos meios Digitais" */
.dynamic-text {
  font-size: 6vw; /* Ajuste proporcional ao tamanho da tela */
  text-align: center;
}

@media (max-width: 0px) {
  .dynamic-text {
    font-size: 8vw; /* Aumenta o tamanho em telas menores */
  }
}

@media (max-width: 480px) {
  .dynamic-text {
    font-size: 10vw; /* Aumenta ainda mais em telas muito pequenas */
  }
}
</style>
