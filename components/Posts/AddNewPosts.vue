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
              v-model="Item.writtenBy"
              label="Type"
              outlined
              dense
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="Item.Content"
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
        <v-btn depressed color="warning">Save</v-btn>
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
};
</script>

<style lang="scss" scoped></style>
