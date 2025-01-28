<template>
  <q-page class="bg-dark text-white">
    <!-- Seção: Sobre a Empresa -->
    <div class="q-pa-lg flex flex-center">
      <div class="row" style="max-width: 1200px; align-items: center;">
        <!-- Logotipo -->
        <div class="col-4 flex flex-center">
          <q-img
            src="public/img/Foto Nossos serviços.svg"
            style="max-width: 200px;"
            class="q-mx-md"
          />
        </div>

        <!-- Informações da empresa -->
        <div class="col-8 text-left">
          <h3 class="text-center text-bold q-mb-lg" style="background-color: #282727; border-radius: 10px;">SOBRE A EMPRESA</h3>
          <h5 class="text-center text-bold q-mt-md q-mb-lg">PERRI ENGENHARIA E CONSTRUÇÃO</h5>
          <p class="text-bold q-mb-md">
            Com experiência no mercado de engenharia e construção, a Perri Engenharia e Construção se destaca pela excelência em serviços técnicos especializados. Oferecemos soluções inovadoras e eficientes, atendendo às necessidades de nossos clientes com qualidade e profissionalismo.
          </p>
          <p class="text- q-mb-md">
            Desde o acompanhamento de obras até a consultoria técnica para a obtenção de chaves, garantimos o cumprimento das normas vigentes. Também damos suporte a administradores de condomínios, auxiliando na verificação de ARTs e na coordenação de projetos, construção e reformas. Agradecemos por considerar a Perri Engenharia e Construção como seu parceiro de confiança.
          </p>
        </div>
      </div>
    </div>

    <!-- Seção: Solicite um Orçamento -->
    <div class="q-pa-lg flex flex-center bg-grey-9" style="position: relative; height: 400px;">
      <!-- Imagem de Fundo -->
      <q-img
        src="public/img/Group 3.svg"
        class="full-background-img"
      />
      <!-- Conteúdo sobre a imagem -->
      <div class="text-center" style="max-width: 800px; z-index: 2; position: relative;">
        <p class="q-mb-lg">
          Solicite um orçamento e descubra como podemos transformar suas ideias em realidade. Com dedicação, expertise e um compromisso inabalável com a excelência, garantimos soluções seguras, de alta qualidade e personalizadas para suas necessidades. Confie em quem entende do assunto e escolha construir com confiança.
        </p>
        <q-btn
          label="SOLICITAR ORÇAMENTO"
          color="primary"
          class="q-my-lg text-bold"
          style="padding: 10px 20px; font-size: 1.2em;"
        />
      </div>
    </div>

    <!-- Rodapé -->
    <q-footer class="bg-dark text-white">
      <div class="q-pa-md">
        <div class="row justify-between">
          <!-- Logo e Direitos Autorais -->
          <div class="col-3">
            <div>
              <img src="/logo.png" alt="Logo" style="width: 50px;" />
            </div>
            <p class="text-caption">
              &copy; 2025 Perri Engenharia. Todos os direitos reservados.
            </p>
          </div>

          <!-- Links Úteis -->
          <div class="col-3">
            <h6>Links Úteis</h6>
            <ul>
              <li><a href="/" class="text-white">Início</a></li>
              <li><a href="/servicos" class="text-white">Serviços</a></li>
              <li><a href="/sobre" class="text-white">Sobre Nós</a></li>
              <li><a href="/contato" class="text-white">Contato</a></li>
            </ul>
          </div>

          <!-- Informações -->
          <div class="col-3">
            <h6>Informações</h6>
            <ul>
              <li><a href="/localizacao" class="text-white">Localização</a></li>
              <li><a href="/atendimento" class="text-white">Horários de Atendimento</a></li>
              <li><a href="/faq" class="text-white">FAQ</a></li>
              <li><a href="/privacidade" class="text-white">Política de Privacidade</a></li>
            </ul>
          </div>

          <!-- Redes Sociais -->
          <div class="col-3">
            <h6>Siga-nos</h6>
            <ul class="social-links">
              <li><a href="#" class="text-white">Facebook</a></li>
              <li><a href="#" class="text-white">Instagram</a></li>
              <li><a href="#" class="text-white">YouTube</a></li>
            </ul>
          </div>
        </div>
      </div>
    </q-footer>
  </q-page>
</template>

<script>
export default {
  name: "SobreEmpresa",
};
</script>

<style scoped>
.bg-dark {
  background-color: #121212;
}

.text-bold {
  font-weight: bold;
}

.full-background-img {
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
</style>
