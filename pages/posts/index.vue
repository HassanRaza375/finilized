<template>
  <div>
    <v-card class="mb-2">
      <v-card-actions>
        <span>Public Section Post View</span>
        <v-spacer></v-spacer>
        <v-btn depressed color="success" @click="CreatNew = !CreatNew"
          >Create New Post</v-btn
        >
      </v-card-actions>
    </v-card>
    <PostsList />
    <PostsAddNewPosts v-if="CreatNew" @close="CreatNew = !CreatNew" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      CreatNew: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
