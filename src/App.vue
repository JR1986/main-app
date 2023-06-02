<template>
  <NextLayout />
  <RouterView></RouterView>
</template>

<script setup>
import { RouterView } from 'vue-router';
import NextLayout from './components/NextLayout.vue'

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
