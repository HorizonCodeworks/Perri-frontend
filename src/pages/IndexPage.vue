<style scoped>

h1 {
  text-align: center;
  margin-top: 9rem;
  margin-bottom: 2rem;
  font-size: 8vw; /* Tamanho da fonte baseado na largura da tela */
  font-family: ville, sans-serif;
  color: White;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  transition:
    color 0.3s ease,
    transform 0.3s ease;
}

h1:hover {
  color: #386cab;
  transform: scale(1.05);
}

h2 {
  text-align: center;
  margin-top: 2rem;
  font-size: 4vw; /* Tamanho da fonte baseado na largura da tela */
  font-family: ville, sans-serif;
  color: white;
}

/* Ajustes para telas menores */
@media (max-width: 768px) {
  h1 {
    font-size: 11vw; /* Ajusta o tamanho da fonte em telas pequenas */
  }
}

/* Ajustes para telas ainda menores (como celulares) */
@media (max-width: 480px) {
  h1 {
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


.background-div-1 {
  display: flex; /* Ativa o Flexbox */
  flex-direction: column; /* Organiza o conteúdo verticalmente */
  align-items: center; /* Centraliza horizontalmente */
  width: 100%; /* Largura total */
  height: 95vh; /* Altura total da tela */
  background-image: url('/public/Img/div1.svg'); /* Caminho da imagem */
  background-size: cover; /* Ajusta a imagem para cobrir a área */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat; /* Impede que a imagem se repita */
  margin: 0; /* Remove margens externas */
}

.background-div-2 {
  display: flex; /* Ativa o Flexbox */
  flex-direction: column; /* Organiza o conteúdo verticalmente */
  align-items: center; /* Centraliza horizontalmente */
  width: 100%; /* Largura total */
  height: 95vh;
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
</style>

-------------------------------------------------------------------------------------------------------------------------------

<template>
  <q-page>
    <q-img src="/public/Img/div1.svg" class="row">
      <div class="text-h1 row text-white text-weight-bolder q-mt-xl">
        <div class="col-12 text-center">Bem-Vindo à</div>
        <div class="col-12 text-center">Perri Construções</div>

        <div class="botoes">
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
