<template>
  <q-page>
    <q-page-sticky position="bottom-left" :offset="[18, 18]" style="z-index: 999">
      <q-btn fab icon="fa-brands fa-whatsapp" color="green" />
    </q-page-sticky>
    <div class="text-h2 text-white q-mt-lg q-pa-md text-weight-bolder">Serviços</div>
    <section class="full-width bg-secondary row justify-around items-center q-pa-xl">
      <div class="column items-center text-center q-mx-md" v-for="i in ServicesConfig" :key="i.id">
        <q-btn
          size="25px"
          round
          :icon="i.icon"
          :text-color="i.text_color"
          class="bg-primary"
          @mouseover="onHoverEvent(i)"
          @mouseout="hoverContent = false"
        />
        <span class="text-h6 text-weight-bold text-white q-mt-sm text-center">{{ i.label }}</span>
      </div>
    </section>

    <!-- on hover content -->
  <section class="full-width bg-secondary row q-pa-md" v-if="hoverContent">
    <div class="col-12 col-md-6 text-white q-pa-lg flex flex-center flex-column">
      <div class="text-h3 text-center">{{ content?.content.title }}</div>
      <br />
      <div class="text-h5 text-center q-mt-md">
        {{ content?.content.textExplanation }}
      </div>
    </div>
    <div class="col-12 col-md-6 q-pa-lg flex flex-center">
      <q-img :src="content?.content.img" class="rounded-borders shadow-2xl" />
    </div>
  </section>

    <main class="q-mb-md q-pa-md" style="margin-top: 100px;">
      <div class="text-h3 text-white q-mt-lg q-mb-xl q-pa-md text-center">Portfólio</div>
      <section class="full-width row justify-around items-center flex-wrap q-gutter-lg">
        <CardComponent
          v-for="(i, index) in card_teste"
          :key="index"
          :title="i.title"
          :subtitle="i.subtitle"
          class="q-mt-md cursor-pointer shadow-2xl hover-scale"
          @click="goTo(i.id)"
        />
      </section>

      <!-- Projetos 3D -->
      <section class="q-mt-xl q-mb-xl" style="margin-top: 100px;">
        <div class="row justify-center q-mb-lg">
          <div class="text-h4 text-weight-bold text-white bg-secondary rounded-borders q-pa-sm">
            Projetos 3D
          </div>
        </div>
        <div class="row q-gutter-md justify-around">
          <CardComponent v-for="n in 4" :key="n" class="col-12 col-md-5 col-lg-3 shadow-2xl" />
        </div>

        <div class="row justify-center q-mt-xl q-mb-lg" style="margin-top: 100px;">
          <div class="text-h4 text-weight-bold text-white bg-secondary rounded-borders q-pa-sm">
            Construções e reformas
          </div>
        </div>
        <div class="row q-gutter-md justify-around">
          <CardComponent v-for="n in 4" :key="n" class="col-12 col-md-5 col-lg-3 shadow-2xl" />
        </div>
      </section>
    </main>
  </q-page>
</template>

<script setup lang="ts">
import CardComponent from 'src/components/Basic/CardComponent.vue'
import { card_teste } from './IndexConfigs/CardConfig'
import { ServicesConfig } from './IndexConfigs/ServicesConfig'
import type { IIcons } from 'src/interfaces/IIcons'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const hoverContent = ref<boolean>(false)

const content = ref<IIcons | null>(null)

const onHoverEvent = (data: IIcons) => {
  hoverContent.value = true
  content.value = data
}

const goTo = (id: string | number) => {
  return router.push({ path: `services/${id}`, replace: true })
}
</script>
