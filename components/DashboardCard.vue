<template>
    <v-card class="container"
        outlined
        elevation="0"
    >
        <slot></slot>
    </v-card>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.container {
    position: relative;
    padding: 25px;
}
</style>