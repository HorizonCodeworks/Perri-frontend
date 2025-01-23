<template>
  <q-page class="bg-dark text-white">
    <!-- Nova seção com imagem, título e botões -->
    <div class="hero-section">
      <!-- Overlay para adicionar o efeito escuro sobre a imagem -->
      <div class="full-width ">
        <div class="hero-content q-my-xl q-pa-lg">
          <!-- Título principal -->
          <div class="text-h2 text-center">Perri Construções</div>
          <!-- Subtítulo -->
          <div class="text-body1 q-mb-md">Construindo Sonhos</div>
          <!-- Contêiner para os botões -->
          <div class="button-container" id="services">
            <!-- Botão "Serviços" com link para a página de serviços -->
            <q-btn
              label="Serviços"
              to="/servicos"
              color="accent"
              class="q-mr-sm"
              outline
            />
            <!-- Botão "Solicitar Orçamento" com link para a página de orçamento -->
            <q-btn
              label="Solicitar Orçamento"
              to="/orcamento"
              color="accent"
              outline
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Seção de serviços existente -->
    <div class="services-section q-pa-xl">
      <!-- Título da seção -->
      <h3 class="text-center">Serviços</h3>
      <div class="row justify-around q-mt-md">
        <!-- Loop para renderizar os serviços dinamicamente -->
        <ServiceItem
          v-for="(service, index) in services"
          :key="service.title"
          :icon="service.icon"
          :title="service.title"
          :description="service.description"
          :image="service.image"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import ServiceItem from 'components/ServiceItem.vue'; // Importa o componente ServiceItem

export default {
  components: {
    ServiceItem, // Declara o componente para uso
  },
  data() {
    return {
      // Lista de serviços para exibição dinâmica
      services: [
        {
          //projeto-3D
          icon: 'public/icons/Project-icon.png', // Ícone do serviço (opcional)
          title: 'Projetos 3D', // Título do serviço
          description:
            'Damos vida às suas ideias com projetos 3D de alta precisão, riqueza de detalhes e um nível de personalização que atende às suas necessidades específicas. Utilizamos as melhores ferramentas de modelagem e visualização para criar representações realistas e funcionais, garantindo um planejamento eficiente que permite ajustes em tempo real e promove total transparência em cada etapa. Nossa expertise está focada em transformar sua visão em realidade, com qualidade excepcional, segurança garantida e um processo livre de surpresas, fornecendo a confiança necessária para o sucesso do seu projeto.', // Descrição do serviço
          image: 'img/img-projeto-3D.svg', // Caminho para a imagem do serviço
        },
        {
          //Serviços Técnicos
          icon: 'icons/engineer-icon1.png',
          title: 'Serviços Técnicos',
          description:
            'Cuidamos de toda a regularização do seu empreendimento, oferecendo um serviço completo que inclui a emissão de ARTs, realização de vistorias previstas e gerenciamento de todos os processos burocráticos necessários. Nosso objetivo é garantir eficiência, conformidade e sua tranquilidade em cada etapa do projeto.',
          image: 'path/to/servicos_tecnicos.jpg',
        },
        {
          //Entrega de Chaves
          icon: 'public/icons/Key-icon.png',
          title: 'Entrega de Chaves',
          description:
            'Realizamos uma avaliação completa e minuciosa para a entrega de obras, garantindo que cada detalhe do projeto seja finalizado com excelência e dentro dos mais altos padrões de qualidade. Nosso compromisso é garantir sua total satisfação em todas as etapas do processo, oferecendo segurança, transparência e resultados',
          image: 'path/to/entrega_chaves.jpg',
        },
        {
          //Construção & Reformas
          icon: 'public/icons/house.png',
          title: 'Construção & Reformas',
          description:
            'Oferecemos serviços realizados com total responsabilidade, precisão e um atendimento que prioriza suas necessidades e expectativas. Nosso objetivo é transformar sua casa ou apartamento em um espaço que reflita seu estilo e personalidade, combinando modernidade, conforto e funcionalidade. Com atenção a cada detalhe, garantimos soluções personalizadas e de alta qualidade, sempre trabalhando com compromisso e dedicação para entregar resultados que superem suas expectativas e proporcionem uma experiência',
          image: 'path/to/construcao_reformas.jpg',
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Importação da fonte Lalezar ou uma similar */
@import url('https://fonts.googleapis.com/css2?family=Lalezar&display=swap');

/* Estilo da nova seção (imagem com título e botões) */
.hero-section {
  /* Substitua pelo caminho correto da sua imagem */
  background: url('public/img/HeroSection.svg') center center / cover no-repeat;
  height: 80vh; /* Altura da seção */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white; /* Cor do texto */
  font-family: 'Lalezar', sans-serif;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5); /* Fundo semitransparente sobre a imagem */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-content {
  text-align: center; /* Centraliza o texto */
  z-index: 1; /* Garante que o conteúdo esteja acima da overlay */
}

.hero-content h1 {
  font-size: 3rem; /* Tamanho do título principal */
  margin-bottom: 10px;
  font-family: 'Lalezar', sans-serif;
}

.hero-content p {
  font-size: 2rem; /* Tamanho do subtítulo */
  margin-bottom: 20px;
  font-family: 'Lalezar', sans-serif;
}

.button-container {
  display: flex;
  gap: 15px; /* Espaçamento entre os botões */
  justify-content: center; /* Centraliza os botões */
}

/* Estilo da seção de serviços */
.services-section {
  padding: 2rem; /* Espaçamento interno da seção */
  font-family: 'Lalezar', sans-serif;
}

.text-center {
  text-align: center; /* Centraliza o texto */
}

/* Estilo adicional para os botões (se necessário) */
.q-btn {
  border-radius: 50px; /* Cantos arredondados */
  font-family: 'Lalezar', sans-serif;
}
</style>
