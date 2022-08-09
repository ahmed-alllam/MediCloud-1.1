<template>
  <v-container>
    <div class="ml-2 mr-2">
      <BillingDatatable />
    </div>


    <v-container>

      <v-card class="mt-8 mr-2 ml-2 mb-10">
        <v-card-title>
          Revenue Over Time
        </v-card-title>

        <v-card-text>
          <div v-if="!loaded" class="loadingBar">
            <v-progress-circular indeterminate color="primary" v-if="!errorLabel">
            </v-progress-circular>
            <label class="errorLabel">
              {{ errorLabel }}
            </label>
          </div>
          <div v-else>

            <VueApexCharts v-if="series[0].data && series[0].data.length" type="line" :options="options"
              :series="series" />
            <div v-else class="text-center">
              <label>
                No Data Found
              </label>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import BillingDatatable from "../components/Billing/BillingDatatable"
import VueApexCharts from 'vue-apexcharts'
import axios from 'axios'

export default {
  components: {
    BillingDatatable, VueApexCharts
  },
  data() {
    return {
      loaded: false,
      errorLabel: '',
      visitsByDays: [],
      options: {
        stroke: {
          show: true,
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          min: 0,
          title: {
            text: "Revenue (EGP)"
          }
        },
        tooltip: {
          x: {
            format: 'dd MMM yyyy'
          },
          y: {
            title: {
              formatter: () => {
                return 'Revenue : EGP'
              }
            }
          }
        }
      },
      series: [{
        name: 'Revenue',
        data: []
      }]
    }
  },
  methods: {
    getRevenue() {
      axios.get('https://medicloudeg.herokuapp.com/api/billing/stats').then(res => {
        this.loaded = true;
        this.visitsByDays = res.data;

        for (let i = 0; i < this.visitsByDays.length; i++) {
          this.series[0].data.push({
            x: new Date(this.visitsByDays[i].day).getTime(),
            y: this.visitsByDays[i].total
          });
        }
      }).catch(() => {
         this.errorLabel = 'Error Loading Data';
      })
    }
  },
  mounted() {
    this.getRevenue()
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

</style>