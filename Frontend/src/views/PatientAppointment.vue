<template>

    <v-container>
        <PatientDetail />
        <hr/>
        <div class="appointment-details">
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
                    <v-card flat>
                        <v-card-title class="body-1">
                            Symptoms
                            <v-spacer></v-spacer>
                            <v-text-field clearable label="Symptoms" v-model="visitPatientSymptom"
                                @keyup.enter="visitPatientSymptoms.push(visitPatientSymptom); visitPatientSymptom = ''">
                            </v-text-field>
                        </v-card-title>
                        <v-card-text>
                            <v-list>
                                <v-list-item v-for="(symptom, i) in visitPatientSymptoms" :key="i">
                                    <v-list-item-content>
                                        {{ symptom }}
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-btn icon
                                            @click="visitPatientSymptoms = visitPatientSymptoms.filter(x => x !== symptom)">
                                            <v-icon>mdi-close</v-icon>
                                        </v-btn>
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>
                    <v-text-field label="Patient Diagnosis" v-model="visitPatientDiagnosis"></v-text-field>
                    <v-card flat>
                        <v-card-title class="body-1">
                            Medications
                            <v-spacer></v-spacer>
                            <v-text-field clearable label="Medications" v-model="visitPatientMedication"
                                @keyup.enter="visitPatientMedications.push(visitPatientMedication); visitPatientMedication = ''">
                            </v-text-field>
                        </v-card-title>
                        <v-card-text>
                            <v-list>
                                <v-list-item v-for="(medication, i) in visitPatientMedications" :key="i">
                                    <v-list-item-content>
                                        {{ medication }}
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <v-btn icon
                                            @click="visitPatientMedications = visitPatientMedications.filter(x => x !== medication)">
                                            <v-icon>mdi-close</v-icon>
                                        </v-btn>
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text large class="font-weight-bold add-appointment-button" @click="addAppointment">Add Appointment</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </div>
    </v-container>

</template>

<script>
import moment from "moment"
import { mapState } from "vuex"
import axios from "axios"

import PatientDetail from "../components/Patients/PatientDetail"

export default {
    components: {
        PatientDetail
    },

    data: () => ({
        visitPatientId: "",
        visitPatientSymptom: "",
        visitPatientSymptoms: [],
        visitPatientDiagnosis: "",
        visitPatientMedication: "",
        visitPatientMedications: [],
    }),
    methods: {
        // Formats Last Visit Date
        formatDate() {
            return moment().format("LLLL")
        },

        // Adds appointment
        addAppointment() {
            axios.post("http://localhost:5000/api/visits/", {
                patientId: this.visitPatientId,
                patientName: this.patients.find(x => x._id === this.visitPatientId).patientName,
                patientSymptoms: this.visitPatientSymptoms,
                patientDiagnosis: this.visitPatientDiagnosis,
                patientVisitDate: Date.now,
                patientMedications: this.visitPatientMedications
            }).then(res => this.visits.push(res.data)).catch(err => console.log(err))
            this.$router.push("/appointments")
        },

        // Get patients
        async getPatients() {
            axios.get("http://localhost:5000/api/patients/").then(res => this.$store.commit('getPatients', res.data)).catch(err => console.log(err))
        },
    },
    computed: {
        ...mapState(['patients', 'visits'])
    }
}
</script>

<style lang="scss" scoped>
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