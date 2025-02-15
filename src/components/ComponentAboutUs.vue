<template>
  <div class="q-mt-xl">
    <q-container class="q-mx-auto text-center" style="max-width: 1200px;">
      <div class="row justify-around q-gutter-md">
        <q-card v-for="(service, index) in services" :key="index" flat class="col-6 col-sm-2 text-center">
          <q-icon :name="service.icon" color="blue" size="3rem" />
          <p class="q-mt-sm text-white text-caption">{{ service.title }}</p>
        </q-card>
      </div>
    </q-container>
  </div>
</template>

<script lang="ts" setup>
const services = [
  { icon: "mdi-certificate", title: "Engenheiro Certificado" },
  { icon: "mdi-calendar-check", title: "Dentro do prazo" },
  { icon: "mdi-home-city", title: "Vistoria na Residência" },
  { icon: "mdi-file-document", title: "Projeto Pronto e Assinado" },
];
</script>

<style scoped>
.q-card {
  background-color: #272828;
}
p {
  font-size: 1rem;
  font-weight: 500;
}
</style>
