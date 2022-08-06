<template>
    <v-container>
        <v-card flat>
            <v-card-title>
                <h3 class="mr-6">
                    Billing List
                </h3>
                <v-spacer></v-spacer>
                <v-text-field label="Search" append-icon="mdi-magnify" v-model="billingSearch" class="mr-10">
                </v-text-field>
                <v-btn text class="refresh-button" @click="loading = true; getBillings()">
                    <v-icon left>mdi-refresh</v-icon>
                    Refresh
                </v-btn>
            </v-card-title>
            <v-card-text>
                <v-data-table v-if="!loading" :items="billings" :headers="billingHeader" :search="billingSearch"
                    :sort-by="['created']" :sort-desc="true">
                    <template v-slot:item="props">
                        <tr>
                            <td>{{ props.item.created | formatDate }}</td>
                            <td>{{ props.item.patientName }}</td>
                            <td>{{ props.item.visitCost }}</td>
                        </tr>
                    </template>
                </v-data-table>

                <div v-else class="loadingBar">
                    <v-progress-circular indeterminate color="primary" v-if="loading"></v-progress-circular>
                </div>

            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import axios from "axios"

export default {
    data: () => ({
        loading: true,
        billingSearch: "",
        billingHeader: [
            { text: "Date", value: "created" },
            { text: "Patient Name", value: "patientName" },
            { text: "Amount (EGP)", value: "visitCost" },
        ],
        billings: []
    }),
    methods: {
        async getBillings() {
            axios.get("https://medicloudeg.herokuapp.com/api/billing/").then(res => {
                this.$toast.success("Loaded");
                this.billings = res.data
                this.loading = false
            })
                .catch(err => {
                    this.$toast.error('Error loading data');
                    console.log(err)
                    this.loading = false
                })
        },
    },
    created() {
        this.getBillings()
    }
}
</script>

<style lang="scss" scoped>
.loadingBar {
    text-align: center;
    margin: 50px 0;
    padding-bottom: 150px !important;
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
</style>