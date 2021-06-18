<template>
  <div class="db">

    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer.status" app>
      <navigation-menu @showCopied="showSnackbar('Copied Email to Clipboard')" />
    </v-navigation-drawer>

    <!-- App Header -->
    <app-header :title="title" @toggleNav="drawer.status = !drawer.status;" />

    <!-- Main Webpage Content -->
    <v-main>
      <v-card tile elevation="0" color="#F3F5F9" height="100%" width="100%">
          <dashboard />
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
import Dashboard from '@/components/Dashboard.vue';

export default {
  components: {
    AppHeader,
    Dashboard,
    NavigationMenu,
  },
  data() {
    return {
      title: 'Dashboard',
      drawer: {
        status: true
      },
      snackbar: {
        status: false,
        message: ""
      }
    }
  },
  mounted: function() {
    
  },
  created: function() {

  },
  methods: {
    showSnackbar(message) {
      this.snackbar.message = message;
      this.snackbar.status = true;;
    }
  }
}
</script>

<style lang="scss" scoped>

.db {
  &-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    padding: 50px;

    v-card {
      background-color: #ffffff;
      border-radius: 10px;
      border: 1px solid #dddddd;
    }
  }
}

</style>