<template>
  <q-page class="text-white">
    <!-- Nova seção com imagem, título e botões -->
    <div class="hero-section">
      <q-img src="img/HeroSection.jpeg" class="full-width full-height">
        <div class="absolute-full bg-transparent flex flex-center text-white text-center q-pa-md">
          <div class="q-mx-auto">
            <!-- Título principal -->
            <div>
              <img src="img/nv-logo.2.png" class="q-pb-none" />
            </div>
            <div class="title">Perri Construções</div>
            <!-- Subtítulo -->
            <div class="subtitle">Construindo Sonhos</div>
            <!-- Botões -->
            <div class="row justify-center q-gutter-sm">
              <q-btn label="Serviços" to="/services" color="accent" rounded class="btn-size" />
              <q-btn
                label="Solicitar Orçamento"
                href="https://wa.me/5511954226136?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.%20Poderia%20me%20ajudar%20com%20mais%20detalhes?"
                color="accent"
                rounded
                class="btn-size"
              />
            </div>
          </div>
        </div>
      </q-img>
    </div>

    <!-- icon floating on left side of the page -->
    <q-page-sticky position="bottom-right" :offset="[18, 18]" style="z-index: 999">
      <q-btn fab icon="fa-brands fa-whatsapp" color="green" :href="wame" target="_blank" />
    </q-page-sticky>

    <div class="text-h2 text-white q-mt-lg q-pa-md text-weight-bolder">Nossos Serviços</div>
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
        <div class="text-h5 text-start q-mt-md">
          {{ content?.content.textExplanation }}
        </div>
      </div>
      <div class="col-12 col-md-6 q-pa-lg flex flex-center">
        <q-img :src="content?.content.img" class="rounded-borders shadow-2xl" />
      </div>
    </section>

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
      <div class="text-h2 text-center bg-dark">Serviços</div>
      <CarouselComponent />
    </div>

    <section>
      <div class="q-pa-lg row items-center">
        <!-- Logotipo -->
        <div class="col-xs-12 col-sm-4 col-md-6 flex flex-center">
          <q-img
            src="img/img-NossosServicos.svg"
            class="q-mx-md q-mb-md"
            style="max-width: 400px"
          />
        </div>

        <!-- Informações da empresa -->
        <div class="col-xs-12 col-sm-7 col-md-6 bg-secondary">
          <q-card class="q-pa-md bg-dark">
            <q-card-section class="text-center">
              <div class="text-h4 text-bold">SOBRE A EMPRESA</div>
            </q-card-section>

            <q-card-section class="text-center">
              <div class="text-h5 text-weight-medium">PERRI ENGENHARIA E CONSTRUÇÃO</div>
            </q-card-section>

            <q-card-section class="text-h5 text-center">
              Com experiência no mercado de engenharia e construção, a Perri Engenharia e Construção
              se destaca pela excelência em serviços técnicos especializados. Oferecemos soluções
              inovadoras e eficientes, atendendo às necessidades de nossos clientes com qualidade e
              profissionalismo.
            </q-card-section>

            <q-card-section class="text-h5 text-center">
              Desde o acompanhamento de obras até a consultoria técnica para a obtenção de chaves,
              garantimos o cumprimento das normas vigentes. Também damos suporte a administradores
              de condomínios, auxiliando na verificação de ARTs e na coordenação de projetos,
              construção e reformas.
            </q-card-section>

            <q-card-section class="text-center q-mt-md">
              <q-btn label="Saiba Mais" color="accent" rounded style="width: 250px" to="about" />
            </q-card-section>
          </q-card>
        </div>
      </div>

      <!-- Seção: Solicite um Orçamento -->
      <div class="orcamento row justify-center q-pa-md">
        <q-img :src="'/img/Group 3.svg'" class="rounded-borders" style="width: 100vw; height: 80vh">
          <div class="full-width absolute-center text-center q-pa-md bg-transparent">
            <div class="full-width text-h5 text-weight-bolder">
              Solicite um orçamento e descubra como podemos transformar suas ideias em realidade.
              Com dedicação, expertise e um compromisso inabalável com a excelência, garantimos
              soluções seguras, de alta qualidade e personalizadas para suas necessidades. Confie em
              quem entende do assunto e escolha construir com confiança.
            </div>
            <q-btn
              label="Solicitar Orçamento"
              to="/servicos"
              color="accent"
              class="q-mt-md"
              rounded
              href="https://wa.me/5511954226136?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.%20Poderia%20me%20ajudar%20com%20mais%20detalhes?"
            />
          </div>
        </q-img>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import CarouselComponent from 'src/components/CarouselComponent.vue'
import CardComponent from 'src/components/Basic/CardComponent.vue'
import { card_teste } from './IndexConfigs/CardConfig'
import { ServicesConfig } from './IndexConfigs/ServicesConfig'
import type { IIcons } from 'src/interfaces/IIcons'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const wame = import.meta.env.VITE_WAME

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

<style scoped>
.hero-section {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;
}

.title {
  font-size: clamp(1.8rem, 5vw, 4rem); /* Ajusta entre 1.8rem (pequeno) e 4rem (grande) */
  font-weight: bold;
}

/* Subtítulo flexível */
.subtitle {
  font-size: clamp(1.2rem, 3vw, 2.5rem); /* Ajusta entre 1.2rem e 2.5rem */
  margin-bottom: 1rem;
}
</style>
