<template>
  <div>
    <v-card class="height-ts">
      <v-img height="100%" :src="require(`~/assets/images/4.jpg`)">
        <v-row dense class="justify-center">
          <v-col cols="6">
            <v-card dense class="mt-10">
              <v-img
                height="250"
                :src="
                  Item.image ? Item.image : require(`~/assets/images/3.jpg`)
                "
              >
                <v-card-title class="white--text">{{
                  Item.Title
                }}</v-card-title>
              </v-img>
              <v-card-text>
                <h4>{{ Item.Type }}</h4>
                <p class="pa-2">
                  {{ Item.Description }}
                </p>
                <v-card-actions>
                  <v-tooltip right color="error">
                    <template v-slot:activator="{ attrs, on }">
                      <v-btn color="error" v-bind="attrs" icon v-on="on"
                        ><v-icon>mdi-heart-outline</v-icon></v-btn
                      >
                    </template>
                    <span>Favorite</span>
                  </v-tooltip>
                  <v-spacer></v-spacer>
                  <h5>Written By : {{ Item.Author }}</h5>
                  <br />
                  <h6>Date: {{ Item.Date }}</h6>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
    <v-snackbar v-model="snackbar" right color="success">
      {{ Item.Error }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          variant="text"
          icon
          v-bind="attrs"
          @click="snackbar = false"
        >
          <v-icon>mdi-close-circle-outline</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Item: {},
      snackbar: false,
    };
  },
  mounted() {
    this.Item.ID = this.$route.params.id;
    console.log(this.$route.params);
    this.GetSinglePost();
  },
  methods: {
    async GetSinglePost() {
      try {
        const res = await this.$axios.$get("Post/" + this.Item.ID);
        console.log(res);
        this.Item = res;
      } catch (err) {
        this.Item.Error = err;
        this.snackbar = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.height-ts {
  height: 88vh;
}
</style>
