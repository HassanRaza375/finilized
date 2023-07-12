<template>
  <v-row dense>
    <v-col cols="12">
      <v-card>
        <v-card-title>
          Todo List Items
          <v-spacer></v-spacer>
          <span>
            <v-text-field
              v-model="search"
              label="Search"
              dense
              hide-details="auto"
            ></v-text-field>
          </span>
          <v-btn
            class="ml-2"
            small
            depressed
            color="success"
            @click="OpenDialog = !OpenDialog"
            >Add Todo</v-btn
          >
        </v-card-title>
        <v-card-text>
          <v-col cols="12">
            <v-data-table
              dense
              :headers="headers"
              :items="Todos"
              :search="search"
              item-key="name"
              class="elevation-1"
            >
              <template #[`item.Priority`]="{ item }">
                <v-progress-linear v-model="item.Priority" height="25">
                  <strong>{{ Math.ceil(item.Priority) }}%</strong>
                </v-progress-linear>
              </template>
            </v-data-table>
          </v-col>
        </v-card-text>
      </v-card>
    </v-col>
    <todoList
      v-if="OpenDialog"
      @getval="saveval"
      @close="OpenDialog = !OpenDialog"
    />
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      OpenDialog: false,
      search: "",
      headers: [
        {
          text: "Todo Name",
          value: "Name",
        },
        { text: "Todo Type", value: "Type" },
        { text: "Priority", value: "Priority" },
        { text: "Is Active", value: "Active" },
      ],
    };
  },
  computed: {
    Todos() {
      return this.$store.state.TODOS;
    },
  },
  methods: {
    saveval(e) {
      console.log(e);
      e.Priority * 10;
      const arr = [e];
      this.OpenDialog = !this.OpenDialog;
      this.$store.dispatch("payload", {
        Name: "TODOS",
        Value: arr,
      });
      //   this.Todos.push(e);
    },
  },
};
</script>
