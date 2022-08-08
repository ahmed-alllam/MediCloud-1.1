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
        chart: {
          toolbar: {
            show: false
          },
        },
        yaxis: {
          title: {
            text: "Revenue (EGP)"
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        tooltip: {
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
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  }
}
</script>

<style>
</style>