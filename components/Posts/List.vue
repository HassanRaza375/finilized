<template>
  <v-row dense>
    <v-col cols="4" v-for="(item, i) in getposts" :key="item.Id">
      <v-card hover :color="i % 2 === 0 ? '#1F7087' : '#952175'" dark>
        <v-card-title>
          <h5>{{ item.Title }}</h5>
        </v-card-title>
        <v-card-text>
          <h5>
            Type: <v-chip color="info" small>{{ item.Type }}</v-chip>
          </h5>
          <h5>
            {{ item.Description }}
          </h5>
          <h6 align="right">~{{ item.Author }}</h6>
          <h6 align="right">{{ item.Date }}</h6>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            depressed
            small
            color="warning"
            @click="$emit('editdata', item)"
            >Edit</v-btn
          >

          <v-btn
            v-if="Is_Admin"
            depressed
            small
            color="error"
            @click="DeletePost(item._id)"
            >Delete</v-btn
          >
          <v-btn :to="`/posts/${item._id}`" small depressed color="info"
            >Open</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    Is_Admin: { type: Boolean, default: false },
  },
  computed: {
    getposts() {
      return this.$store.getters.LoadedPosts;
    },
  },
  methods: {
    async DeletePost(ID) {
      try {
        const res = await this.$axios.$delete(`/Post/${ID}`);
        this.$store.dispatch("snackbar/CallSnackbar", {
          type: "snackbars",
          text: res.message.acknowledged ? "Deleted" : "Not Deleted",
          color: "error",
          hide: true,
        });
        if (res) {
          const resp = await this.$axios.$get("/Post");
          this.$store.dispatch("setposts", resp.Response.Posts);
        }
      } catch (err) {
        this.$store.dispatch("snackbar/CallSnackbar", {
          type: "snackbars",
          text: err,
          color: "error",
          hide: true,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
