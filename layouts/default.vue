<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>

      <div class="nav-header">
        <img class="nav-header-pfp" src="~/assets/images/pfp.jpeg" alt="" />
        <p class="nav-header-name">Nigel Davis</p>
        <p id="nav-email" class="nav-header-email">ngeldvis@gmail.com</p>
      </div>

      <v-list dense>
        <v-list-item-group>
          <nuxt-link :to="item.link" v-for="(item, i) in navItems" :key="i">
            <v-list-item>

              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </nuxt-link>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>

    <v-main>

      <v-card tile elevation="0" color="#F3F5F9" height="100%" width="100%">
        <nuxt />
      </v-card>

    </v-main>
  </v-app>
</template>

<script>

export default {
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
      drawer: true,
    };
  },
  methods: {
    copyEmail(element) {
      console.log(element);
      let copyText = document.getElementById("nav-email");
      copyText.select()
    
    }
  }
};
</script>

<style lang="scss" scoped>
body {

  a {
    text-decoration: none;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
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