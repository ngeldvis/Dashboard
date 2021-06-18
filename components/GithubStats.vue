<template>
    <div>
        <h2>Github Stats</h2>
        <v-list>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>3</v-list-item-title>
                    <v-list-item-subtitle>Stars</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>22</v-list-item-title>
                    <v-list-item-subtitle>Repositories</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>213</v-list-item-title>
                    <v-list-item-subtitle>Commits in the past year</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>0</v-list-item-title>
                    <v-list-item-subtitle>Pull Requests</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <a href="https://github.com/ngeldvis" class="btn-link">
            <v-btn
                elevation="2"
                icon
                x-large
                color="white"
                class="btn"
            >
                <v-icon class="icon" color="white">
                    mdi-github
                </v-icon>
            </v-btn>
        </a>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

a {
    text-decoration: none;
}
h2 {
    font-weight: normal;
}
.btn-link {
    margin-top: auto;
    position: absolute;
    bottom: 25px;
    right: 25px;

    .btn {
        background-color: #1976d2;
    }
}
</style>