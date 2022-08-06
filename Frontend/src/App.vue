<template>
  <v-app :style="{ background: $vuetify.theme.themes['light'].background }">
    <div v-if="loggedIn">
      <v-app-bar dark app flat clipped-left class="px-3" color="white">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="$vuetify.breakpoint.smAndDown" color="primary" />
        <v-toolbar-title class="brand-name">
          <img class="img-fluid mb-1" width="40px" height="40px"
          :src="require('@/assets/images/brand-logo.png')" alt="alternative">
          <span :style="{ color: $vuetify.theme.themes['light'].primary }" class="font-weight-bold">MediCloud</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field class="searchField mx-3" color="primary" flat dark solo background-color="primary" dense
          label="Search For Patient ID" hide-details single-line append-icon="mdi-magnify" v-model="mediCardID"
          @keydown.enter.prevent="searchPatientID" @click:append="searchPatientID">
        </v-text-field>
        <v-spacer></v-spacer>
        <v-btn icon color="primary">
          <v-icon>mdi-bell</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" :permanent="$vuetify.breakpoint.mdAndUp" hide-overlay clipped app>
        <v-list-item class="my-2">
          <v-list-item-content class="profileList">
            <v-list-item-avatar color="primary">
              <span class="white--text">{{ initials }}</span>
            </v-list-item-avatar>
            <v-list-item-title>
              {{ user_name }}
            </v-list-item-title>
            <v-list-item-subtitle class="caption">
              {{ user_email }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-btn text class="font-weight-bold add-appointment-button" @click="addAppointment">
          <v-icon left dense>
            mdi-plus-circle
          </v-icon>
          Add
          Patient
        </v-btn>
        <v-list flat>
          <v-list-item-group class="routesList">
            <v-list-item v-for="(route, i) in routes" :key="i" router :to="route.route" color="primary"
              class="SelectedTile" active-class="SelectedTile-active">
              <!-- <v-list-item-icon> -->
              <!-- <v-icon>{{ route.icon }}</v-icon> -->
              <!-- </v-list-item-icon> -->
              <v-list-item-content>
                <v-list-item-title class="listItem">{{ route.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-content>
        <router-view @loginChanged="checkLoggedIn" :key="$route.fullPath"></router-view>
      </v-content>
    </div>

    <router-view @loginChanged="checkLoggedIn" v-else>
    </router-view>


  </v-app>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      user_name: '',
      user_email: '',
      mediCardID: '',
      drawer: true,
      loggedIn: false,
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
          icon: "mdi-message"
        },
        {
          name: "Connect",
          route: "/connect",
          icon: "mdi-account-group"
        },
        {
          name: "Manage Clinic",
          route: "/manage-clinic",
          icon: "mdi-hospital"
        },
        {
          name: "Logout",
          route: "/logout",
          icon: "mdi-exit-to-app"
        }
      ]
    }
  },
  methods: {
    addAppointment () {
      this.$router.push({ name: 'New Appointment' });
    },
    checkLoggedIn() {
      this.$store.dispatch("fetchAccessToken").then(() => {
        this.loggedIn = this.$store.state.isLoggedIn

        if (this.loggedIn) {
          this.user_name = this.$store.state.user_name
          this.user_email = this.$store.state.user_email
        }
      });
    },
    searchPatientID() {
      if (this.mediCardID.length === 8) {
        this.$router.push({
          name: 'Patient Detail',
          params: {
            id: this.mediCardID
          }
        });
      } else {
        this.$toast.open({
          message: 'Please enter a valid MediCard ID',
          type: 'error'
        });
      }
    },
  },
  computed: {
    initials() {
      let name = this.$store.state.user_name;

      if (name) {
        let initials = name.match(/\b\w/g) || [];
        return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
      }

      return '';
    }
  },
  created() {
    this.checkLoggedIn();
  },
};
</script>


<style lang="scss" scoped>
.add-appointment-button {
  color: white !important;
  background-color: #26b3ff;
  border-radius: 25px;
  text-decoration: none;
  padding: 20px !important;
  font-size: 15px !important;
  font-weight: bolder !important;
  text-align: center;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    opacity: 0.6;
  }

  i {
    font-size: 25px !important;
  }
}

.profileList {
  text-align: center;

  .v-avatar {
    width: 100px !important;
    height: 100px !important;
    flex: 0 0 auto !important;
    margin: 20px auto !important;
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.15);


    span {
      font-size: 30px;
      font-weight: bolder;
    }
  }

  .v-list-item__title {
    color: #26b3ff;
    font-size: 20px;
    font-weight: bolder;
  }

  .caption {
    color: rgba(150, 150, 150, 0.8) !important;
    font-size: 12px !important;
    font-weight: bold;
  }
}

.listItem {
  text-align: center;
  font-size: 19px;
  font-weight: bold;

  &:hover {
    color: #26b3ff;
  }

  &:active {
    color: #26b3ff;
  }
}

.routesList {
  .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: rgba(150, 150, 150, 0.8) !important;
  }
}

.SelectedTile {
  padding: 2px !important;
}

::v-deep .v-navigation-drawer__border {
  width: 0px !important;
}

.searchField {
  border-radius: 20px;
  
  ::v-deep label {
    color: #fff !important;
  }
}

a {
  &:hover {
    text-decoration: none;
  }
}

.brand-name {
  width: 200px;
  text-align: center;
  font-size: 25px;
}

@media screen and (max-width: 600px) {
  .brand-name {
    display: none;
  }
}
</style>

<style>
  .v-card {
    box-shadow: 0px 0px 50px 1px rgba(0, 0, 0, 0.05) !important;
    border-radius: 20px !important;
  }
</style>