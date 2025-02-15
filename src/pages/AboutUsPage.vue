<template>
  <q-page class="text-white" style="min-height: 100vh">
    <div class="text-h2 text-center q-mt-xl q-mb-xs">Construindo o futuro com excelência</div>
    <div class="text-h2 text-center q-mb-lg">
      Saiba mais sobre a Perri Construções
    </div>

    <q-container class="q-mx-auto" style="max-width: 1200px">
      <SingleImageSection
        imageSrc="/img/HeroSection.jpeg"
        title="A Perri Construção: Excelência em Cada Projeto"
        description="A Perri Construção é uma empresa especializada em projetos residenciais e comerciais, oferecendo soluções inovadoras e de alta qualidade para cada cliente. Com ampla experiência no setor da construção civil, unimos técnica, inovação e compromisso para entregar obras que superam expectativas. Nossa equipe treinada trabalha com os mais altos padrões de segurança e eficiência, garantindo construções funcionais e alinhadas às necessidades do mercado. Buscamos sempre a excelência, transformando projetos em realidade com confiabilidade e precisão."
      />
    </q-container>

    <ComponentAboutUs />

    <ComponentTeam />

    <div class="text-center text-h4">Gostou de conhecer a Perri</div>
    <div class="text-center text-h3 q-mb-md">Entre em contato conosco </div>

    <div class="row justify-center">
      <q-btn
        label="Entrar em contato"
        color="accent"
        rounded
        href="https://wa.me/5511954226136?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.%20Poderia%20me%20ajudar%20com%20mais%20detalhes?"
        target="_blank"
        size="20px"
      />
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import ComponentAboutUs from '../components/ComponentAboutUs.vue'
import ComponentTeam from '../components/ComponentTeam.vue'
import SingleImageSection from '../components/SingleImageSection.vue'
</script>

<style scoped>
.full-height {
  height: 100%;
  width: 100%;
}

@media (max-width: 768px) {
  .full-height {
    min-height: 200px;
  }
  .text-h2 {
    font-size: 1.5rem;
  }
}
</style>
