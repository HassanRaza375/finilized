<template>
  <v-dialog
    v-model="valid"
    persistent
    max-width="600px"
    transition="dialog-transition"
  >
    <v-card dense>
      <v-card-title> New Todo </v-card-title>
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
        <v-btn x-small depressed color="success" @click="$emit('getval', Item)"
          >save</v-btn
        >
        <v-btn x-small depressed color="success" @click="$emit('close')"
          >Close</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      valid: true,
      Item: {},
    };
  },
};
</script>
<style scoped></style>
