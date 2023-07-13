<template>
  <v-dialog
    v-model="valid"
    persistent
    max-width="600px"
    transition="dialog-transition"
  >
    <v-card dense>
      <v-card-title>{{ item.ID ? "Edit Todo" : "New Todo" }} </v-card-title>
      <v-card-text>
        <v-row dense>
          <v-col cols="6"
            ><v-text-field
              v-model="Item.Name"
              label="Name"
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
            ></v-text-field
          ></v-col>
          <v-col cols="6">
            <v-text-field
              v-model="Item.Priority"
              label="Priority"
              outlined
              dense
              hide-details="auto"
            ></v-text-field
          ></v-col>
          <v-col cols="6">
            <v-switch
              v-model="Item.Active"
              class="mt-1"
              :label="Item.Active ? 'Active' : 'Not Active'"
              inset
            ></v-switch>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn x-small depressed color="success" @click="save">save</v-btn>
        <v-btn x-small depressed color="success" @click="close">Close</v-btn>
        <v-btn x-small depressed color="success" @click="clear">Clear</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      valid: true,
      Item: {},
    };
  },
  mounted() {
    console.log(this.item);
    this.Item = this.item;
  },
  methods: {
    save() {
      const data = this.Item;
      this.Item = {};
      this.$emit(this.item.ID ? "saveedit" : "getval", data);
    },
    clear() {
      this.Item = {};
    },
    close() {
      this.Item = {};
      this.$emit("close");
    },
  },
};
</script>
<style scoped></style>
