<template>

    <v-container>
        <PatientDetail @loaded="onLoaded" :patient_id="patient_id" v-if="visit_loaded" />
        <hr v-if="loaded" />
        <div class="appointment-details" v-if="loaded">
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
                        <v-jsf v-model="model" :schema="schema" />
                    </v-form>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn v-if="edit" text large class="font-weight-bold add-appointment-button"
                        @click="editAppointment">Edit
                        Appointment</v-btn>
                    <v-btn v-else text large class="font-weight-bold add-appointment-button" @click="addAppointment">Add
                        Appointment</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </div>
        <div v-if="!visit_loaded" class="loadingBar">
            <v-progress-circular indeterminate color="primary" />
        </div>
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
        loaded: false,
        patient_id: '',
        valid: null,
        model: {
        },
        schema: {
            type: 'object',
            properties: {
                'patientComplaint': { title: 'Patient Complaint', type: 'string' },
                'patientDiagnosis': { title: 'Diagnosis', type: 'string' },
                'followUpDate': { title: 'Follow Up Date', type: 'string', format: 'date' },
                'notes': { title: 'Notes', type: 'string' },
                'visitCost': { title: 'Appointment Cost (EGP)', type: 'number', default: 0 },
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
            axios.get(`https://medicloudeg.herokuapp.com/api/visits/${this.$route.params.id}`)
                .then(response => {
                    this.model = response.data[0];
                    this.patient_id = this.model.patientId;
                    this.valid = true;
                    this.visit_loaded = true;
                })
                .catch(error => {
                    this.valid = false;
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

            axios.post("https://medicloudeg.herokuapp.com/api/visits/", {
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

            axios.patch(`https://medicloudeg.herokuapp.com/api/visits/${this.$route.params.id}`, {
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
    created() {
        if (this.edit)
            this.getVisit();
        else {
            this.visit_loaded = true;
            this.patient_id = this.params.id;
        }
    }
}
</script>

<style lang="scss" scoped>
.loadingBar {
    text-align: center;
    margin: 50px 0;
    padding-bottom: 150px !important;
}

.appointment-details {
    margin: 30px 4%;
    padding: 10px;
}

.appointment-card {
    padding: 20px;
    border: rgba(0, 0, 0, 0.1) 1px solid;
    border-radius: 10px !important;
    box-shadow: none;
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