<template>
    <v-container class="pt-10 pr-10 pl-10 pb-10">
        <v-card class="pb-5">
            <v-row class="question-row">
                <h3>
                    Is your Patient a <span class="brand-name">MediCloud</span> Client?
                </h3>
            </v-row>
            <v-row class="question-row options">
                <v-col cols="12" md="6">
                    <div class="option-col yes-option">
                        <h4>
                            Yes,
                            Enter their MediCloud ID:
                        </h4>
                        <v-form v-model="valid" ref="form" @submit.prevent="onSubmit">
                            <v-jsf v-model="model" :schema="schema" />
                        </v-form>
                        <v-btn text @click="onSubmit" class="submit-button">Continue</v-btn>
                    </div>

                </v-col>
                <v-col cols="12" md="6">
                    <router-link tag="div" to="/appointments/new/patient" class="option-col no-option" v-ripple>
                        <h4>
                            No,
                            <br />
                            Add Manually
                        </h4>
                    </router-link>
                </v-col>
            </v-row>
            <v-row class="question-row">
                <br />
                <br />
                <h5>
                    By entering your patient's <span class="brand-name">MediCloud</span> ID, you can easily <br />
                    see all their medical history and update it, to show automatically in their app.
                </h5>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>

import VJsf from '@koumoul/vjsf/lib/VJsf.js'
import '@koumoul/vjsf/lib/VJsf.css'
import '@koumoul/vjsf/lib/deps/third-party.js'

export default {
    data() {
        return {
            model: '',
            schema: {
                title: 'MediCard ID',
                type: 'string',
                minLength: 8,
                maxLength: 8,
            },
            valid: false,
        }
    },
    methods: {
        onSubmit() {
            this.valid = true;
            if (this.$refs.form.validate()) {
                this.$router.push({
                    name: 'New Patient Appointment',
                    params: {
                        id: this.model
                    }
                });
            } else {
                this.$toast.open({
                    message: 'Please enter a valid MediCard ID',
                    type: 'error'
                });
            }
        }
    },
    components: { VJsf }
}

</script>

<style lang="scss" scoped>
.brand-name {
    color: #26b3ff;
}

.question-row {
    text-align: center;

    h3 {
        margin-top: 10vh;
        width: 100%;
    }

    h5 {
        font-size: 1rem !important;
        width: 100%;
        margin: 2vh 20px;
    }
}

.options {
    margin-top: 10vh;

    .option-col {
        margin-bottom: 5vh;
        padding: 30px;
        border-radius: 25px;
        width: 80% !important;
        height: 100%;
        margin: 0 auto;
    }

    .yes-option {
        border: #26b3ff solid 1px;
        color: #26b3ff;


        .submit-button {
            color: white !important;
            background-color: #26b3ff;
            border-radius: 25px;
            margin: 30px 0px 20px;
            text-decoration: none;

            &:hover {
                opacity: 0.6;
            }
        }
    }

    .no-option {
        border: red solid 1px;
        color: red;


        display: flex;
        align-items: center;
        text-align: center;

        h4 {
            margin: auto;
        }

        &:hover {
            opacity: 0.7;
            background-color: rgb(254, 231, 231);
        }
    }
}
</style>