<template>
  <v-dialog
    v-model="valid"
    persistent
    max-width="500px"
    transition="dialog-transition"
  >
    <v-card dense>
      <v-card-title>{{ item ? "Edit" : "Creating New" }} Post </v-card-title>
      <v-card-text>
        <v-row dense>
          <v-col cols="6">
            <v-text-field
              v-model="Item.Title"
              label="Title"
              outlined
              dense
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="Item.Type"
              label="Type"
              outlined
              dense
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="Item.Author"
              label="Author"
              outlined
              dense
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="Item.image"
              label="Image"
              outlined
              dense
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="Item.Description"
              label="Content"
              rows="1"
              textarea
            ></v-textarea>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn depressed @click="$emit('close')">Cancel</v-btn>
        <v-btn depressed color="warning" @click="SaveItem">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      valid: true,
      Item: {},
    };
  },
  mounted() {
    this.item ? (this.Item = this.item) : {};
  },
  methods: {
    async SaveItem() {
      const Data = {
        Title: this.Item.Title,
        Type: this.Item.Type,
        image: this.Item.image,
        Author: this.Item.Author,
        Description: this.Item.Description,
      };
      const res = await this.$axios.$post("/Post", Data);
      console.log(res);
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped></style>
