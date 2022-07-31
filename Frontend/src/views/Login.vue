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

                            <label class="error">{{ error }}</label>
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
            error: "",
        };
    },

    methods: {
        async doLogin() {
            if (this.emailLogin === "" || this.passwordLogin === "") {
                this.error = "Please Fill empty fields"
            } else {
                axios.post("https://medicloudeg.herokuapp.com/api/doctors/login/", {
                    email: this.emailLogin,
                    password: this.passwordLogin
                }).then(async res => {
                    const token = res.data.token;
                    console.log(token);
                    this.$store.commit('loggedIn', token);
                    this.$router.push("/");
                }).catch(err => {
                    if(String(err).includes("401")) {
                        this.error = "Wrong Email or Password"
                    } else 
                        this.error = "An error occured, please check your internet"
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
