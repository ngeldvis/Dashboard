<template>
    <v-list-item>
        <v-list-item-content>
            <v-list-item-title>{{ info.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ info.course }} - {{ getDate(info.due) }}</v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
    export default {
        props: [
            'info'
        ],
        data() {
            return {
                monthNames: [
                    "January", 
                    "February", 
                    "March", 
                    "April",
                    "May", 
                    "June",
                    "July", 
                    "August", 
                    "September", 
                    "October", 
                    "November", 
                    "December"
                ]
            }
        },
        methods: {
            getDate(due) {
                let date = new Date(due);
                return `${this.monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>