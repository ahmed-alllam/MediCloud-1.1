<template>
    <div>
        <div id="top-content">
            <div id="row">
                <div v-if="patient_data.header_info['Profile Photo']" id="image" class="col-xs-12 col-md-5 col-xl-2">
                    <img id="profile-photo" :src="patient_data.header_info['Profile Photo']" />
                </div>

                <div v-else-if="loaded" id="image" class="col-xs-12 col-md-5 col-xl-2">
                    <img id="profile-photo" :src="require('@/assets/images/Profile.jpg')" />
                </div>

                <div id="name-container" class="col-xs-12 col-md-7 col-xl-3">
                    <h3 id="name">{{ patient_data.header_info.Name }}</h3>
                    <h3 id="email">{{ patient_data.header_info.Email }}</h3>
                </div>

                <div id="basic-info" class="col-sm-11 offset-xl-1 col-xl-6 float-right">
                    <div v-for="(value, key, index) in this.patient_info" :key="`${key}-${index}`">
                        <span class="name">{{ key }}</span>

                        <span class="value">{{ value }}</span>
                    </div>
                </div>
            </div>
        </div>


        <v-dialog v-model="add_dialog" width="500" v-if="loaded && can_edit">
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" text large class="font-weight-bold add-record-button">
                    Add New Records
                    <v-icon>mdi-plus-circle</v-icon>
                </v-btn>
            </template>

            <AddRecord @update="update_add_dialog" />
        </v-dialog>


        <div id="medical-details">
            <div v-for="(value, key, index) in this.patient_details" :key="`${key}-${index}`">

                <h2>{{ key }}</h2>

                <div class="row no-gutters">

                    <div v-for="item in value" v-bind:key="item.title" class="col-md-6 col-xs-12">
                        <div class="record-item row no-gutters">

                            <img class="record-image" v-if="item.Image" :src="item.Image" />

                            <v-menu top>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon v-if="can_edit" v-bind="attrs" v-on="on" class="edit-button">
                                        <v-icon>mdi-dots-vertical</v-icon>
                                    </v-btn>
                                </template>

                                <v-list>

                                    <v-dialog v-model="edit_dialog" width="500">
                                        <template v-slot:activator="{ on, attrs }">

                                            <v-list-item link v-bind="attrs" v-on="on">
                                                <v-list-item-title>Edit</v-list-item-title>
                                            </v-list-item>
                                        </template>

                                        <EditRecord @update="update_edit_dialog" />

                                    </v-dialog>

                                    <v-dialog v-model="delete_dialog" width="500">
                                        <template v-slot:activator="{ on, attrs }">

                                            <v-list-item link v-bind="attrs" v-on="on">
                                                <v-list-item-title>Delete</v-list-item-title>
                                            </v-list-item>
                                        </template>

                                        <v-card>
                                            <v-card-title class="text-h5 grey lighten-2">
                                                Delete
                                            </v-card-title>

                                            <v-card-text>
                                                Are you sure you want to delete this record?
                                            </v-card-text>

                                            <v-divider></v-divider>

                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn color="red" text @click="delete_dialog = false">
                                                    Delete
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-list>
                            </v-menu>

                            <div>
                                <div class="record-title" v-if="item.Name">
                                    <span>{{ item.Name }}</span>
                                </div>

                                <div class="record-date" v-if="item.Date">
                                    <span>Date: {{ item.Date | formatDate }}</span>
                                </div>

                                <div class="record-date" v-if="item['Start Date']">
                                    <span>Start Date: {{ item['Start Date'] | formatDate  }}</span>
                                </div>

                                <div class="record-date" v-if="item['End Date']">
                                    <span>End Date: {{ item['End Date'] | formatDate  }}</span>
                                </div>

                                <div class="record-details" v-if="item.Phone">
                                    <span>Phone: {{ item.Phone }} </span>
                                </div>
                                <div class="record-details" v-if="item['Family Member']">
                                    <span>{{ item['Family Member'] }} </span>
                                </div>
                                <div class="record-details" v-if="item.Details">
                                    <span>{{ item.Details }} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="addMediCard">
                <h2>MediCard</h2>

                <div class="row no-gutters">

                    <div class="col-md-6 col-xs-12">
                        <div class="record-item row no-gutters">

                            <div>
                                <div class="record-details">
                                    <span>Link a MediCard to this patient</span>
                                </div>

                                <form>
                                    <v-text-field clearable label="Card ID">
                                    </v-text-field>
                                    <v-btn text large class="font-weight-bold add-medicard-button">SAVE</v-btn>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import EditRecord from "./EditRecord.vue";
import AddRecord from "./AddRecord.vue";

import axios from "axios";
const moment = require('moment');

export default {
    name: "PatientDetail",
    data: () => ({
        loaded: false,
        add_dialog: false,
        edit_dialog: false,
        delete_dialog: false,
        addMediCard: false,
        can_edit: true,
        patient_data: {
            header_info: {},
            basic_info: {},
            details_sections:
            {
                'Emergency Contacts': [],
                Medications: [],
                Disease: [],
                "Family History": [],
                Immunizations: [],
                Allergies: [],
                Prescriptions: [],
                Scans: [],
                "Lab Tests": []
            }
        }
    }),
    methods: {
        getPatientData() {
            var linkID = '';
            const paramID = this.$route.params.id;

            if (paramID.length > 8)
                linkID = paramID;
            else
                linkID = 'medicard/' + paramID;

            axios.get("http://localhost:5000/api/patients/" + linkID)
                .then(response => {

                    this.loaded = true;

                    const patient = response.data;
                    this.patient_data.header_info = {
                        "Profile Photo": patient.patientPhoto,
                        "Name": patient.patientFirstName + ' ' + patient.patientLastName,
                        "Email": patient.patientEmail,
                    }

                    if (patient.patientBirthDate)
                        patient.patientBirthDate = moment(patient.patientBirthDate).format('YYYY/MM/DD');

                    this.patient_data.basic_info = {
                        "ID": patient.patientMediCardID,
                        "Birth Date": patient.patientBirthDate,
                        "City": patient.patientCity,
                        "Blood Type": patient.patientBloodType,
                        "Phone": patient.patientPhone,
                        "Height": patient.patientHeight,
                        "Weight": patient.patientWeight,
                        "Status": patient.patientStatus,
                        "Gender": patient.patientGender,
                    }

                    this.patient_data.details_sections['Emergency Contacts'] = patient.patientEmergencyContacts;
                    this.patient_data.details_sections.Medications = patient.patientMedications;
                    this.patient_data.details_sections.Disease = patient.patientDiseases;
                    this.patient_data.details_sections['Family History'] = patient.patientFamilyHistory;
                    this.patient_data.details_sections.Immunizations = patient.patientImmunizations;
                    this.patient_data.details_sections.Allergies = patient.patientAllergies;
                    this.patient_data.details_sections.Prescriptions = patient.patientPrescriptions;
                    this.patient_data.details_sections.Scans = patient.patientScans;
                    this.patient_data.details_sections['Lab Tests'] = patient.patientLabTests;

                    if (patient.patientMediCardID == '')
                        this.addMediCard = true;

                })
                .catch(error => {
                    console.log(error);
                    //todo
                });
        },
        update_add_dialog(add_dialog) {
            this.add_dialog = add_dialog
        },
        update_edit_dialog(edit_dialog) {
            console.log("ediiiti")
            this.edit_dialog = edit_dialog
        },
    },
    created() {
        this.getPatientData()
    },
    computed: {
        patient_details: function () {
            return Object.fromEntries(Object.entries(this.patient_data.details_sections).filter(([, v]) => v && v.length > 0));
        },
        patient_info: function () {
            return Object.fromEntries(Object.entries(this.patient_data.basic_info).filter(([, v]) => v && v.length > 0));
        }
    },
    components: { EditRecord, AddRecord }
};

</script>

<style scoped lang="scss">
body {
    background-color: #F0F2F5;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
    margin: 0;
    padding: 0;
    font-family: 'Quicksand';
}

#top-content {
    display: flex;
    background-color: #FFFFFF;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
}

#top-content img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    margin: auto;
}

@media screen and (min-width: 768px) {
    #top-content img {
        margin: auto 0 auto auto !important;
    }
}

#top-content #row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

#top-content #name-container {
    display: block;
}

@media screen and (max-width: 768px) {
    #top-content #name-container {
        margin-top: 25px;
    }
}

#top-content #name-container #name {
    font-size: 36px;
    font-weight: bold;
    color: #333333;
    // text-align: center !important;
}

#top-content #name-container #email {
    font-size: 20px;
    color: #999999;
    // text-align: center !important;
}

@media screen and (min-width: 768px) {

    #name,
    #email {
        text-align: left !important;
    }
}

#top-content #image {
    display: flex;
}

#top-content [class^='col-'] {
    margin: auto;
}


#top-content #basic-info {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    padding: 5px !important;
}

#top-content #basic-info>div {
    display: flex;
    margin: 0 0 10px 10px;
}

#top-content #basic-info div {
    display: block;
    flex-basis: auto;
    margin-right: 30px;
}

#top-content #basic-info .value {
    margin-bottom: 30px;
}

#top-content #basic-info .name {
    font-size: 15px;
    color: #999999;
}

#top-content #basic-info .value {
    display: block;
    margin-top: 20px;
    font-size: 15px;
    color: #333333;
}

#top-content span,
#top-content h2 {
    overflow: hidden;
    text-overflow: ellipsis;
}

#medical-details {
    margin: 50px 4%;
}

#medical-details>div {
    padding: 10px;
    margin-top: 20px;
    /* box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); */
    border-radius: 10px;
    background-color: #FFFFFF;
}

#medical-details h2 {
    font-size: 25px;
    font-weight: bold;
    color: #333333;
    margin-top: 5px;
    margin-bottom: auto;
}


#medical-details .record-item {
    padding: 20px;
    margin-top: 20px;
    margin-right: 15px;
    border: rgba(0, 0, 0, 0.1) 1px solid;
    border-radius: 10px;
    display: flex;
}

#medical-details .record-image {
    width: 140px;
    height: 96px;
    margin-right: 20px;
    margin-bottom: 10px;
    object-fit: cover;
    border-radius: 10px;
}

#medical-details .record-title {
    font-size: 19px;
    color: #333333;
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 10px;
}

#medical-details span {
    word-break: break-word;
    white-space: pre-wrap;
}

#medical-details .record-date {
    font-size: 15px;
    color: #666666;
    margin-bottom: 10px;
}

#medical-details .record-details {
    font-size: 15px;
    color: #666666;
    margin-bottom: 10px;
}

.edit-button {
    margin-right: 40px;
    margin-top: 40px;
    position: absolute;
    top: 0;
    right: 0;

    &:focus {
        outline: none;
    }
}

.add-medicard-button {
    color: white !important;
    background-color: #26b3ff;
    border-radius: 25px;
    text-decoration: none;
    padding: 20px !important;

    &:hover {
        opacity: 0.6;
    }
}

.add-record-button {
    color: white !important;
    background-color: #26b3ff;
    border-radius: 25px;
    text-decoration: none;

    margin: 0 auto;
    display: block;

    i {
        margin-left: 5px;
    }

    &:hover {
        opacity: 0.6;
    }
}
</style>