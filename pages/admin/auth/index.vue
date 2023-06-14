<template>
  <v-container>
    <div class="mt-6">
      <h2 class="white--text font-weight-regular">Finilized App</h2>
      <small class="grey--text">
        <v-icon color="grey">mdi-copyright</v-icon>
        Copyright
        <a style="color: #bdbbbb" href="https://www.teamsuite.app">Finilized</a>
        {{ CurrentYear }} - All Rights Reserved
      </small>
    </div>
    <v-row class="justify-center align-center" dense>
      <v-col xl="3" lg="4" md="4" sm="6" cols="8">
        <v-form @submit.prevent="userLogin">
          <div class="text-center my-3">
            <v-avatar>
              <v-img
                src="~/assets/images/3.jpg"
                alt="John"
                size="78"
              ></v-img>
            </v-avatar>
          </div>
          <v-card flat>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  <v-text-field
                    v-model="Item.UserName"
                    label="User Name *"
                    dense
                    outlined
                    hide-details="auto"
                    :rule="[(v) => !!v || 'its required']"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="Item.password"
                    label="Password *"
                    dense
                    outlined
                    hide-details="auto"
                    :type="IsPassword ? 'password' : 'text'"
                    :append-icon="IsPassword ? 'mdi-eye' : 'mdi-eye-check'"
                    @click:append="IsPassword = !IsPassword"
                    :rule="[(v) => !!v || 'its required']"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions class="px-4">
              <v-btn color="primary">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  layout: "empty",
  data() {
    return {
      IsPassword: true,
      Item: {},
      CurrentYear: new Date().getUTCFullYear(),
    };
  },
  methods: {
    userLogin() {
      console.log(this.Item);
    },
  },
};
</script>

<style lang="scss" scoped></style>
