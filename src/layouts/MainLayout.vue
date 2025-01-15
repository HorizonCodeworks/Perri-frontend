<script setup lang="ts">
import { tabs } from './options/TabOptions'
</script>
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar size="70px">
            <img src="../assets/Logo.png" alt="" srcset="">
          </q-avatar>
        </q-toolbar-title>
        <q-tabs align="left" v-for="i in tabs" :key="i.name" class="rounded-md q-pa-sm" >
          <q-route-tab :label="i.label" />
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
