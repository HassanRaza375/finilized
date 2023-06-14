<template>
  <div>
    <v-card rounded>
      <v-card-title class="pa-0 pr-1">
        <span class="py-4 rounded px-6 white--text" style="background: #c0392b"
          >About Section</span
        >
        <v-spacer></v-spacer>
        <span class="ml-2">
          <h5 class="mb-2" align="center">About me Page Content</h5>
        </span>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="text"
          label="Add New Content"
          dense
          outlined
          hide-details="auto"
          prepend-inner-icon="mdi-plus-box-outline"
          :append-icon="text ? 'mdi-eye' : 'mdi-eye-off'"
          @click:prepend-inner="OpenAddDialog"
        ></v-text-field>
      </v-card-title>
      <v-card-text class="text-center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta
          perferendis perspiciatis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta
          perferendis perspiciatis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta
          perferendis perspiciatis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta
          perferendis perspiciatis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta
          perferendis perspiciatis!
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    OpenAddDialog() {
      console.log(this.text);
    },
  },
};
</script>

<style lang="scss" scoped></style>
