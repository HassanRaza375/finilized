<template>
  <v-app-bar class="cd" :clipped-left="clipped" fixed app>
    <v-app-bar-nav-icon @click.stop="$emit('close')" />
    <v-toolbar-title>
      <v-badge
        v-if="Counter > 0"
        class="mt-3"
        :content="Counter"
        color="green"
        overlap
      >
        <v-btn icon to="/" small
          ><v-icon small>mdi-bell-ring</v-icon></v-btn
        > </v-badge
      ><span class="ml-2">{{ title }}</span></v-toolbar-title
    >
    <v-spacer />
  </v-app-bar>
</template>
<script>
export default {
  name: "TopNavbar",
  data() {
    return {
      clipped: false,
      title: "Finilized",
    };
  },
  computed: {
    Counter() {
      return this.$store.getters.LoadedCounter;
    },
  },
};
</script>
<style scoped>
</style>