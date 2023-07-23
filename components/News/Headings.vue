<template>
  <v-col cols="12">
    <v-card tile class="pa-2">
      <v-text-field
        v-model="Search"
        label="search"
        outlined
        hide-details="auto"
        dense
        @change="$emit('search', Search)"
      ></v-text-field>
      <v-chip
        v-for="data in Headings"
        :key="data"
        class="ml-2 mt-4"
        @click="$emit('search', data)"
        >{{ data }}</v-chip
      >
    </v-card>
  </v-col>
</template>
<script>
export default {
  name: "Headings",
  data() {
    return {
      Search: "",
      Headings: ["tech", "sports", "bitcoin", "cars", "pakistan"],
    };
  },
};
</script>
