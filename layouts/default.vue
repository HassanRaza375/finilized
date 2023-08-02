<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      dark
      app
    >
      <div class="pa-2 text-center">
        <img width="90%" src="~/assets/images/g.jpg" alt="logo" />
      </div>
      <LayoutLeftNavigation />
    </v-navigation-drawer>
    <LayoutTopNavbar @close="drawer = !drawer" />
    <v-main class="bg">
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <LayoutSnackbar />
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      drawer: false,
      fixed: false,
      clipped: false,
      miniVariant: true,
      right: true,
      rightDrawer: false,
    };
  },

  mounted() {},
};
</script>
<style scoped>
/* .theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #fff;
} */
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background: linear-gradient(135deg, #066af3, #00ccff00) !important;
}
.bg {
  background-image: url("~/assets/images/img.jpg");
  background-size: cover;
  background-attachment: fixed;
}
</style>
