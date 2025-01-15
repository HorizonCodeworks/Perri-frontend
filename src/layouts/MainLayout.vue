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
          <q-icon name="call" class="q-mr-md" size="20px" />
          <div class="text-body text-weight-bolder">(11) 95954-7384</div>
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
  </q-layout>
</template>
