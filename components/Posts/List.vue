<template>
  <v-row dense>
    <v-col cols="4" v-for="item in getposts" :key="item.Id">
      <v-card hover>
        <v-card-title primary-title>
          <div>{{ item.Title }}</div>
          <h5>{{ item.Type }}</h5>
        </v-card-title>
        <v-card-text>
          <h4>
            {{ item.Content }}
          </h4>
          <h6 align="right">~{{ item.writtenBy }}</h6>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            v-if="admin"
            depressed
            small
            color="warning"
            @click="$emit('editdata', item)"
            >Edit</v-btn
          >

          <v-btn depressed small color="error">Delete</v-btn>
          <v-btn :to="'/posts/1'" small depressed color="info">Open</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    admin: { type: Boolean, default: false },
  },
  computed: {
    getposts() {
      return this.$store.getters.LoadedPosts;
    },
  },
};
</script>

<style lang="scss" scoped></style>
