<template>
  <q-footer class="bg-dark text-white">
    <div class="q-pa-md">
      <div class="row justify-between">
        <!-- Logo e Direitos Autorais -->
        <div class="col-3">
          <div>
            <img src="/logo.png" alt="Logo" style="width: 50px;" />
          </div>
          <p class="text-caption">
            &copy; 2025 MeuSite. Todos os direitos reservados.
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
            <li><a href="#" class="text-white">LinkedIn</a></li>
            <li><a href="#" class="text-white">YouTube</a></li>
          </ul>
        </div>
      </div>
    </div>
  </q-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.bg-dark {
  background-color: #333;
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
