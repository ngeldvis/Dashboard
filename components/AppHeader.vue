<template>
  <v-app-bar app flat color="white" fixed elevate-on-scroll>
    <v-app-bar-nav-icon @click="toggleNavDrawer"></v-app-bar-nav-icon>

    <v-toolbar-title>{{ title }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  props: [
    'title'
  ],
  data() {
    return {
    }
  },
  methods: {
    toggleNavDrawer() {
      this.$emit('toggleNav');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>