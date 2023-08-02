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
          <v-card flat>
            <v-card-title style="background-color: #e8e8e8">
              <v-avatar>
                <v-img
                  :src="require('~/assets/images/3.jpg')"
                  alt="John"
                  size="78"
                ></v-img>
              </v-avatar>
            </v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  <v-text-field
                    v-model="Item.Email"
                    label="Email *"
                    dense
                    outlined
                    hide-details="auto"
                    :rule="[(v) => !!v || 'its required']"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="Item.Password"
                    label="Password *"
                    dense
                    outlined
                    hide-details="auto"
                    :type="IsPassword ? 'password' : 'text'"
                    :append-icon="IsPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    @click:append="IsPassword = !IsPassword"
                    :rule="[(v) => !!v || 'its required']"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions class="px-4">
              <v-spacer></v-spacer>
              <v-btn depressed small color="primary" @click="Login"
                >Login</v-btn
              >
              <v-btn depressed small color="info" @click="SignUp">SignUp</v-btn>
              <v-spacer></v-spacer>
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
    Login() {
      const data = {
        Email: this.Item.Email,
        Password: this.Item.Password,
      };
      const res = this.$axios.$post("User/SignUp", data);
      debugger;
      console.log(res);
    },
    async SignUp() {
      try {
        const data = {
          Email: this.Item.Email,
          Password: this.Item.Password,
        };
        const res = await this.$axios.$post("User/SignUp", data);
        debugger;
        this.$store.dispatch("snackbar/CallSnackbar", {
          type: "snackbars",
          text: res.Message,
          color: "success",
          Showing: true,
        });
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
