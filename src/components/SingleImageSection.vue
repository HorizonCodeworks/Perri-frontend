<template>
  <div class="q-pa-md q-my-xl">
    <div class="row shadow-2 q-rounded-lg full-width flex items-stretch">

      <!-- Imagem Única -->
      <div class="col-md-5 col-12">
        <q-img :src="imageSrc" fit="cover" class="full-height" style="min-height: 300px;" />
      </div>

      <!-- Texto Descritivo -->
      <div class="col-md-7 col-12 text-white bg-dark q-pa-md flex flex-center">
        <div>
          <p class="text-h6 text-bold">
            {{ title }}
          </p>
          <p class="text-body1">
            {{ description }}
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  imageSrc: {
    type: String,
    required: true,
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
.full-height {
  height: 100%;
  width: 100%;
}

@media (max-width: 768px) {
  .full-height {
    min-height: 200px;
  }
}
</style>
