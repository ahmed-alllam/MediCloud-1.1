<template>

    <v-container class="pl-10 pt-10 pr-10 pb-10">
        <div>
            <h3 class="goodMorningHeader">
                Good Morning, Dr. {{ $store.state.user_name.split(' ')[0] }}
            </h3>


            <div class="row">
                <div class="col-12 col-md-7">
                    <v-card>
                        <v-card-text>
                            <div class="row datepicker-row">

                                <div>
                                    <datepicker :inline="true" class="datepicker" />
                                </div>

                                <div class="mr-5 ml-5 mt-5">
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
                                                    Returning Patients
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
                                                    Total Revenue
                                                </v-card-title>
                                                <v-card-text class="justify-center">
                                                    <div class="font-weight-bold">
                                                        $1,000
                                                    </div>
                                                </v-card-text>
                                            </v-card>
                                        </div>
                                        <div class="col-6">
                                            <v-card class="stats-card  lighten-3 white--text pink">
                                                <v-card-title class="justify-center">
                                                    Revenue Per Patient
                                                </v-card-title>
                                                <v-card-text class="justify-center">
                                                    <div class="font-weight-bold">
                                                        $100
                                                    </div>
                                                </v-card-text>
                                            </v-card>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                        </v-card-text>
                    </v-card>
                </div>


                <div class="col-12 col-md-4">
                    <v-card>
                        <v-card-title>
                            <span class="headline">
                                <v-icon>mdi-chart-pie</v-icon>
                                <span>Dashboard</span>
                            </span>
                        </v-card-title>
                        <v-card-text>

                        </v-card-text>
                    </v-card>
                </div>
            </div>
        </div>

    </v-container>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
    components: {
        Datepicker
    },
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
    width: 130px;
    height: 100px;

    .v-card__title {
        padding: 16px 6px !important;
    }

    .v-card__title, .v-card__text {
        font-size: smaller !important;
        word-break: normal;
        color: #fff;
        line-height: 15px;
        text-align: center !important;
    }

    .v-card__text {
        font-size: medium !important;
    }
}
</style>