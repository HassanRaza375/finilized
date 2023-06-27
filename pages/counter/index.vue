 <template>
  <v-row dense class="justify-center">
    <v-col cols="6">
      <v-card tile color="info" class="py-2">
        <v-card-text>
          <v-row dense class="justify-center">
            <v-col cols="6" class="text-center">
                <h2 class="mb-3 white--text">Counter</h2>
              <v-chip color="primary"  x-large>{{ Counter }}</v-chip>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="pa-2">
          <v-spacer></v-spacer>
          <v-btn depressed small color="grey" @click="HandleCounter('plus')">Increase</v-btn>
          <v-btn depressed small color="success" @click="HandleCounter('minus')"
            >Decrease</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      Item: {},
    };
  },
  computed: {
    Counter() {
      return this.$store.getters.LoadedCounter;
    },
  },
  methods: {
    HandleCounter(type) {
      this.$store.dispatch("setCounter", type);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>