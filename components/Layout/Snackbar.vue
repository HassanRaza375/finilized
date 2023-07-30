<template>
  <div>
    <v-snackbar
      v-for="(item, i) in snackbars"
      v-model="item.Showing"
      :color="item.color || 'success'"
      right
      :timeout="-1"
      :key="i + Math.random()"
      :style="`bottom:${i * 55}px`"
    >
      {{ item.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          variant="text"
          icon
          v-bind="attrs"
          @click="$store.commit('snackbar/HidePayload', i)"
        >
          <v-icon>mdi-close-circle-outline</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("snackbar", ["snackbars"]),
  },
};
</script>
<style scoped></style>
