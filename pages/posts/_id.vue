<template>
  <div>
    <v-card class="height-ts">
      <v-img height="100%" :src="require(`~/assets/images/4.jpg`)">
        <v-row dense class="justify-center">
          <v-col cols="6">
            <v-card dense class="mt-10">
              <v-img height="250" :src="require(`~/assets/images/3.jpg`)">
                <v-card-title class="white--text">Post Name</v-card-title>
              </v-img>
              <v-card-text>
                <h4>Content</h4>
                <p class="pa-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                  natus atque delectus neque aliquam, temporibus asperiores
                  voluptatem repudiandae. Deserunt ex recusandae sit non! Dicta
                  a deleniti minus corporis ipsa facilis?
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
                  <span><b>Written By :</b> Hassan</span>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.height-ts {
  height: 88vh;
}
</style>
