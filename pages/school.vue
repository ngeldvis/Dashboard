<template>
  <div class="db">

    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer.status" app>
      <navigation-menu @showCopied="showSnackbar('Copied Email to Clipboard')" />
    </v-navigation-drawer>

    <v-main>
      <v-card tile elevation="0" color="#F3F5F9" height="100%" width="100%">
        <!-- App Header -->
        <app-header :title="title" @toggleNav="drawer.status = !drawer.status;" />

        <!-- Main Webpage Content -->
        
      </v-card>
    </v-main>

    <!-- Message Snackbar -->
    <v-snackbar v-model="snackbar.status" :timeout="2000">
      {{ snackbar.message }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="primary"
          text
          v-bind="attrs"
          @click="snackbar.status = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

  </div>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu.vue';
import AppHeader from '@/components/AppHeader.vue';

export default {
  components: {
    AppHeader,
    NavigationMenu
  },
  data() {
    return {
      title: 'School',
      drawer: {
        status: true
      },
      snackbar: {
        status: false,
        message: ""
      }
    }
  },
  methods: {
    showSnackbar(message) {
      this.snackbar.message = message;
      this.snackbar.status = true;;
    }
  }
};
</script>

<style>
</style>