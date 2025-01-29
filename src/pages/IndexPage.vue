<template>
  <q-page class="bg-dark text-white">
    <!-- Nova seção com imagem, título e botões -->
    <div class="hero-section">
      <!-- Overlay para adicionar o efeito escuro sobre a imagem -->
      <div class="full-width">
        <div class="hero-content q-my-xl q-pa-lg">
          <!-- Título principal -->
          <div class="text-h2 text-center">Perri Construções</div>
          <!-- Subtítulo -->
          <div class="text-body1 q-mb-md">Construindo Sonhos</div>
          <!-- Contêiner para os botões -->
          <div class="button-container" id="services">
            <!-- Botão "Serviços" com link para a página de serviços -->
            <q-btn label="Serviços" to="/servicos" color="accent" class="q-mr-sm" outline />
            <!-- Botão "Solicitar Orçamento" com link para a página de orçamento -->
            <q-btn label="Solicitar Orçamento" to="/orcamento" color="accent" outline />
          </div>
        </div>
      </div>
    </div>

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

    <main class="q-mb-md q-pa-md" style="margin-top: 100px">
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
      <section class="q-mt-xl q-mb-xl" style="margin-top: 100px">
        <div class="row justify-center q-mb-lg">
          <div class="text-h4 text-weight-bold text-white bg-secondary rounded-borders q-pa-sm">
            Projetos 3D
          </div>
        </div>
        <div class="row q-gutter-md justify-around">
          <CardComponent v-for="n in 4" :key="n" class="col-12 col-md-5 col-lg-3 shadow-2xl" />
        </div>

        <div class="row justify-center q-mt-xl q-mb-lg" style="margin-top: 100px">
          <div class="text-h4 text-weight-bold text-white bg-secondary rounded-borders q-pa-sm">
            Construções e reformas
          </div>
        </div>
        <div class="row q-gutter-md justify-around">
          <CardComponent v-for="n in 4" :key="n" class="col-12 col-md-5 col-lg-3 shadow-2xl" />
        </div>
      </section>
    </main>

    <section>
      <!-- Seção: Sobre a Empresa -->
      <div class="q-pa-lg flex flex-center">
        <div class="row" style="max-width: 1200px; align-items: center">
          <!-- Logotipo -->
          <div class="col-4 flex flex-center">
            <q-img
              src="public/img/Foto Nossos serviços.svg"
              style="max-width: 200px"
              class="q-mx-md"
            />
          </div>

          <!-- Informações da empresa -->
          <div class="col-8 text-left">
            <h3
              class="text-center text-bold q-mb-lg"
              style="background-color: #282727; border-radius: 10px"
            >
              SOBRE A EMPRESA
            </h3>
            <h5 class="text-center text-bold q-mt-md q-mb-lg">PERRI ENGENHARIA E CONSTRUÇÃO</h5>
            <p class="text-bold q-mb-md">
              Com experiência no mercado de engenharia e construção, a Perri Engenharia e Construção
              se destaca pela excelência em serviços técnicos especializados. Oferecemos soluções
              inovadoras e eficientes, atendendo às necessidades de nossos clientes com qualidade e
              profissionalismo.
            </p>
            <p class="text- q-mb-md">
              Desde o acompanhamento de obras até a consultoria técnica para a obtenção de chaves,
              garantimos o cumprimento das normas vigentes. Também damos suporte a administradores
              de condomínios, auxiliando na verificação de ARTs e na coordenação de projetos,
              construção e reformas. Agradecemos por considerar a Perri Engenharia e Construção como
              seu parceiro de confiança.
            </p>
          </div>
        </div>
      </div>

      <!-- Seção: Solicite um Orçamento -->
      <div class="orcamento row justify-center q-pa-md">
        <q-img :src="'/img/Group 3.svg'" class="rounded-borders" style="width: 100vw; height: 80vh">
          <div class="absolute-center text-center q-pa-md bg-transparent">
            <div class="text-subtitle2 text-weight-bolder">
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
              outline
            />
          </div>
        </q-img>
      </div>
    </section>
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

<style scoped>
.bg-dark {
  background-color: #121212;
}

.text-bold {
  font-weight: bold;
}

/* Estilo da nova seção (imagem com título e botões) */
.hero-section {
  /* Substitua pelo caminho correto da sua imagem */
  background: url('public/img/HeroSection.svg') center center / cover no-repeat;
  height: 80vh;
  /* Altura da seção */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;
  /* Cor do texto */
  font-family: 'Lalezar', sans-serif;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  /* Fundo semitransparente sobre a imagem */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.bg-grey-9 {
  position: relative;
  overflow: hidden;
}

.text-white {
  color: #fff;
}

.text-caption {
  font-size: 12px;
  color: #bbb;
}

h6 {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: underline;
}

.hero-content {
  text-align: center;
  /* Centraliza o texto */
  z-index: 1;
  /* Garante que o conteúdo esteja acima da overlay */
}

.hero-content h1 {
  font-size: 3rem;
  /* Tamanho do título principal */
  margin-bottom: 10px;
  font-family: 'Lalezar', sans-serif;
}

.hero-content p {
  font-size: 2rem;
  /* Tamanho do subtítulo */
  margin-bottom: 20px;
  font-family: 'Lalezar', sans-serif;
}

.button-container {
  display: flex;
  gap: 15px;
  /* Espaçamento entre os botões */
  justify-content: center;
  /* Centraliza os botões */
}

/* Estilo da seção de serviços */
.services-section {
  padding: 2rem;
  /* Espaçamento interno da seção */
  font-family: 'Lalezar', sans-serif;
}

.text-center {
  text-align: center;
  /* Centraliza o texto */
}

/* Estilo adicional para os botões (se necessário) */
.q-btn {
  border-radius: 50px;
  /* Cantos arredondados */
  font-family: 'Lalezar', sans-serif;
}
</style>
