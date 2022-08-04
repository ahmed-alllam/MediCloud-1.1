<template>
    <div class="row">
        <div class="col-md-8 col-12">
            <div class="login-page">
                <div class="container">
                    <div class="login">
                        <h1>Log in</h1>
                        <form class="form-group">
                            <div class="p-float-label input-group">
                                <InputText id="email" type="email" v-model="emailLogin" required />
                                <label for="email">Email</label>
                            </div>

                            <div class="p-float-label input-group">
                                <InputText id="password" type="password" v-model="passwordLogin" required />
                                <label for="password">Password</label>
                            </div>
                            <button type="button" class="btn btn-primary submit" @click="doLogin">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="about col-md-4 col-12">
        </div>
    </div>
</template>

<script>

import axios from "axios"

export default {
    data() {
        return {
            emailLogin: "",
            passwordLogin: "",
        };
    },

    methods: {
        async doLogin() {
            if (this.emailLogin === "" || this.passwordLogin === "") {
                this.$toast.clear();
                this.$toast.error("Please fill all fields");
            } else {
                this.$toast.clear();
                this.$toast.info("Logging in...");

                axios.post("https://medicloudeg.herokuapp.com/api/doctors/login/", {
                    email: this.emailLogin,
                    password: this.passwordLogin
                }).then(async res => {
                    this.$toast.clear();
                    this.$toast.success("Logged in");

                    const token = res.data.token;
                    this.$store.commit('loggedIn', token);
                    this.$emit("loginChanged");
                    this.$router.push("/");
                }).catch(err => {
                    if (String(err).includes("401")) {
                        this.$toast.clear();
                        this.$toast.error("Invalid email or password");
                    } else {
                        this.$toast.clear();
                        this.$toast.error("Something went wrong");
                    }
                })
            }
        },
    }
};
</script>

<style scoped lang="scss">
.row {
    height: 100vh;

    @media (max-width: 768px) {
        margin-top: 50px;
    }
}


.login-page {
    align-items: center;
    display: flex;
    margin: 0 auto;
    max-width: 500px;
    height: 100%;

    .submit {
        background-color: #26b3ff;
        margin-top: 20px;
        width: 100%;
        border-radius: 25px;
    }

    h1 {
        margin-bottom: 1.5rem;
    }

    .card {
        padding: 20px;
    }

    .form-group {
        .input-group {
            margin-bottom: 25px;
        }

        button {
            padding: 8px 0px;
        }

        input {
            border-radius: 25px;
            width: 100%;
        }
    }
}

.about {
    background-color: #26b3ff;

    @media (max-width: 768px) {
        margin-top: 50px;
    }
}

.error {
    background-color: transparent !important;
    color: red;
    margin-top: 20px;
}
</style>
