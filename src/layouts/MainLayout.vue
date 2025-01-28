<script setup lang="ts">
import { tabs } from './options/TabOptions'
import { ref } from 'vue'
const openDrawer = ref<boolean>(false)
</script>
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="q-pa-xs">
      <q-toolbar class="full-width row wrap justify-center items-center content-center gt-sm">
        <q-toolbar-title>
          <q-avatar size="70px">
            <img src="../assets/Logo.png" alt="" srcset="" />
          </q-avatar>
        </q-toolbar-title>
        <q-tabs align="left" class="rounded-md q-pa-sm">
          <q-route-tab v-for="i in tabs" :key="i.name" :label="i.label" :to="i.path" />
        </q-tabs>
        <q-space />
        <div class="row items-center justify-center">
          <q-icon name="fa-brands fa-whatsapp" class="q-mr-md cursor-pointer" size="25px" />
          <q-icon name="fa-brands fa-instagram" class="q-mr-md cursor-pointer" size="25px" />
        </div>
      </q-toolbar>

      <!-- menu mobile -->
      <q-icon name="menu" size="30px" @click="openDrawer = !openDrawer" class="lt-md" />
    </q-header>
    <q-drawer v-model="openDrawer" class="lt-md bg-dark">
      <q-scroll-area class="fit">
        <q-tabs vertical class="text-white q-mt-xl">
          <q-route-tab v-for="i in tabs" :key="i.name" :label="i.label" :to="i.path" />
        </q-tabs>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>

    <footer class="bg-dark text-white">
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
    </footer>
  </q-layout>
</template>
