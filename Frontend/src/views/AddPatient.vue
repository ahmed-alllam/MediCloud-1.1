<template>
    <v-card class="mb-10 mt-10 mr-10 ml-10 pt-10 pb-10">
        <div class="patient-form">
            <v-form v-model="valid" ref="form">
                <v-jsf v-model="model" :schema="schema" />
            </v-form>
        </div>
        <div class="end-buttons">
            <v-btn text class="font-weight-bold add-button" @click="addPatient">Add User</v-btn>
            <v-btn v-if="fromDoctor" text class="cancel-button" router to="/appointments/new">Cancel</v-btn>
        </div>
    </v-card>
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
            'Birth Date': '',
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
                'Photo': {
                    'x-col': '12',
                    type: 'string', "contentMediaType": "image/*",
                    "writeOnly": true,
                    "x-options": {
                        "filesAsDataUrl": true
                    },
                },
                'First Name': { type: 'string', 'x-col': '12', "x-class": "mr-10 col-sm-5" },
                'Last Name': { type: 'string', 'x-col': '12', "x-class": "col-sm-5" },
                'Phone': { type: 'number', 'x-col': '12', "x-class": "mr-10 col-sm-5" },
                'Email': { type: 'string', 'x-col': '12', 'x-class': 'col-sm-5' },
                'Birth Date': { type: 'string', format: 'date', 'x-col': '12', "x-class": "mr-10 col-sm-5" },
                'Blood Type': {
                    type: 'string',
                    'enum': ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
                    'x-col': '12',
                    'x-class': 'col-sm-5'
                },
                'Gender': { type: 'string', 'enum': ['Male', 'Female'], 'x-col': '12', "x-class": "mr-10 col-sm-5" },
                'MediCard ID': { type: 'string', 'x-col': '12', "x-class": "col-sm-5" },

                'Emergency Contacts': {
                    type: 'array', 'x-col': '12', 'x-class': 'col-sm-5',
                    items: {
                        type: 'object',
                        properties: {
                            'Name': { type: 'string', 'x-props': { 'hint': 'Ex: Father' } },
                            'Phone': { type: 'number', 'x-props': { 'hint': 'Ex: 01123456789' } }
                        },
                        required: ['Phone']
                    },
                },
                'Medications': {
                    type: 'array', 'x-col': '12', "x-class": "mr-10 col-sm-5",
                    items: {
                        type: 'object',
                        properties: {
                            'Name': { type: 'string', 'x-props': { 'hint': 'Ex: Panadol' } },
                            'Dose': { type: 'string', 'x-props': { 'hint': 'Ex: Twice a day' } },
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
                            'Name': { type: 'string', 'x-props': { 'hint': 'Ex: Diabetes' } },
                            'Details': { type: 'string', 'x-props': { 'hint': 'Ex: type 2' } },
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
                            'Name': { type: 'string', 'x-props': { 'hint': 'Ex: High Blood Pressure' } },
                            'Family member': { type: 'string', 'x-props': { 'hint': 'Ex: Mother' } },
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
                            'Name': { type: 'string', 'x-props': { 'hint': 'Ex: Pfizer Covid-19' } },
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
                            'Name': { type: 'string', 'x-props': { 'hint': 'Ex: Lactose Intolerance' } },
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
                                type: 'string',
                                "contentMediaType": "image/*",
                                "x-options": {
                                    "filesAsDataUrl": true
                                },
                                "writeOnly": true
                            },
                            'Details': { type: 'string', 'x-props': { 'hint': 'Ex: Prescription for Covid-19' } },
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
                                type: 'string',
                                "contentMediaType": "image/*",
                                "x-options": {
                                    "filesAsDataUrl": true
                                },
                                "writeOnly": true
                            },
                            'Details': { type: 'string', 'x-props': { 'hint': 'Ex: X-Ray for Chest' } },
                            'Date': { type: 'string', format: 'date' },
                        },
                        required: ['Details']
                    },
                },
                'Lab tests': {
                    type: 'array', 'x-col': '12', 'x-class': 'col-sm-5', items: {
                        type: 'object',
                        properties: {
                            'Image': {
                                type: 'string',
                                "contentMediaType": "image/*",
                                "x-options": {
                                    "filesAsDataUrl": true
                                },
                                "writeOnly": true
                            },
                            'Details': { type: 'string', 'x-props': { 'hint': 'Ex: Blood Sugar test' } },
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
                this.$toast.error('Please fill all the required fields');
                return false;
            }

            this.$toast.info('Adding patient...');

            const send_model = {}

            for (const key in this.model) {
                send_model['patient' + String(key).replace(/ /g, '')] = this.model[key]
            }

            axios.post("https://api.medicloud.care/api/patients/", {
                ...send_model
            }).then(res => {
                const Patient = res.data;
                this.$toast.success('User added successfully, redirecting to user profile...');

                if(this.fromDoctor){
                    this.$router.push({
                        path: '/appointments/new/patient/' + Patient._id,
                    })
                    console.log('from doctor')
                }else {
                    console.log('from patient')
                    this.$router.push({ name: 'Patient Detail', params: { id: this.medicardID} });
                }
            }).catch(err => {
                console.log(err);
                this.$toast.clear();
                this.$toast.error('Error adding patient');
            }
            )
        }
    },
    props: {
        fromDoctor: {
            type: Boolean,
            default: true
        },
        medicardID: {
            type: String,
            default: ''
        }
    },
    mounted() {
        if (this.medicardID) {
            this.model['MediCard ID'] = this.medicardID;
        }
    }
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