<template>
    <div>
        <div class="patient-form">
            <v-text-field label="First Name" v-model="patientName"></v-text-field>
            <v-text-field label="Last Name" v-model="patientName"></v-text-field>
            <v-text-field label="Birth year" v-model="patientName"></v-text-field>
            <v-text-field label="Gender" v-model="patientName"></v-text-field>
            <v-text-field label="Blood Type" v-model="patientName"></v-text-field>
            <v-text-field label="Height" v-model="patientName"></v-text-field>
            <v-text-field label="Weight" v-model="patientName"></v-text-field>
            <v-text-field label="Current Medications" v-model="patientWeight"></v-text-field>
            <v-text-field label="City" v-model="patientHeight" @keyup.enter="addPatient"></v-text-field>
        </div>
        <div class="end-buttons">
            <v-btn text class="font-weight-bold add-button" router to="/appointments/new/patient/:id" @click="addPatient">Add Patient</v-btn>
            <v-btn text @click="addPatient" class="cancel-button">Cancel</v-btn>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import { mapState } from "vuex"

export default {
    data: () => ({
        patientName: "",
        patientWeight: "",
        patientHeight: "",
    }),
    methods: {
        // Add a patient
        async addPatient() {
            axios.post("http://localhost:5000/api/patients/", {
                patientName: this.patientName,
                patientWeight: parseInt(this.patientWeight),
                patientHeight: parseInt(this.patientHeight)
            }).then(res => {
                const Patient = res.data
                this.$store.commit('addPatient', Patient)
            }).catch(err => console.log(err))
            this.patientName = this.patientHeight = this.patientWeight = ""
            this.addPatientDialog = false
        },
    },
    computed: {
        ...mapState(['patients'])
    }
}
</script>


<style lang="scss" scoped>
.patient-form {
    margin: 0 40px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;

    .v-input {
        flex-basis: 33.333%;
        margin-right: 30px;
    }
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