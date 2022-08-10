<template>

    <v-container class="pl-5 pt-10 pr-5 pb-10">
        <div>
            <h3 class="goodMorningHeader">
                {{greeting}}, Dr. {{ $store.state.user_name.split(' ')[0] }}
            </h3>


            <div class="row mt-7">
                <div class="col-12 col-md-8">
                    <v-card>
                        <v-card-text>
                            <div class="row datepicker-row">
                                <div>
                                    <datepicker :disabled-dates="{from: new Date()}" v-model="selectedDate" :inline="true" class="datepicker" />
                                </div>

                                <div v-if="!loaded" class="loadingBar">
                                    <v-progress-circular indeterminate color="primary" v-if="!errorLabel">
                                    </v-progress-circular>
                                    <label class="errorLabel">
                                        {{ errorLabel }}
                                    </label>
                                </div>

                                <div v-else class="mt-5 ml-5 mr-5 pr-2">
                                    <div class="row">
                                        <div class="col-6">
                                            <v-card class="stats-card blue lighten-2 white--text">
                                                <v-card-title class="justify-center">
                                                    New Patients
                                                </v-card-title>
                                                <v-card-text class="justify-center">
                                                    <div class="font-weight-bold">
                                                        {{ selectedDayInfo.newPatients || 0 }}
                                                    </div>
                                                </v-card-text>
                                            </v-card>
                                        </div>
                                        <div class="col-6">
                                            <v-card class="stats-card lighten-3 white--text purple">
                                                <v-card-title class="justify-center">
                                                    Old Patients
                                                </v-card-title>
                                                <v-card-text class="justify-center">
                                                    <div class="font-weight-bold">
                                                        {{ selectedDayInfo.oldPatients || 0 }}
                                                    </div>
                                                </v-card-text>
                                            </v-card>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <v-card class="stats-card white--text green accent-2">
                                                <v-card-title class="justify-center">
                                                    Revenue
                                                </v-card-title>
                                                <v-card-text class="justify-center">
                                                    <div class="font-weight-bold">
                                                        {{ Math.round(selectedDayInfo.totalRevenue) || 0 }} EGP
                                                    </div>
                                                </v-card-text>
                                            </v-card>
                                        </div>
                                        <div class="col-6">
                                            <v-card class="stats-card  lighten-3 white--text pink">
                                                <v-card-title class="justify-center">
                                                    RPP
                                                </v-card-title>
                                                <v-card-text class="justify-center">
                                                    <div class="font-weight-bold">
                                                        {{ Math.round(selectedDayInfo.revenuePerPatient) || 0 }} EGP
                                                    </div>
                                                </v-card-text>
                                            </v-card>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>


                    <v-card class="mt-8">
                        <v-card-title class="ml-2">
                            Appointments Per Day
                        </v-card-title>

                        <v-card-text class="p-0">
                            <div v-if="!loaded" class="loadingBar">
                                <v-progress-circular indeterminate color="primary" v-if="!errorLabel">
                                </v-progress-circular>
                                <label class="errorLabel">
                                    {{ errorLabel }}
                                </label>
                            </div>

                            <div v-else>
                                <VueApexCharts v-if="series[0].data && series[0].data.length" type="line"
                                    :options="options" :series="series" />
                                <div v-else class="text-center">
                                    <label>
                                        No Data Found
                                    </label>
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>


                    <v-card class="mt-8">
                        <v-card-title class="ml-2">
                            Latest Patients
                        </v-card-title>

                        <v-card-text class="p-0">
                            <div>
                                <AppointmentsDatatable :latestAppointments="true" class="latestAppointments" />
                            </div>
                        </v-card-text>
                    </v-card>

                    <v-card class="mt-8">
                        <v-card-title class="ml-2">
                            Latest Messages
                        </v-card-title>

                        <v-card-text class="text-center heading font-weight-bold text-black pb-10 mt-10">
                            Comming Soon...
                        </v-card-text>
                    </v-card>


                </div>


                <div class="col-12 col-md-4">
                    <v-card color="primary">
                        <v-card-text class="body-2 white--text font-weight-bold" style="display:flex">
                            <v-icon color="#fff" class="mb-10 mr-2">
                                mdi-information
                            </v-icon>
                            <div class="mt-2">
                                MediCloud gives you the ability to see useful statistics
                                about your clinic and patient that can be used to help you
                                make better decisions.
                            </div>
                        </v-card-text>
                    </v-card>

                    <v-container class="p-0">

                        <div>
                            <div class="p-0 mt-10">
                                <v-card class="pieCard">
                                    <v-card-title class="justify-center">
                                        Prescriped Drugs
                                    </v-card-title>
                                    <v-card-text class="justify-center">
                                        <div v-if="!loaded" class="loadingBar">
                                            <v-progress-circular indeterminate color="primary" v-if="!errorLabel">
                                            </v-progress-circular>
                                            <label class="errorLabel">
                                                {{ errorLabel }}
                                            </label>
                                        </div>
                                        <VueApexCharts v-else-if="drugsPieSeries && drugsPieSeries.length" type="pie" :options="drugsPieOptions" :series="drugsPieSeries" />
                                        <div v-else class="text-center pt-10 pb-10">
                                            <label>
                                                No Data Found
                                            </label>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="p-0 mt-10">
                                <v-card class="pieCard">
                                    <v-card-title class="justify-center">
                                        Diagnosed Diseases
                                    </v-card-title>
                                    <v-card-text class="justify-center">
                                        <div v-if="!loaded" class="loadingBar">
                                            <v-progress-circular indeterminate color="primary" v-if="!errorLabel">
                                            </v-progress-circular>
                                            <label class="errorLabel pt-10 pb-10">
                                                {{ errorLabel }}
                                            </label>
                                        </div>

                                        <VueApexCharts v-else-if="diseasesPieSeries && diseasesPieSeries.length" type="pie" :options="diseasesPieOptions"
                                            :series="diseasesPieSeries" />

                                        <div v-else class="text-center pt-10 pb-10">
                                            <label>
                                                No Data Found
                                            </label>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </div>
                        </div>
                        <div class="p-0 mt-10">
                            <v-card class="pieCard">
                                <v-card-title class="justify-center">
                                    Patients' Age
                                </v-card-title>
                                <v-card-text class="justify-center">
                                    <div v-if="!loaded" class="loadingBar">
                                        <v-progress-circular indeterminate color="primary" v-if="!errorLabel">
                                        </v-progress-circular>
                                        <label class="errorLabel">
                                            {{ errorLabel }}
                                        </label>
                                    </div>
                                    <VueApexCharts v-else-if="agePieSeries && agePieSeries.length && ageFound" type="pie" :options="agePieOptions" :series="agePieSeries" />
                                    <div v-else class="text-center pt-10 pb-10">
                                        <label>
                                            No Data Found
                                        </label>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </div>
                        <div class="p-0 mt-10">
                            <v-card class="pieCard">
                                <v-card-title class="justify-center">
                                    Patients' Gender
                                </v-card-title>
                                <v-card-text class="justify-center">

                                    <div v-if="!loaded" class="loadingBar">
                                        <v-progress-circular indeterminate color="primary" v-if="!errorLabel">
                                        </v-progress-circular>
                                        <label class="errorLabel">
                                            {{ errorLabel }}
                                        </label>
                                    </div>

                                    <VueApexCharts v-else-if="genderPieSeries && genderPieSeries.length" type="pie" :options="genderPieOptions" :series="genderPieSeries" />
                                    <div v-else class="text-center pt-10 pb-10">
                                        <label>
                                            No Data Found
                                        </label>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </div>

                    </v-container>
                </div>
            </div>
        </div>

    </v-container>
</template>

<script>
import axios from 'axios';
import Datepicker from 'vuejs-datepicker';
import VueApexCharts from 'vue-apexcharts'
import AppointmentsDatatable from "../components/Appointments/AppointmentsDatatable"

const greetingTime = require("greeting-time");

export default {
    components: {
        Datepicker, VueApexCharts, AppointmentsDatatable
    },
    data() {
        return {
            greeting: greetingTime(new Date()),
            errorLabel: '',
            ageFound: false,
            loaded: false,
            selectedDate: new Date(),
            visitsByDays: [],
            options: {
                stroke: {
                    show: true,
                    curve: 'smooth'
                },
                chart: {
                },
                xaxis: {
                    type: 'datetime',
                },
                yaxis: {
                    min: 0,
                    title: {
                        text: 'Appointments'
                    }
                },
                tooltip: {
                    x: {
                        format: 'dd MMM yyyy'
                    }
                },

            },
            series: [{
                name: 'Appointments',
                data: []
            }],

            drugsPieSeries: [],
            diseasesPieSeries: [],
            agePieSeries: [0, 0, 0, 0, 0, 0],
            genderPieSeries: [],
            drugsPieOptions: {
                legend: {
                    position: 'bottom'
                },
                labels: [],
            },
            diseasesPieOptions: {
                legend: {
                    position: 'bottom'
                },
                labels: [],
            },
            agePieOptions: {
                legend: {
                    position: 'bottom'
                },
                labels: ['0-9', '9-18', '18-30', '30-45', '45-60', '60+'],
            },
            genderPieOptions: {
                legend: {
                    position: 'bottom'
                },
                labels: [],

            },
        }
    },
    methods: {
        loadStatistics() {
            axios.get('https://api.medicloud.care/api/dashboard').then(({ data }) => {
                this.loaded = true;

                this.visitsByDays = data.visitsByDays;

                for (let i = 0; i < this.visitsByDays.length; i++) {
                    this.series[0].data.push({
                        x: new Date(this.visitsByDays[i].day).getTime(),
                        y: this.visitsByDays[i].numberOfAppointments
                    });
                }

                for (let i = 0; i < data.drugs.length; i++) {
                    this.drugsPieSeries.push(
                        data.drugs[i].total
                    );
                    this.drugsPieOptions.labels.push(data.drugs[i]._id);
                }

                for (let i = 0; i < data.diagnoses.length; i++) {
                    this.diseasesPieSeries.push(
                        data.diagnoses[i].count
                    );
                    this.diseasesPieOptions.labels.push(
                        data.diagnoses[i]._id
                    );
                }

                const ageSeries = [0, 0, 0, 0, 0, 0];
                for (let i = 0; i < data.patientsAgeDistribution.length; i++) {
                    for (let j = 0; j < this.agePieOptions.labels.length; j++) {
                        if (data.patientsAgeDistribution[i]._id == this.agePieOptions.labels[j].split('-')[0]) {
                            ageSeries[j] = data.patientsAgeDistribution[i].count;

                            if(ageSeries[j] > 0)
                                this.ageFound = true;
                        }
                    }
                }
                this.agePieSeries = ageSeries;

                for (let i = 0; i < data.patientsGenderDistribution.length; i++) {
                    this.genderPieSeries.push(
                        data.patientsGenderDistribution[i].count
                    );
                    this.genderPieOptions.labels.push(
                        data.patientsGenderDistribution[i]._id
                    );
                }

                this.genderPieOptions.colors = [
                    function ({ seriesIndex }) {
                        if (this.genderPieSeries[seriesIndex] === 'Female') {
                            return '#ff00aa';
                        }
                        return '#00aaff';
                    }
                ]

                // todo : add loading and error
            }).catch(error => {
                this.errorLabel = 'Error loading statistics';
                console.log(error) // todo
            })
        }
    },
    computed: {
        selectedDayInfo: function () {
            for (let i = 0; i < this.visitsByDays.length; i++) {
                const day = new Date(this.visitsByDays[i].day)
                if (day.getDate() == this.selectedDate.getDate() && day.getMonth() == this.selectedDate.getMonth() && day.getFullYear() == this.selectedDate.getFullYear()) {
                    return this.visitsByDays[i]
                }
            }

            return {}
        }
    },
    mounted() {
        this.loadStatistics()
    }
}
</script>

<style lang="scss" scoped>
.loadingBar {
    text-align: center;
    margin: auto 100px;
    padding: 100px 0 !important;
}

.errorLabel {
    color: red;
}

.goodMorningHeader {
    font-size: 1.7rem;
    font-weight: bold;
    color: rgb(73, 73, 73);
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}


.datepicker-row {
    overflow-y: hidden;
    overflow-x: scroll;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;

    div {
        flex-basis: auto;
    }
}

.datepicker {
    ::v-deep .vdp-datepicker__calendar {
        border: none;
    }

    ::v-deep .vdp-datepicker__calendar .cell.selected {
        background-color: #26b3ff;
        color: #fff;
    }

    ::v-deep .vdp-datepicker__calendar .cell {
        border-radius: 15px;
    }
}

.stats-card {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09) !important;
    width: 140px;
    height: 100px;

    .v-card__title {
        padding: 16px 0px !important;
    }

    .v-card__title,
    .v-card__text {
        font-size: medium !important;
        font-weight: bold !important;
        word-break: normal;
        color: #fff;
        text-align: center !important;
    }

    .v-card__text {
        font-size: larger !important;
        position: absolute;
        top: 50%;

    }
}


.latestAppointments {
    ::v-deep .v-card {
        box-shadow: none !important;
    }
}
</style>

<style>
.apexcharts-toolbar {
    z-index: 0 !important;
}
</style>