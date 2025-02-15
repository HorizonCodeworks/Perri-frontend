<template>
  <q-page>
    <main class="q-mb-xl q-pa-md" style="margin-top: 100px">
      <div class="text-h3 text-white q-mt-lg q-mb-xl q-pa-md text-center">Portfólio</div>
      <section class="full-width row justify-around items-center flex-wrap q-gutter-y-lg">
        <CardComponent
          v-for="(i, index) in card_teste"
          :key="index"
          :title="i.title"
          :subtitle="i.subtitle"
          class="q-mt-md cursor-pointer shadow-2xl hover-scale"
          @click="goTo(i.id)"
        />
      </section>
    </main>

    <!--carousel-->
    <div>
      <div class="text-h2 text-center bg-dark text-white">Serviços</div>
      <CarouselComponent />
    </div>
</q-page>
</template>

<script lang="ts" setup>
import CarouselComponent from 'src/components/CarouselComponent.vue'
import CardComponent from 'src/components/Basic/CardComponent.vue'
import { card_teste } from './IndexConfigs/CardConfig'
import { useRouter } from 'vue-router'



const router = useRouter()

const goTo = (id: string | number) => {
  return router.push({ path: `services/${id}`, replace: true })
}
</script>

<style>

</style>