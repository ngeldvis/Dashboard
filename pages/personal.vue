<template>
  <app-header :title="title"/>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue';

export default {
  components: {
    AppHeader
  },
  data() {
    return {
      title: "Personal",
    };
  },
};
</script>

<style>
</style>