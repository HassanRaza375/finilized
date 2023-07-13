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
      <LayoutLeftNavigation />
    </v-navigation-drawer>
    <LayoutTopNavbar @close="drawer = !drawer" />
    <v-main class="bg">
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
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

  mounted() {
    const obj = [
      {
        Title: "TechEnergy",
        Type: "Tecnology",
        Content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto doloremque tenetur, accusamus animi odio earum?",
        writtenBy: "Ali Akbar",
      },
      {
        Title: "Bio Enegy",
        Type: "Energy",
        Content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur expedita repellat porro quis blanditiis maiores quod odit?",
        writtenBy: "Ali Haider",
      },
      {
        Title: "TechEnergy",
        Type: "Tecnology",
        Content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto doloremque tenetur, accusamus animi odio earum?",
        writtenBy: "Ali Akbar",
      },
      {
        Title: "TechEnergy",
        Type: "Tecnology",
        Content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto doloremque tenetur, accusamus animi odio earum?",
        writtenBy: "Ali Akbar",
      },
    ];
    this.$store.dispatch("setposts", obj);
  },
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
