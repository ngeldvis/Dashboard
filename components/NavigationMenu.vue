<template>
    <div>

        <div class="nav-header">
            <img class="nav-header-pfp" src="~/assets/images/pfp.jpeg" alt="" />
            <p class="nav-header-name">Nigel Davis</p>
            <p 
                id="nav-email" 
                class="nav-header-email" 
                @click="copyEmail('#nav-email')"
                title="Copy Email"
            >ngeldvis@gmail.com</p>
        </div>

        <v-list dense>
            <v-list-item-group>
            <v-list-item 
                color="primary"
                v-for="(item, i) in navItems" 
                :key="i"
                nuxt 
                :to="item.link"  
            >

                <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item-content>

            </v-list-item>
        </v-list-item-group>
      </v-list>

    </div>
</template>

<script>
    export default {
        props: [
            'status'
        ],
        data() {
            return {
                navItems: [
                    {
                        icon: "mdi-view-dashboard",
                        text: "Dashboard",
                        link: "/"
                    },
                    {
                        icon: "mdi-finance",
                        text: "Finance",
                        link: "/finance"
                    },
                    {
                        icon: "mdi-school",
                        text: "School",
                        link: "/school"
                    },
                    {
                        icon: "mdi-account",
                        text: "Personal",   
                        link: "/personal"
                    },
                ],
            };
        },
        methods: {
            copyEmail(id) {
                this.snackbar = true;
                this.$emit('showCopied')

                let $temp= $('<input>');
                $('body').append($temp);

                $temp.val($(id).text()).select();
                document.execCommand('copy');
                $temp.remove();
            }
        }
    }
</script>

<style lang="scss" scoped>

p {
    margin: 0;
    padding: 0;
}

.nav-header {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-pfp {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }

  &-name {
    padding-top: 20px;
    font-weight: 700;
  }

  &-email {
    font-size: 12px;
    cursor: pointer;
  }
}
</style>