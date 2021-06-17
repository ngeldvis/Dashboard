<template>
    <v-card class="container"
        outlined
        elevation="0"
    >
        <h2>Upcoming Assignments</h2>
        <v-list dense>
            <assignment-item
                v-for="(assignment, i) in assignments" 
                :key="i"
                :info="assignment"
            />
        </v-list>
    </v-card>
</template>

<script>
import AssignmentItem from '@/components/AssignmentItem.vue'

export default {
    components: {
        AssignmentItem
    },
    data() {
        return {
            assignments: [
                {
                    name: 'Website Design and HTML Peer Review Submission',
                    due: '2021-06-25 EST',
                    course: 'CIS 1050'
                },
                {
                    name: 'Website Design and HTML Peer Review',
                    due: '2021-07-04 EST',
                    course: 'CIS 1050'
                },
                {
                    name: 'Website Design and HTML',
                    due: '2021-07-11 EST',
                    course: 'CIS 1050'
                },
                {
                    name: 'Build a Website: HTML and CSS',
                    due: '2021-08-06 EST',
                    course: 'CIS 1050'
                },
                {
                    name: 'Final Exam',
                    due: '2021-08-18 EST',
                    course: 'CIS 1050'
                }
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
</style>