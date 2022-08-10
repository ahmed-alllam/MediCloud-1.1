<template>

    <v-container class="pt-5 pr-5 pl-5 pb-5">
        <PatientDetail @loaded="onLoaded" :patient_id="patient_id" v-if="visit_loaded" />
        <hr v-if="visit_loaded" />
        <div class="appointment-details" v-if="visit_loaded">
            <v-card class="appointment-card">
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="headline">
                            This Appointment
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            {{ formatDate() }}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-card-text>
                    <v-form v-model="valid" ref="form">
                        <v-jsf v-model="model" :schema="schema" :options="options"/>
                    </v-form>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn v-if="edit && loaded" text large class="font-weight-bold add-appointment-button"
                        @click="editAppointment">Edit
                        Appointment</v-btn>
                    <v-btn v-else-if="loaded" text large class="font-weight-bold add-appointment-button"
                        @click="addAppointment">Add
                        Appointment</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </div>


        <v-card v-if="!visit_loaded" class="pb-10 pt-10 mr-7 mb-7 ml-7 mt-7">
            <div class="loadingBar">
                <v-progress-circular indeterminate color="primary" v-if="!errorLabel"></v-progress-circular>
                <label class="errorLabel">
                    {{ errorLabel }}
                </label>
            </div>
        </v-card>


    </v-container>

</template>

<script>
import axios from "axios"
import moment from "moment"

import VJsf from '@koumoul/vjsf/lib/VJsf.js'
import '@koumoul/vjsf/lib/VJsf.css'
import '@koumoul/vjsf/lib/deps/third-party.js'

import PatientDetail from "../components/Patients/PatientDetail"

export default {
    components: {
        PatientDetail, VJsf
    },
    props: {
        edit: {
            type: Boolean,
            default: false,
        },
    },

    data: () => ({
        visit_loaded: false,
        errorLabel: '',
        loaded: false,
        patient_id: '',
        valid: null,
        model: {
        },
        options: {
            "editMode": "inline"
        },
        schema: {
            type: 'object',
            properties: {
                'patientComplaint': { title: 'Patient Complaint', type: 'string' },
                'patientDiagnosis': { title: 'Diagnosis', type: 'string' },
                'followUpDate': { title: 'Follow Up Date', type: 'string', format: 'date' },
                'notes': { title: 'Notes', type: 'string' },
                'visitCost': { title: 'Appointment Cost (EGP)', type: 'number', default: 0 },
                'prescription': {
                    title: 'Prescription', type: 'array', items: {
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
                            'Name': { type: 'string', title: 'Drug Name', 'x-props': { 'hint': 'Ex: Panadol' } },
                            'Dose': { type: 'string', title: 'Dose', 'x-props': { 'hint': 'Ex: Twice a day' } },
                            'Details': { type: 'string', title: 'Notes' ,'x-props': { 'hint': 'Ex: Prescription for Covid-19' } },
                        },
                        required: ['Name']
                    },
                },
            }, required: ['complaint', 'patientDiagnosis']
        },
    }),
    methods: {
        onLoaded(id) {
            this.loaded = true;
            this.patient_id = id;
        },
        formatDate() {
            return moment().format("LLLL")
        },
        getVisit() {
            axios.get(`https://api.medicloud.care/api/visits/${this.$route.params.id}`)
                .then(response => {
                    this.model = response.data[0];
                    this.patient_id = this.model.patientId;
                    this.valid = true;
                    this.visit_loaded = true;
                })
                .catch(error => {
                    this.valid = false;
                    this.errorLabel = 'Error loading appointment';
                    this.visit_loaded = false;
                    console.log(error);
                })
        },
        async addAppointment() {
            await this.$refs.form.validate();

            if (!this.valid) {
                this.$toast.error('Please fill all the required fields');
                return false;
            }

            this.$toast.info('Adding Appointment...');

            axios.post("https://api.medicloud.care/api/visits/", {
                patientId: this.patient_id,
                ...this.model,
            })
                .then(() => {
                    this.$toast.clear();
                    this.$toast.success('Appointment added successfully');
                    this.$router.push("/appointments")
                })
                .catch(err => {
                    this.$toast.clear();
                    this.$toast.error('Error adding appointment');
                    console.log(err);
                })
        },
        async editAppointment() {
            await this.$refs.form.validate();

            if (!this.valid) {
                this.$toast.error('Please fill all the required fields');
                return false;
            }

            this.$toast.info('Editing Appointment...');

            axios.patch(`https://api.medicloud.care/api/visits/${this.$route.params.id}`, {
                patientId: this.patient_id,
                ...this.model,
            })
                .then(() => {
                    this.$toast.clear();
                    this.$toast.success('Appointment updated successfully');
                    this.$router.push("/appointments")
                })
                .catch(err => {
                    this.$toast.clear();
                    this.$toast.error('Error updating appointment');
                    console.log(err);
                })
        },
    },
    mounted() {
        if (this.edit)
            this.getVisit();
        else {
            this.visit_loaded = true;
            // this.patient_id = this.$route.params.id;
        }
    }
}
</script>

<style lang="scss" scoped>
.loadingBar {
    text-align: center;
    margin: 50px 0;
    // padding-bottom: 150px !important;
}

.errorLabel {
    color: red;
}

.appointment-details {
    margin: 30px 4%;
    padding: 10px;
}

.appointment-card {
    padding: 20px;
    // border: rgba(0, 0, 0, 0.1) 1px solid;
    // border-radius: 10px !important;
    // box-shadow: none;
}

.add-appointment-button {
    color: white !important;
    background-color: #26b3ff;
    border-radius: 25px;
    text-decoration: none;
    padding: 20px !important;

    &:hover {
        opacity: 0.6;
    }
}
</style>