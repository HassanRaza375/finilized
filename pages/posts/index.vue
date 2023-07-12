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
    <v-card dense class="mb-3">
      <v-card-text>
        <v-row dense>
          <v-col cols="12">
            <v-text-field
              v-model="Item.val"
              label="Search"
              outlined
              dense
              hide-details="auto"
              append-icon="mdi-magnify"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <PostsList />
    <PostsAddNewPosts v-if="CreatNew" @close="CreatNew = !CreatNew" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      Item: {},
      CreatNew: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
