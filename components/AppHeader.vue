<template>
  <v-toolbar flat>
    <v-app-bar-nav-icon @click="toggleNav"></v-app-bar-nav-icon>

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
  </v-toolbar>
</template>

<script>
export default {
  props: [
    'title'
  ],
  data: () => {
    status: true
  },
  methods: {
    toggleNav(event) {
      this.$emit('navbar', !status)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>