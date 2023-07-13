<template>
  <v-list>
    <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact
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
</template>
<script>
export default {
  name: "Layoutleftnav",
  data() {
    return {
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
        {
          icon: "mdi-counter",
          title: "Counter",
          to: "/counter",
        },
        {
          icon: "mdi-cog",
          title: "InfinitScroll",
          to: "/PostsScroll",
        },
        {
          icon: "mdi-list-box-outline",
          title: "Todo list",
          to: "/ToDoList",
        },
        {
          icon: "mdi-cloud",
          title: "Weather App",
          to: "/WeatherApp",
        },
      ],
    };
  },
};
</script>
<style scoped></style>
