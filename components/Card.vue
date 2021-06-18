<template>
    <v-card class="dashboard-card"
        outlined
        elevation="0"
    >
        <h2>{{ title }}</h2>
        <!-- <github /> -->
    </v-card>
</template>

<script>
    export default {
        props: [
            'title'
        ]
    }
</script>

<style lang="scss" scoped>
.dashboard-card {
    padding: 25px;
}
h2 {
    font-weight: normal;
}

</style>