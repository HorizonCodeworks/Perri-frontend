<script setup lang="ts">
import { tabs } from './options/TabOptions'
import { ref } from 'vue'
const openDrawer = ref<boolean>(false)
const wame = import.meta.env.VITE_WAME
</script>
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="q-pa-xs">
      <q-toolbar class="full-width row wrap justify-center items-center content-center gt-sm">
        <q-toolbar-title>
          <q-avatar size="50px">
            <img src="img/nv-logo.2.png" alt="" srcset=""
            />
          </q-avatar>
        </q-toolbar-title>
        <q-tabs align="left" class="rounded-md q-pa-sm">
          <q-route-tab v-for="i in tabs" :key="i.name" :label="i.label" :to="i.path" />
        </q-tabs>
        <q-space />
        <div class="row items-center justify-center">
          <q-btn
            fab
            icon="fa-brands fa-whatsapp"
            class="q-mr-md cursor-pointer"
            size="15px"
            :href="wame"
            target="_blank"
          />
          <q-btn fab icon="fa-brands fa-instagram" class="q-mr-md cursor-pointer" size="15px" href="https://www.instagram.com/perri_engenharia?igsh=MWpkaTl1Z2sxaThsaQ=="/>
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

    <footer class="bg-dark text-white q-mt-xl q-pa-md" style="z-index: 999">
      <div class="row justify-between items-start q-col-gutter-md">
        <!-- Logo e Direitos Autorais -->
        <div class="col-xs-12 col-sm-3 flex column items-start">
          <q-img src="/logo.png" alt="Logo" width="50px" class="q-mb-sm" />
          <p class="text-caption">
            &copy; <strong>{{ new Date().getFullYear() }}</strong> Perri Engenharia. Todos os
            direitos reservados.
          </p>
        </div>

        <!-- Links Úteis -->
        <div class="col-xs-6 col-sm-3">
          <q-list dense>
            <q-item-label header>Links Úteis</q-item-label>
            <q-item clickable tag="a" href="/">
              <q-item-section>Início</q-item-section>
            </q-item>
            <q-item clickable tag="a" href="/servicos">
              <q-item-section>Serviços</q-item-section>
            </q-item>
            <q-item clickable tag="a" href="/sobre">
              <q-item-section>Sobre Nós</q-item-section>
            </q-item>
            <q-item clickable tag="a" href="/contato">
              <q-item-section>Contato</q-item-section>
            </q-item>
          </q-list>
        </div>

        <!-- Informações -->
        <div class="col-xs-6 col-sm-3">
          <q-list dense>
            <q-item-label header>Informações</q-item-label>
            <q-item clickable tag="a" href="/localizacao">
              <q-item-section>Localização</q-item-section>
            </q-item>
            <q-item clickable tag="a" href="/atendimento">
              <q-item-section>Horários de Atendimento</q-item-section>
            </q-item>
            <q-item clickable tag="a" href="/faq">
              <q-item-section>FAQ</q-item-section>
            </q-item>
            <q-item clickable tag="a" href="/privacidade">
              <q-item-section>Política de Privacidade</q-item-section>
            </q-item>
          </q-list>
        </div>

        <!-- Redes Sociais -->
        <div class="col-xs-12 col-sm-3">
          <q-list dense>
            <q-item-label header>Siga-nos</q-item-label>
            <div class="row q-gutter-sm">
              <q-btn flat round dense icon="mdi-facebook" href="https://www.facebook.com/perri.engenharia" class="text-white" />
              <q-btn flat round dense icon="mdi-instagram" href="https://www.instagram.com/perri_engenharia?igsh=MWpkaTl1Z2sxaThsaQ==" class="text-white" />
              <q-btn flat round dense icon="mdi-youtube" href="https://youtube.com/@perriconstrucao?si=J4JTevWa3rMeVccX" class="text-white" />
            </div>
          </q-list>
        </div>
      </div>
    </footer>
  </q-layout>
</template>
