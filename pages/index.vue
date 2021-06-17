<template>
  <div class="db">
    <navigation-menu :status="navbar" />
    <v-main>
      <v-card tile elevation="0" color="#F3F5F9" height="100%" width="100%">
        <app-header :title="title"/>
        <div class="db-grid">          
          <github-stats />
          <upcoming-assignments />
          <money-graph />
        </div>
      </v-card>
    </v-main>
  </div>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu.vue';
import DashboardCard from '@/components/Dashboard/Card.vue';

import GithubStats from '@/components/GithubStats.vue';
import UpcomingAssignments from '@/components/UpcomingAssignments.vue';
import MoneyGraph from '~/components/MoneyGraph.vue';

export default {
  components: {
    MoneyGraph,
    UpcomingAssignments,
    GithubStats,
    DashboardCard ,
    NavigationMenu
  },
  data() {
    return {
      title: "Dashboard",
      navbar: true
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