<style scoped>
.text-h1 {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  text-align: center;
  margin-top: 9rem;
  background: transparent;
}

.text-h2 {
  background: transparent;
  text-align: center;
  margin-top: 2rem;
  font-size: 4vw; /* Tamanho da fonte baseado na largura da tela */
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  color: white;
}

/* Ajustes para telas menores */
@media (max-width: 768px) {
  .text-h1 {
    font-size: 11vw; /* Ajusta o tamanho da fonte em telas pequenas */
  }
}

/* Ajustes para telas ainda menores (como celulares) */
@media (max-width: 480px) {
  .text-h1 {
    font-size: 20vw; /* Ajusta o tamanho da fonte para dispositivos pequenos */
  }
}

.botoes {
  display: flex;
  justify-content: center; /* Centraliza os elementos horizontalmente */
  align-items: center; /* Centraliza os elementos verticalmente */
  width: 100%; /* Certifica que o contêiner ocupa toda a largura */
  gap: 20px; /* Espaçamento entre os botões */
  margin-top: 2rem; /* Margem superior para afastar do texto */
  position: relative; /* Garante que o contêiner não herda estilos indesejados */
}

.background-div-2 {
  display: flex; /* Ativa o Flexbox */
  flex-direction: column; /* Organiza o conteúdo verticalmente */
  align-items: center; /* Centraliza horizontalmente */
  width: 100%; /* Largura total */
  height: 85vh;
  background-image: url('/public/Img/Project-div2.svg'); /* Caminho da imagem */
  background-size: cover; /* Ajusta a imagem para cobrir a área */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat; /* Impede que a imagem se repita */
  margin: 0; /* Remove margens externas */
}

.services-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo transparente */
  color: white;
}

.background-div-3 {
  background-color: #f7f7f7; /* Cor de fundo */
  border-radius: 8px; /* Bordas arredondadas */
  padding: 20px; /* Espaçamento interno */
}

h2 {
  font-size: 3.5rem; /* Tamanho do título */
}

.img-responsive {
  max-width: 100%;
  border-radius: 50%; /* Faz a imagem circular */
}

.text-body1 {
  line-height: 1.6; /* Melhora a legibilidade do texto */
}

</style>

-------------------------------------------------------------------------------------------------------------------------------

<template>
  <q-page>
    <q-img src="/public/Img/Projeto Redimensionar imagem.png" class="row">
      <div class="text-h1 row text-white">
        <div class="col-12 text-center">Bem-Vindo à</div>
        <div class="col-12 text-center">Perri Construções</div>

        <div class="botoes text-body1 q-mt-md">
          <InputComponent title="Serviços" color="primary" />
          <InputComponent title="Entre em contato" color="primary" />
        </div>
      </div>
    </q-img>

    <div class="background-div-2">
      <div class="text-h2 row text-white q-my-md">Nossos Serviços</div>
      <div class="services-container q-my-md">
        <ServiceItem
          v-for="(service, index) in services"
          :key="index"
          :icon="service.icon"
          :altText="service.altText"
          :title="service.title"
          :description="service.description"
        />
      </div>

      <div class="botoes q-mt-md">
        <InputComponent title="Solicitar Orçamento" color="primary" />
      </div>
    </div>

    <div class="background-div-3 row items-center justify-center q-col-gutter-lg q-py-xl">
      <!-- Texto -->
      <div class="col-12 col-md-6 text-center text-md-left">
        <h2 class="text-primary text-weight-bold q-mb-md">
          Por que Escolher a <br /> Perri Construções
        </h2>
        <p class="text-body1 text-black">
          Na Perri, entregamos excelência em construção, reformas e serviços técnicos de engenharia.
          Com anos de experiência no mercado, garantimos soluções personalizadas, qualidade superior
          e cumprimento rigoroso de prazos. Seja qual for o seu projeto, estamos prontos para
          transformá-lo em realidade com eficiência e dedicação. Confie na Perri para construir o
          seu futuro!
        </p>
      </div>

      <!-- Imagem -->
      <div class="col-12 col-md-5 text-center">
        <img src="public/img/img-pq.svg" alt="Imagem Perri Construções" class="img-responsive rounded-borders shadow-2">
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import InputComponent from 'src/components/InputComponent.vue'
import ServiceItem from 'src/components/ServiceItem.vue'

const services = [
  {
    icon: 'public/icons/Project-icon.png',
    altText: 'Ícone Projetos 3D',
    title: 'Projetos 3D ',
    description:
      'Oferecemos projetos 3D de obras que trazem suas ideias à vida com precisão e detalhamento. Usando as melhores ferramentas de modelagem e visualização, garantimos um planejamento claro e ajustes em tempo real. Confie em nossa experiência para transformar sua visão em um projeto sólido e sem surpresas.',
  },
  {
    icon: 'public/icons/engineer-icon.png',
    altText: 'Ícone Documentação',
    title: 'Serviços Técnicos',
    description:
      'Emitimos ARTs, realizamos vistorias e cuidamos de toda a parte burocrática para regularizar seu empreendimento.',
  },
  {
    icon: 'public/icons/Key-icon.png',
    altText: 'Ícone Avaliação de Entrega',
    title: 'Entrega de Chaves',
    description:
      'Realizamos a avaliação completa para entrega de obras, assegurando que todos os detalhes do projeto estejam finalizados com excelência. Nosso compromisso garante sua satisfação a cada etapa do processo.',
  },
  {
    icon: 'public/icons/House-icon.png',
    altText: 'Ícone Reforma Residencial',
    title: 'Construção & Reformas',
    description:
      'Serviço com responsabilidade, precisão e atendimento excepcional. Transformamos sua casa ou apartamento em um espaço moderno, confortável e personalizado, superando expectativas com qualidade e compromisso.',
  },
]
</script>
