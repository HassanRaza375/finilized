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
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          ><v-tooltip color="dark" right>
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-action v-bind="attrs" v-on="on">
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
            </template>
            <span>{{ item.title }}</span>
          </v-tooltip>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
      <!-- <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <!-- <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-book-cog-outline",
          title: "Type of Posts",
          to: "/",
        },
        {
          icon: "mdi-apps",
          title: "Inspire",
          to: "/inspire",
        },
        {
          icon: "mdi-account-arrow-left-outline",
          title: "Admin",
          to: "/admin",
        },
        {
          icon: "mdi-book-arrow-down-outline",
          title: "Post",
          to: "/posts",
        },
        {
          icon: "mdi-help-box-multiple-outline",
          title: "About",
          to: "/About",
        },
        {
          icon: "mdi-heart-outline",
          title: "Favourite",
          to: "/favourite",
        },
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: "Finilized",
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
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #fff;
}
</style>
