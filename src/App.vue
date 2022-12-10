<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <v-footer padless>
      <v-col class="text-center text-caption grey--text" cols="12">
        © 2022 SunYoungOh. All right reserved.
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
<style>
@import './assets/style.css';
</style>
