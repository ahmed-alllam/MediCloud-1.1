<template>
  <v-container>
    <BillingDatatable />

    <v-container>

      <v-card flat class="mt-8">
        <v-card-title>
          Revenue Over Time
        </v-card-title>

        <v-card-text class="p-0">
          <div>
            <VueApexCharts type="line" :options="options" :series="series" />
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import BillingDatatable from "../components/Billing/BillingDatatable"
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    BillingDatatable, VueApexCharts
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
      this.$http.get('https://medicloudeg.herokuapp.com/api/billing/stats').then(response => {
        this.visitsByDays = data.visitsByDays;

        for (let i = 0; i < this.visitsByDays.length; i++) {
          this.series[0].data.push({
            x: new Date(this.visitsByDays[i].day).getTime(),
            y: this.visitsByDays[i].numberOfAppointments
          });
        }
      })
    }
  },
  created() {
    this.getRevenue()
  }
}
</script>

<style>
</style>