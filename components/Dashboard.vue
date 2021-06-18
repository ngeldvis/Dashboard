<template>
    <div class="db-grid">
        <dashboard-card>
            <github-stats />
        </dashboard-card>
        <dashboard-card>
            <upcoming-assignments />
        </dashboard-card>
        <dashboard-card>
            <money-graph />
        </dashboard-card>
        <dashboard-card>

        </dashboard-card>
    </div>
</template>

<script>
import MoneyGraph from '~/components/MoneyGraph.vue';
import GithubStats from '@/components/GithubStats.vue';
import UpcomingAssignments from '@/components/UpcomingAssignments.vue';
import DashboardCard from './DashboardCard.vue';

export default {
  components: {
    DashboardCard,
    MoneyGraph,
    GithubStats,
    UpcomingAssignments,
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