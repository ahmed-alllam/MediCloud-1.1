<template>

    <v-container class="pl-5 pt-10 pr-5 pb-10">
        <div>
            <h3 class="goodMorningHeader">
                Good Morning, Dr. {{ $store.state.user_name.split(' ')[0] }}
            </h3>


            <div class="row mt-7">
                <div class="col-12 col-md-8">
                    <v-card>
                        <v-card-text>
                            <div class="row datepicker-row">
                                <div>
                                    <datepicker :inline="true" class="datepicker" />
                                </div>

                                <div class="mt-5 ml-5 mr-5 pr-2">
                                    <div class="row">
                                        <div class="col-6">
                                            <v-card class="stats-card blue lighten-2 white--text">
                                                <v-card-title class="justify-center">
                                                    New Patients
                                                </v-card-title>
                                                <v-card-text class="justify-center">
                                                    <div class="font-weight-bold">
                                                        120
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
                                                        106
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
                                                        1,000 EGP
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
                                                        100 EGP
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
                            <div>
                                <VueApexCharts type="line" :options="options" :series="series" />
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
                                        <VueApexCharts type="pie" :options="drugsPieOptions" :series="drugsPieSeries" />
                                    </v-card-text>
                                </v-card>
                            </div>
                            <div class="p-0 mt-10">
                                <v-card class="pieCard">
                                    <v-card-title class="justify-center">
                                        Diagnosed Diseases
                                    </v-card-title>
                                    <v-card-text class="justify-center">
                                        <VueApexCharts type="pie" :options="diseasesPieOptions"
                                            :series="diseasesPieSeries" />
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
                                    <VueApexCharts type="pie" :options="agePieOptions" :series="agePieSeries" />
                                </v-card-text>
                            </v-card>
                        </div>
                        <div class="p-0 mt-10">
                            <v-card class="pieCard">
                                <v-card-title class="justify-center">
                                    Patients' Gender
                                </v-card-title>
                                <v-card-text class="justify-center">
                                    <VueApexCharts type="pie" :options="genderPieOptions" :series="genderPieSeries" />
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
import Datepicker from 'vuejs-datepicker';
import VueApexCharts from 'vue-apexcharts'
import AppointmentsDatatable from "../components/Appointments/AppointmentsDatatable"


export default {
    components: {
        Datepicker, VueApexCharts, AppointmentsDatatable
    },
    data() {
        return {
            options: {
                stroke: {
                    show: true,
                    curve: 'smooth'
                },
                fill: {
                    type: 'gradient',
                },
                chart: {
                    id: 'patients-flow-linechart',
                    toolbar: {
                        show: false
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                }
            },
            series: [{
                name: 'Appointments',
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }],

            drugsPieSeries: [44, 55, 13, 34, 45, 56, 67, 78],
            diseasesPieSeries: [44, 55, 13, 12, 23, 34],
            agePieSeries: [44, 55, 13, 33],
            genderPieSeries: [44, 55],
            drugsPieOptions: {
                chart: {
                    type: 'pie',
                },
                legend: {
                    position: 'bottom'
                },
                labels: ['Team A', 'Team B', 'Team C'],
            },
            diseasesPieOptions: {
                chart: {
                    type: 'pie',
                },
                legend: {
                    position: 'bottom'
                },
                labels: ['Team A', 'Team B', 'Team C'],
            },
            agePieOptions: {
                chart: {
                    type: 'pie',
                },
                legend: {
                    position: 'bottom'
                },
                labels: ['Team A', 'Team B', 'Team C'],
            },
            genderPieOptions: {
                chart: {
                    type: 'pie',
                },
                legend: {
                    position: 'bottom'
                },
                labels: ['Male', 'Female'],
                colors: ['#00aaff', '#ff00aa'],
                fill: {
                    colors: ['#00aaff', '#ff00aa']
                },
            },
        }
    }
}
</script>

<style lang="scss" scoped>
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