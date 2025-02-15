<template>
  <div class="q-pa-md q-my-xl">
    <div class="row shadow-2 q-rounded-lg full-width flex items-stretch">

      <!-- Galeria de Imagens -->
      <div class="col-md-6 col-12 image-gallery">
        <div class="grid-container">
          <q-img v-for="(image, index) in images"
                 :key="index"
                 :src="image"
                 class="gallery-img"
                 fit="cover" />
        </div>
      </div>

      <!-- Texto Descritivo -->
      <div class="col-md-6 col-12 text-white bg-dark q-pa-md flex flex-center">
        <div>
          <p class="text-h6 text-bold">
            COMPROMISSO, QUALIDADE E EXCELÊNCIA: A Força da Nossa Equipe
          </p>
          <p class="text-body1">
            Na nossa empresa, o sucesso de cada projeto é reflexo da dedicação e competência da nossa equipe.
            Com profissionais comprometidos e apaixonados pelo que fazem, buscamos inovação e qualidade
            em cada detalhe. Nossa equipe é treinada para oferecer segurança, eficiência e resultados excepcionais.
            Trabalhamos em conjunto para transformar sonhos em realidade, contribuindo para o crescimento
            e desenvolvimento do setor.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
const images = [
  "/img/img-CR.png",
  "/img/img-CR.png",
  "/img/img-CR.png",
  "/img/img-CR.png",
];
</script>

<style scoped>
/* Estiliza o container para usar grid */
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 colunas */
}

/* Ajusta a largura e altura das imagens */
.gallery-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
</style>
