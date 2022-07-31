<template>
    <div>
        <div class="patient-form">
            <v-form v-model="valid" ref="form">
                <v-jsf v-model="model" :schema="schema" />
            </v-form>
        </div>
        <div class="end-buttons">
            <v-btn text class="font-weight-bold add-button" @click="addPatient">Add Patient</v-btn>
            <v-btn text @click="addPatient" class="cancel-button">Cancel</v-btn>
            <label class="ml-10">
                {{ errorLabel }}
            </label>
        </div>
        <br />
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
            "First Name": '',
            'Last Name': '',
            'Email': '',
            'MediCard ID': '',
            'Blood Type': '',
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
                'First Name': { type: 'string', 'x-cols': 5, "x-class": "mr-10" },
                'Last Name': { type: 'string', 'x-cols': 5 },
                'Phone': { type: 'number', 'x-cols': 5, "x-class": "mr-10" },
                'Email': { type: 'string', 'x-cols': 5 },
                'MediCard ID': { type: 'string', 'x-cols': 5, "x-class": "mr-10" },
                'Birthdate': { type: 'string', format: 'date', 'x-cols': 5 },
                'Blood Type': {
                    type: 'string',
                    'enum': ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
                    'x-cols': 5, "x-class": "mr-10"
                },
                'Gender': { type: 'string', 'enum': ['Male', 'Female'], 'x-cols': 5 },

                'Emergency Contacts': {
                    type: 'array', 'x-cols': 5,
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
                    type: 'array', 'x-cols': 5, "x-class": "mr-10",
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
                    type: 'array', 'x-cols': 5, items: {
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
                    type: 'array', 'x-cols': 5, "x-class": "mr-10", items: {
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
                    type: 'array', 'x-cols': 5, items: {
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
                    type: 'array', 'x-cols': 5, "x-class": "mr-10", items: {
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
                    type: 'array', 'x-cols': 5, items: {
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
                    type: 'array', 'x-cols': 5, "x-class": "mr-10", items: {
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
                    type: 'array', 'x-cols': 5, items: {
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

            axios.post("https://medicloudeg.herokuapp.com/api/patients/", {
                ...this.model
            }).then(res => {
                const Patient = res.data;
                this.errorLabel = Patient;

                // todo

            }).catch(err => {
                console.log(err);
                this.errorLabel = "An error occured, please try again"
            }
            )
        },
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

        &:hover {
            opacity: 0.6;
        }
    }
}
</style>