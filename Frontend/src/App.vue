<template>
  <v-app>
    <div v-if="loggedIn">
      <NavigationBar />
      <NavigationDrawer />
      <v-content>
        <h1 class="display-1 mt-8 ml-5 mb-2">{{ $route.name }}</h1>
        <router-view></router-view>
      </v-content>
    </div>

    <router-view v-else>
    </router-view>


  </v-app>
</template>

<script>
import NavigationBar from "./components/Navbar/NavigationBar"
import NavigationDrawer from "./components/Navbar/NavigationDrawer"

export default {
  name: 'App',

  components: {
    NavigationBar, NavigationDrawer
  },

  data () {
    return {
      loggedIn: this.$store.state.isLoggedIn,
    }
  },
};
</script>
