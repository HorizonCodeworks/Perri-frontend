<template>
  <q-page>
    <q-page-sticky position="bottom-left" :offset="[18, 18]" style="z-index: 999">
      <q-btn fab icon="call" color="green" />
    </q-page-sticky>
    <div class="text-h3 text-white q-mt-lg q-pa-md">Serviços</div>
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
    <section class="full-width bg-secondary row" v-if="hoverContent">
      <div class="col-6 q-pa-md text-white">
        <div class="text-h3 text-center">{{ content?.content.title }}</div>
        <br />
        <div class="text-h5 q-pa-md">
          {{ content?.content.textExplanation }}
        </div>
      </div>
      <div class="col-6 q-pa-lg text-center items-center">
        <q-img :src="content?.content.img" class="rounded-borders" />
      </div>
    </section>

    <main class="q-mt-xl q-mb-md">
      <div class="text-h3 text-white q-mt-lg q-mb-xl q-pa-md text-center">Portfólio</div>
      <section class="full-width row justify-around items-center flex-wrap q-md-lg">
        <CardComponent
          v-for="(i, index) in card_teste"
          :key="index"
          :title="i.title"
          :subtitle="i.subtitle"
          class="q-mt-md"
        />
      </section>

      <!-- projetos 3D -->
      <section class="row q-mt-xl q-mb-xl">
        <div class="col-3">
          <div
            class="text-center text-h4 text-weight-bold text-white bg-secondary rounded-borders q-pa-sm"
          >
            Projetos 3D
          </div>
        </div>
        <div class="col-12 q-pa-md q-mb-xl row q-gutter-md">
        </div>

        <div class="col-3">
          <div
            class="text-center text-h4 text-weight-bold text-white bg-secondary rounded-borders q-pa-sm"
          >
            Construções e reformas
          </div>
        </div>
        <div class="col-12 q-pa-md row q-gutter-md">
          <CardComponent />
          <CardComponent />
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
import { ref } from 'vue'

const hoverContent = ref<boolean>(false)
const content = ref<IIcons | null>(null)
const onHoverEvent = (data: IIcons) => {
  hoverContent.value = true
  content.value = data
}
</script>
