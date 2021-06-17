<template>
    <v-card class="container"
        outlined
        elevation="0"
    >
        <h2>Github Stats</h2>
        <div class="content">
            <div>
                <p><strong>3</strong> Stars</p>
                <p><strong>22</strong> Repositories</p>
                <p><strong>213</strong> Commits in the last year</p>
                <p><strong>0</strong> Pull Requests</p>
            </div>
            <a href="https://github.com/ngeldvis" class="btn-link">
                <v-btn
                    elevation="2"
                    icon
                    x-large
                    color="white"
                    class="btn"
                >
                    <v-icon dark>
                        mdi-github
                    </v-icon>
                </v-btn>
            </a>
        </div>
    </v-card>
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
.container {
    padding: 25px;
    height: 100%;
}

.content {
    height: calc(100% - 40px);
    padding: 20px;
    display: flex;
    justify-content: space-between;

    .btn-link {
        margin-top: auto;

        .btn {
            background-color: #1976d2;
        }
    }
}
</style>