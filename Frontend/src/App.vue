<template>
  <v-app>
    <div v-if="loggedIn">
      <v-app-bar dark app flat clipped-left class="px-3" color="#26b3ff">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="$vuetify.breakpoint.smAndDown" />
        <v-toolbar-title class="brand-name">
          <span class="font-weight-bold">MediCloud</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field flat light solo class="mx-3" color="#000" background-color="#fff" dense
          label="Search For Patient ID" hide-details single-line append-icon="mdi-magnify" style="border-radius: 20px">
        </v-text-field>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-bell</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" :permanent="$vuetify.breakpoint.mdAndUp" hide-overlay clipped app>
        <v-list-item two-line class="my-2">
          <v-list-item-avatar color="blue">
            <span class="white--text">AA</span>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              Ahmed Allam
            </v-list-item-title>
            <v-list-item-subtitle class="caption text-uppercase">
              Dentist
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list>
          <v-subheader class="text-uppercase">Menu</v-subheader>
          <v-list-item-group color="#26b3ff">
            <v-list-item v-for="(route, i) in routes" :key="i" router :to="route.route">
              <v-list-item-icon>
                <v-icon>{{ route.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ route.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-content>
        <h1 class="display-1 mt-8 mb-2 ml-10">{{ $route.name }}</h1>
        <router-view></router-view>
      </v-content>
    </div>

    <router-view v-else>
    </router-view>


  </v-app>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      drawer: true,
      loggedIn: this.$store.state.isLoggedIn,
      routes: [
        {
          name: "Overview",
          route: "/",
          icon: "mdi-speedometer"
        },
        {
          name: "Appointments",
          route: "/appointments",
          icon: "mdi-clipboard-text-outline"
        },
        {
          name: "Finances",
          route: "/finances",
          icon: "mdi-currency-usd"
        },
        {
          name: "Messages",
          route: "/messages",
          icon: "mdi-message" // todo
        },
        {
          name: "Manage Clinic",
          route: "/manage-clinic",
          icon: "mdi-account-supervisor" // todo
        },
        {
          name: "Logout",
          route: "/logout",
          icon: "mdi-exit-to-app"
        }
      ]
    }
  },
};
</script>


<style lang="scss" scoped>
a {
  &:hover {
    text-decoration: none;
  }
}

@media screen and (max-width: 600px){
  .brand-name {
    display: none;
  }
}
</style>