<template>
  <div>
    <v-card class="mb-2">
      <v-card-actions>
        <span>Admin Section Post View</span>
        <v-spacer></v-spacer>
        <v-btn depressed color="success" @click="CreatNew = !CreatNew"
          >Create New Post</v-btn
        >
      </v-card-actions>
    </v-card>
    <PostsList :admin="true" @editdata="EditPosts" />
    <PostsAddNewPosts
      v-if="CreatNew"
      :item="Item"
      @close="CreatNew = !CreatNew"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      CreatNew: false,
      Item: {},
    };
  },
  mounted() {
    this.GetPosts();
  },
  methods: {
    async GetPosts() {
      const res = await this.$axios.$get("/Post");
      this.$store.dispatch("setposts", res.Response.Posts);
    },
    EditPosts(item) {
      this.CreatNew = true;
      this.Item = item;
    },
  },
};
</script>

<style lang="scss" scoped></style>
