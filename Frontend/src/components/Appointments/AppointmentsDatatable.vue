<template>
    <v-container>
        <v-card flat>
            <v-card-title v-if="!latestAppointments">
                <h3 class="mr-6">
                    Appointments List
                </h3>

                <v-spacer></v-spacer>
                <v-text-field v-model="patientSearch" append-icon="mdi-magnify" label="Search for a patient" single-line
                    class="mr-6">
                </v-text-field>
                <v-btn text router to="/appointments/new" class="add-appointment-button mr-4">Add Appointment</v-btn>
                <v-btn text @click="loading = true; getVisits()" class="refresh-button mt-4 mb-4">
                    <v-icon left>mdi-refresh</v-icon>
                    Refresh
                </v-btn>
            </v-card-title>
            <v-data-table v-if="!loading" :headers="appointmentHeaders" :items="visits" :search="patientSearch"
                :sort-by="['created']" :sort-desc="true" :items-per-page="latestAppointments ? 5 : 10" :hide-default-footer="latestAppointments">

                <template v-slot:item="props">
                    <tr>
                        <td class="truncate">{{ props.item.patientName }}</td>
                        <td class="truncate">{{ props.item.patientComplaint }}</td>
                        <td class="truncate">{{ props.item.patientDiagnosis }}</td>
                        <td>{{ props.item.created | formatDate }}</td>
                        <td>
                            <v-btn text small class="mt-2 mb-2 mr-2 item-button" @click="getAppointment(props.item)">
                                <v-icon center>mdi-pencil
                                </v-icon>
                            </v-btn>
                            <v-btn text small class="mt-2 mb-2 item-button" @click="deleteVisit(props.item._id)">
                                <v-icon center>mdi-delete</v-icon>
                            </v-btn>
                        </td>
                    </tr>
                </template>
            </v-data-table>
            <div v-else class="loadingBar">
                <v-progress-circular indeterminate color="primary" v-if="loading"></v-progress-circular>
            </div>
        </v-card>
    </v-container>
</template>

<script>
import axios from "axios"

export default {
    name: "AppointmentsDatatable",
    data: () => ({
        loading: true,
        visits: [],
        patientSearch: "",
        appointmentHeaders: [
            { text: "Patient Name", value: "patientName" },
            { text: "Complaint", value: "patientComplaint" },
            { text: "Diagnosis", value: "patientDiagnosis" },
            { text: "Date", value: "created" },
            { text: "Settings" }
        ]
    }),
    props: {
        latestAppointments: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        async getVisits() {
            axios.get("https://api.medicloud.care/api/visits/")
                .then(res => {
                    this.$toast.success("Loaded"); 
                    this.loading = false;
                    this.visits = res.data;
                })
                .catch(err => {
                    this.$toast.error('Error loading data');
                    this.loading = false;
                    console.log(err)
                })
        },

        async deleteVisit(id) {
            this.visits = this.visits.filter(visit => visit._id !== id);

            axios.delete(`https://api.medicloud.care/api/visits/${id}`).then(res => {
                console.log(res)
            }).catch(err => console.log(err))
        },

        // Get an appointment
        getAppointment(appointment) {
            this.$router.push(`/appointments/edit/${appointment._id}`)
        }
    },
    created() {
        this.getVisits()
    }
}
</script>

<style lang="scss" scoped>

.truncate {
      max-width: 1px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

.loadingBar {
    text-align: center;
    margin: 50px 0;
    padding-bottom: 150px !important;
}

.add-appointment-button {
    color: white !important;
    background-color: #26b3ff;
    border-radius: 25px;
    text-decoration: none;

    &:hover {
        opacity: 0.6;
    }
}

.refresh-button {
    background-color: white !important;
    color: #26b3ff !important;
    border-radius: 25px;
    text-decoration: none;

    &:hover {
        opacity: 0.6;
    }
}

.item-button {
    background-color: transparent !important;
    color: #26b3ff !important;
    border-radius: 25px;
    text-decoration: none;

    &:hover {
        opacity: 0.6;
    }
}


</style>