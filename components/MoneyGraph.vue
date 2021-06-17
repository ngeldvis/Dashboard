<template>
    <v-card class="container"
        outlined
        elevation="0"
    >
        <h2>Money</h2>
        <v-sheet color="#F3F5F9" rounded>
            <v-sparkline class="graph" 
                auto-draw
                line-width="1"
                padding="15"
                :value="values"
                show-labels
                label-size="5"
            />
        </v-sheet>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                values: [
                    10000, 800, 750, 2043, 5935, 5400, 1604, 3250, 3000, 2900, 4520, 9000
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
h2 {
    font-weight: normal;
}
.container {
    padding: 25px;
    height: 100%;
}
.graph {
    margin-top: 25px;
}
</style>