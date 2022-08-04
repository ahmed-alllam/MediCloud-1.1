<template>
    <div>
        <div class="patient-form">
            <v-form v-model="valid" ref="form">
                <v-jsf v-model="model" :schema="schema" />
            </v-form>
        </div>
        <div class="end-buttons">
            <v-btn text class="font-weight-bold add-button" @click="addPatient">Add Patient</v-btn>
            <v-btn text class="cancel-button" router to="/appointments/new">Cancel</v-btn>
            <label class="ml-10">
                {{ errorLabel }}
            </label>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import VJsf from '@koumoul/vjsf/lib/VJsf.js'
import '@koumoul/vjsf/lib/VJsf.css'
import '@koumoul/vjsf/lib/deps/third-party.js'


export default {
    name: "AddPatient",
    components: { VJsf },
    data: () => ({
        errorLabel: '',
        valid: null,
        model: {
            "Photo": '',
            "First Name": '',
            'Last Name': '',
            'Email': '',
            'MediCard ID': '',
            'Blood Type': null,
            'Status': '',
            'Height': '',
            'Weight': '',
            'Birthdate': '',
            'Gender': null,
            'City': '',

            'Emergency Contacts': [],
            'Medications': [],
            'Diseases': [],
            'Family History': [],
            'Immunizations': [],
            'Allergies': [],
            'Prescriptions': [],
            'Scans': [],
            'Lab tests': [],
        },
        schema: {
            required: ['First Name', 'Last Name'],
            type: 'object',
            properties: {
                'First Name': { type: 'string', 'x-col': '12', "x-class": "mr-10 col-sm-5" },
                'Last Name': { type: 'string', 'x-col': '12', "x-class": "col-sm-5" },
                'Phone': { type: 'number', 'x-col': '12', "x-class": "mr-10 col-sm-5" },
                'Email': { type: 'string', 'x-col': '12', 'x-class': 'col-sm-5' },
                'Birthdate': { type: 'string', format: 'date', 'x-col': '12' , "x-class": "mr-10 col-sm-5"},
                'Blood Type': {
                    type: 'string',
                    'enum': ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
                    'x-col': '12',
                    'x-class': 'col-sm-5'
                },
                'Gender': { type: 'string', 'enum': ['Male', 'Female'], 'x-col': '12' , "x-class": "mr-10 col-sm-5"},

                'Emergency Contacts': {
                    type: 'array', 'x-col': '12', 'x-class': 'col-sm-5',
                    items: {
                        type: 'object',
                        properties: {
                            'Name': { type: 'string' },
                            'Phone': { type: 'number' }
                        },
                        required: ['Phone']
                    },
                },
                'Medications': {
                    type: 'array', 'x-col': '12', "x-class": "mr-10 col-sm-5",
                    items: {
                        type: 'object',
                        properties: {
                            'Name': { type: 'string' },
                            'Dose': { type: 'string' },
                            'Start Date': { type: 'string', format: 'date' },
                            'End Date': { type: 'string', format: 'date' },
                        },
                        required: ['Name']
                    },
                },
                'Diseases': {
                    type: 'array', 'x-col': '12', 'x-class': 'col-sm-5'
                    , items: {
                        type: 'object',
                        properties: {
                            'Name': { type: 'string' },
                            'Details': { type: 'string' },
                            'Start Date': { type: 'string', format: 'date' },
                            'End Date': { type: 'string', format: 'date' },
                        },
                        required: ['Name']
                    },
                },
                'Family History': {
                    type: 'array', 'x-col': '12', "x-class": "mr-10 col-sm-5", items: {
                        type: 'object',
                        properties: {
                            'Name': { type: 'string' },
                            'Family member': { type: 'string' },
                            'Start Date': { type: 'string', format: 'date' },
                            'End Date': { type: 'string', format: 'date' },
                        },
                        required: ['Name']
                    },
                },
                'Immunizations': {
                    type: 'array', 'x-col': '12', 'x-class': 'col-sm-5', items: {
                        type: 'object',
                        properties: {
                            'Name': { type: 'string' },
                            'Details': { type: 'string' },
                            'Date': { type: 'string', format: 'date' },
                        },
                        required: ['Name']
                    },
                },
                'Allergies': {
                    type: 'array', 'x-col': '12', "x-class": "mr-10 col-sm-5", items: {
                        type: 'object',
                        properties: {
                            'Name': { type: 'string' },
                            'Details': { type: 'string' },
                            'Start Date': { type: 'string', format: 'date' },
                            'End Date': { type: 'string', format: 'date' },
                        },
                        required: ['Name']
                    },
                },
                'Prescriptions': {
                    type: 'array', 'x-col': '12', 'x-class': 'col-sm-5', items: {
                        type: 'object',
                        properties: {
                            'Image': {
                                type: 'string', "contentMediaType": "image/*",
                                "writeOnly": true
                            },
                            'Details': { type: 'string' },
                            'Date': { type: 'string', format: 'date' },
                        },
                        required: ['Details']
                    },
                },
                'Scans': {
                    type: 'array', 'x-col': '12', "x-class": "mr-10 col-sm-5", items: {
                        type: 'object',
                        properties: {
                            'Image': {
                                type: 'string', "contentMediaType": "image/*",
                                "writeOnly": true
                            },
                            'Details': { type: 'string' },
                            'Date': { type: 'string', format: 'date' },
                        },
                        required: ['Details']
                    },
                },
                'Lab tests': {
                    type: 'array', 'x-col': '12', 'x-class': 'col-sm-5',  items: {
                        type: 'object',
                        properties: {
                            'Image': {
                                type: 'string', "contentMediaType": "image/*",
                                "writeOnly": true
                            },
                            'Details': { type: 'string' },
                            'Date': { type: 'string', format: 'date' },
                        },
                        required: ['Details']
                    },
                },
            }
        }
    }),
    methods: {
        async addPatient() {
            await this.$refs.form.validate();

            if (!this.valid) {
                this.errorLabel = "Please fill all the required fields"
                return false;
            }

            this.errorLabel = "Loading..."

            const send_model = {}

            for (const key in this.model) {
                send_model['patient' + String(key).replace(/ /g, '')] = this.model[key]
            }

            axios.post("https://medicloudeg.herokuapp.com/api/patients/", {
                ...send_model
            }).then(res => {
                const Patient = res.data;

                this.errorLabel = "Patient added successfully, redirecting to the next page"
                this.$router.push({
                    path: '/appointments/new/patient/' + Patient._id,
                })
            }).catch(err => {
                console.log(err);
                this.errorLabel = "An error occured, please try again"
            }
            )
        }
    },
}
</script>


<style lang="scss" scoped>
.patient-form {
    margin: 0 40px;
}

.end-buttons {
    margin: 20px 40px;

    .add-button {
        color: white !important;
        background-color: #26b3ff;
        border-radius: 25px;
        text-decoration: none;

        &:hover {
            opacity: 0.6;
        }
    }

    .cancel-button {
        border-radius: 25px;
        background-color: rgb(255, 0, 0);
        color: white !important;
        margin-left: 10px;
        text-decoration: none;

        &:hover {
            opacity: 0.6;
        }
    }
}
</style>