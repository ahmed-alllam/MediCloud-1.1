<template>

    <v-card class="ml-10 mr-10 pt-10 pb-10">

        <v-icon color="#26b3ff">mdi-exit-to-app</v-icon>
        <h3>
            Are you sure you want to logout?
        </h3>

        <v-btn text large class="font-weight-bold logout-button" @click="logout">Logout</v-btn>
    </v-card>

</template>

<script>
export default {
    methods: {
        async logout() {
            this.$store.commit('loggedOut');
            this.$emit("loginChanged");
            this.$router.push("/");
        }
    }
}


</script>

<style lang="scss" scoped>
h3,
h5 {
    text-align: center;
    color: #26b3ff;
    margin-top: 40px;
}

i {
    display: block !important;
    text-align: center !important;
    font-size: 90px !important;
}

div {
    margin: 20vh;
}

.logout-button {
    color: white !important;
    background-color: red;
    border-radius: 25px;
    text-decoration: none;
    // padding: 20px !important;
    display: block;
    margin: 50px auto;

    &:hover {
        opacity: 0.6;
    }
}
</style>