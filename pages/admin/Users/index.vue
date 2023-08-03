<template>
  <v-row dense>
    <v-col cols="12">
      <v-card>
        <v-card-title>
          <div>
            <h3 class="headline mb-0">User Created ({{ Count }})</h3>
          </div>
        </v-card-title>
      </v-card>
    </v-col>
    <v-col cols="4" v-for="(user, i) in Users" :key="i">
      <v-card hover>
        <v-card-title>
          <h5>Account Holder: {{ user.Email }}</h5>
          <v-spacer></v-spacer>
          <v-btn depressed icon color="error" @click="deleteUser(user._id)"
            ><v-icon>mdi-trash-can</v-icon></v-btn
          >
        </v-card-title>
        <v-card-text>
          <h5>ID: {{ user._id }}</h5>
          <h5>User Email : {{ user.Email }}</h5>
          <h5>User Password : {{ user.Password }}</h5>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      Users: [],
      Count: 0,
    };
  },
  mounted() {
    this.GetUsers();
  },
  methods: {
    async GetUsers() {
      try {
        const res = await this.$axios.$get("/User");
        this.Users = res.Response.Peoples;
        this.Count = res.Response.count;
        console.log(res);
      } catch (err) {
        this.$store.dispatch("snackbar/CallSnackbar", {
          type: "snackbars",
          text: err || "error",
          color: "error",
          Showing: true,
        });
      }
    },
    async deleteUser(id) {
      try {
        debugger;
        const res = await this.$axios.$delete(`/User/${id}`);
        console.log(res);
        if (res) {
          this.GetUsers();
        }
      } catch (err) {
        debugger;
        this.$store.dispatch("snackbar/CallSnackbar", {
          type: "snackbars",
          text: err || "error",
          color: "error",
          Showing: true,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>