<template>
  <v-app>
    <nuxt />
    <!-- <navigation-menu />
    <v-main>
      <v-card tile elevation="0" color="#F3F5F9" height="100%" width="100%">
        <nuxt />
      </v-card>
    </v-main> -->
  </v-app>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu.vue';

export default {
  components: {
    NavigationMenu
  },
};
</script>

<style lang="scss" scoped>
body {

  a {
    text-decoration: none;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
}
</style>