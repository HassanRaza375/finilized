<template>
  <v-row dense class="justify-center">
    <v-col cols="6">
      <v-card tile>
        <v-card-title>
          <v-icon color="warning">mdi-weather-cloudy-clock</v-icon>
          Weather App <v-spacer></v-spacer>
          <v-text-field
            v-model="Item.Search"
            label="Search"
            dense
            hide-details="auto"
            append-icon="mdi-magnify-expand"
            @keyup.enter="getDataFromApi"
          ></v-text-field>
        </v-card-title>
        <v-card-text>
          <v-col cols="12">
            <table style="width: 100%">
              <tr>
                <td align="center">
                  <span align="center"
                    ><v-icon size="100" color="info"
                      >mdi-weather-rainy</v-icon
                    ></span
                  >
                </td>
                <td align="right">
                  <span class="display-3" align="center"
                    >{{ ((Item.main?.temp || 0) - 273.15).toFixed(2) }}&deg;
                    C</span
                  >
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Country: {{ Item.Country || "Pakistan" }}</strong>
                  <br />
                  <strong>City: {{ Item.name }}</strong>
                </td>
                <td>
                  {{ Item.weather[0]?.description }}
                  <v-icon>mdi-weather-windy</v-icon>
                  <span>{{ Item.wind?.speed }}</span>
                </td>
                <td>Rain Chances <v-icon>mdi-cloud-percent</v-icon></td>
              </tr>
            </table>
          </v-col>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      Item: { Search: "lahore" },
    };
  },
  mounted() {
    this.getDataFromApi();
  },
  methods: {
    async getDataFromApi() {
      const res = await this.$axios.$get(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.Item.Search},pak&appid=010f46f9c3cbd75a30e8753c15215533`
      );
      console.log(res);
      this.Item = res;
    },
  },
};
</script>
<style scoped></style>
