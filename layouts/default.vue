<template>
  <v-app>
    <nuxt />
  </v-app>
</template>

<script>


export default {
  components: {
    
  },
  data() {
    return {

    }
  },
  methods: {
    showCopiedSnackbar() {
      console.log('copied email')
      this.snackbar = true;
    }
  }
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