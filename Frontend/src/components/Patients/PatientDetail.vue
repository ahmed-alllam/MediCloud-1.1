<template>
    <div>
        <div id="top-content" v-if="loaded">
            <div id="row">
                <div v-if="patient_data.patientPhoto" id="image" class="col-xs-12 col-md-5 col-xl-2">
                    <img id="profile-photo" :src="patient_data.patientPhoto" />
                </div>

                <div v-else-if="loaded" id="image" class="col-xs-12 col-md-5 col-xl-2">
                    <img id="profile-photo" :src="require('@/assets/images/Profile.jpg')" />
                </div>

                <div id="name-container" class="col-xs-12 col-md-7 col-xl-3">
                    <h3 id="name">
                        {{ patient_data.patientFirstName }} {{ patient_data.patientLastName }}
                    </h3>
                    <h3 id="email">
                        {{ patient_data.patientEmail }}
                    </h3>
                </div>

                <div id="basic-info" class="col-sm-11 offset-xl-1 col-xl-6 float-right">
                    <div id="id" v-if="patient_data.patientMediCardID">
                        <span class="name">
                            ID
                        </span>

                        <span class="value">
                            {{ patient_data.patientMediCardID }}
                        </span>

                    </div>

                    <div id="birthdate" v-if="patient_data.patientBirthDate">
                        <span class="name">
                            Birthdate
                        </span>

                        <span class="value">
                            {{ patient_data.patientBirthDate | formatDate }}
                        </span>
                    </div>

                    <div id="city" v-if="patient_data.patientCity">
                        <span class="name">
                            City
                        </span>

                        <span class="value">
                            {{ patient_data.patientCity }}
                        </span>

                    </div>

                    <div id="blood-type" v-if="patient_data.patientBloodType">
                        <span class="name">
                            Blood Type
                        </span>

                        <span class="value">
                            {{ patient_data.patientBloodType }}
                        </span>

                    </div>

                    <div id="phone" v-if="patient_data.patientPhone">
                        <span class="name">
                            Phone
                        </span>

                        <span class="value">
                            {{ patient_data.patientPhone }}
                        </span>

                    </div>

                    <div id="height" v-if="patient_data.patientHeight">
                        <span class="name">
                            Height
                        </span>

                        <span class="value">
                            {{ patient_data.patientHeight }}
                        </span>

                    </div>

                    <div id="weight" v-if="patient_data.patientWeight">
                        <span class="name">
                            Weight
                        </span>

                        <span class="value">
                            {{ patient_data.patientWeight }}
                        </span>

                    </div>

                    <div id="martial-status" v-if="patient_data.patientMartialStatus">
                        <span class="name">
                            Martial Status
                        </span>

                        <span class="value">
                            {{ patient_data.patientMartialStatus }}
                        </span>

                    </div>

                    <div id="gender" v-if="patient_data.patientGender">
                        <span class="name">
                            Gender
                        </span>

                        <span class="value">
                            {{ patient_data.patientGender }}
                        </span>

                    </div>
                </div>
            </div>
        </div>

        <div v-if="!loaded" class="loadingBar">
            <v-progress-circular indeterminate color="primary" v-if="!errorLabel"></v-progress-circular>
            <br />
            <br />
            <label class="errorLabel">
                {{ errorLabel }}
            </label>
        </div>

        <div id="medical-details" v-if="loaded">
            <div v-for="(value, key, index) in this.patient_data.details_sections" :key="`${key}-${index}`">

                <h2>{{ key }}</h2>

                <div class="row no-gutters">

                    <div v-for="(item, index2) in value" v-bind:key="index2" class="col-md-6 col-xs-12">
                        <div class="record-item row no-gutters">

                            <img class="record-image" v-if="item.Image" :src="'/' + item.Image" />

                            <v-menu top v-if="can_edit">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon v-bind="attrs" v-on="on" class="edit-button">
                                        <v-icon>mdi-dots-vertical</v-icon>
                                    </v-btn>
                                </template>

                                <v-list>
                                    <v-list-item link @click="edit_dialog = true; current_dialog_item = [key, index2];
current_dialog_data = patient_data.details_sections[current_dialog_item[0]][current_dialog_item[1]]
                                    ">
                                        <v-list-item-title>Edit</v-list-item-title>
                                    </v-list-item>

                                    <v-list-item link
                                        @click="delete_dialog = true; current_dialog_item = [key, index2];">
                                        <v-list-item-title>Delete</v-list-item-title>
                                    </v-list-item>
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
                                    <span>Start Date: {{ item['Start Date'] | formatDate }}</span>
                                </div>

                                <div class="record-date" v-if="item['End Date']">
                                    <span>End Date: {{ item['End Date'] | formatDate }}</span>
                                </div>

                                <div class="record-details" v-if="item.Phone">
                                    <span>Phone: {{ item.Phone }} </span>
                                </div>
                                <div class="record-details" v-if="item['Family Member']">
                                    <span>Family Member: {{ item['Family Member'] }} </span>
                                </div>
                                <div class="record-details" v-if="item.Details">
                                    <span>Details: {{ item.Details }} </span>
                                </div>
                                <div class="record-details" v-if="item.Dose">
                                    <span>Dose: {{ item.Dose }} </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <v-dialog v-model="edit_dialog" width="500">
                <EditRecord @update="edit_dialog = false" :section="current_dialog_item[0]"
                    :index="current_dialog_item[1]" :patient_data="patient_data" :section_data="current_dialog_data" />
            </v-dialog>

            <v-dialog v-model="delete_dialog" width="500">
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
                        <v-btn color="red" text @click="deleteItem">
                            Delete
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <div v-if="addMediCard">
                <h2>MediCard</h2>

                <div class="row no-gutters">

                    <div class="col-md-6 col-xs-12">
                        <div class="record-item row no-gutters">

                            <div>
                                <div class="record-details">
                                    <span>Link a MediCard to this patient</span>
                                </div>

                                <v-form ref="medicardIDForm" v-model="valid" class="mb-5">
                                    <v-jsf v-model="inputMedicardID" :schema="medicardIDSchema" />
                                </v-form>

                                <v-btn text large @click="addMediCardID" class="font-weight-bold add-medicard-button">
                                    SAVE</v-btn>
                            </div>
                        </div>
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

            <AddRecord @update="add_dialog = false" :patient_data="patient_data" />
        </v-dialog>
    </div>

</template>

<script>
import EditRecord from "./EditRecord.vue";
import AddRecord from "./AddRecord.vue";

import axios from "axios";

import VJsf from '@koumoul/vjsf/lib/VJsf.js'
import '@koumoul/vjsf/lib/VJsf.css'
import '@koumoul/vjsf/lib/deps/third-party.js'

export default {
    name: "PatientDetail",
    data: () => ({
        valid: null,
        errorLabel: "",
        medicardIDSchema: {
            title: 'MediCard ID',
            type: 'string',
            "minLength": 8,
            "maxLength": 8,
        },
        inputMedicardID: '',
        current_dialog_item: [[]],
        current_dialog_data: {},
        patient_id: '',
        loaded: false,
        add_dialog: false,
        edit_dialog: false,
        delete_dialog: false,
        addMediCard: false,
        can_edit: true,
        patient_data: { details_sections: {} }
    }),
    methods: {
        getPatientData() {
            var linkID = '';
            const paramID = this.$route.params.id;

            if (paramID.length > 8)
                linkID = paramID;
            else
                linkID = 'medicard/' + paramID;

            axios.get("https://medicloudeg.herokuapp.com/api/patients/" + linkID, { timeout: 30000 })
                .then(response => {
                    const patient = response.data;
                    this.patient_data = patient;


                    const details_sections = {};

                    details_sections['Emergency Contacts'] = patient.patientEmergencyContacts;
                    details_sections.Medications = patient.patientMedications;
                    details_sections.Diseases = patient.patientDiseases;
                    details_sections['Family History'] = patient.patientFamilyHistory;
                    details_sections.Immunizations = patient.patientImmunizations;
                    details_sections.Allergies = patient.patientAllergies;
                    details_sections.Prescriptions = patient.patientPrescriptions;
                    details_sections.Scans = patient.patientScans;
                    details_sections['Lab Tests'] = patient.patientLabTests;

                    this.patient_data.details_sections = Object.fromEntries(Object.entries(details_sections).filter(([, v]) => v && v.length > 0));

                    if (!patient.patientMediCardID)
                        this.addMediCard = true;

                    this.loaded = true;
                    this.$emit('loaded', this.patient_data._id);
                })
                .catch(error => {
                    if (error && error.response && error.response.status === 404) {
                        this.errorLabel = "Wrong Patient ID";
                    } else {
                        this.errorLabel = "An error occured, please check your connection and try again";
                    }
                });
        },
        deleteItem() {
            this.delete_dialog = false;

            const section = this.patient_data.details_sections[this.current_dialog_item[0]];
            section.splice(this.current_dialog_item[1], 1);

            this.patient_data.details_sections = Object.fromEntries(Object.entries(this.patient_data.details_sections).filter(([, v]) => v && v.length > 0));

            // delete from database
            axios.patch("https://medicloudeg.herokuapp.com/api/patients/" + this.patient_data._id + "/", {
                ['patient' + String(this.current_dialog_item[0]).replace(/ /g, '')]: section
            })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                    //todo
                });
        },
        addMediCardID() {
            if (this.valid) {

                axios.patch("https://medicloudeg.herokuapp.com/api/patients/" + this.patient_data._id + "/", {
                    'patientMediCardID': this.inputMedicardID
                })
                    .then(response => {
                        this.patient_data.patientMediCardID = this.inputMedicardID
                        this.addMediCard = false;
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                        //todo
                    });
            }
        }
    },
    created() {
        this.getPatientData()
    },
    components: { EditRecord, AddRecord, VJsf }
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

.loadingBar {
    text-align: center;
    margin: 150px 0;
}

.errorLabel {
    color: red;
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
    text-align: center;
}

#top-content #name-container #email {
    font-size: 20px;
    color: #999999;
    text-align: center;
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
    margin: 10px 4%;
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